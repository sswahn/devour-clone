import { useState, useRef, useEffect } from 'react'
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
  const dragging = useRef(false)
  const startY = useRef(0)
  const currentY = useRef(0)
  
  const context = { 
    notifications: [
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
    ]
  }

  const handlePointerDown = event => {
    dragging.current = true
    startY.current = event.clientY
  }

  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    const deltaY = event.clientY - startY.current
    if (deltaY > 0) {
      bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`
    }
  }

  const handlePointerUp = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    const deltaY = event.clientY - startY.current
    const bottomSheet = bottomSheetRef.current
    if (deltaY > bottomSheet.offsetHeight / 2) {
      
      bottomSheet.style.transition = 'transform 100ms ease' // restore CSS transition
      bottomSheet.style.transform = '' // clear inline transform so class takes over
      
      bottomSheet.addEventListener("transitionend", closeNotifications, { once: true })
      setIsOpen(false)
    } else {
      bottomSheet.style.transition = 'transform 100ms ease'
      bottomSheet.style.transform = `translateY(0)`
    }
  }

  const handleClose = event => {
    //if (!bottomSheetRef.current.contains(event.target)) { 
    if (event.target !== event.currentTarget) {
      bottomSheetRef.current.addEventListener("transitionend", closeNotifications, { once: true })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }, [])
  
  return (
    <div className={styles.notifications} onClick={handleClose}>
      <section ref={bottomSheetRef}  
        className={`${styles.bottomSheet} ${isOpen ? styles.open : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="dialog" 
        aria-modal="true" 
        aria-label="notifications">
        <div id="grabber" role="presentation"></div>
        <ul aria-label="user notifications">
          {context.notifications?.map((notification, index) => 
            <li key={index}>{notification}</li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
