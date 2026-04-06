import { useState, useRef, useEffect } from 'react'
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
  const initialHeight = useRef(0)
  const dragging = useRef(false)
  const startY = useRef(0)
  const velocity = useRef(0)
  
  const lastTime = useRef(0)
  
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
    initialHeight.current = bottomSheetRef.current.offsetHeight
    
    lastTime.current = performance.now()
  }

  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    const bottomSheet = bottomSheetRef.current
    const deltaY = event.clientY - startY.current
    
    /* elasticity */
    let translate = deltaY
    const maxDragUp = -200
    const height = initialHeight.current // fixed height
  
    if (deltaY < 0) {
      const resistanceFactor = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(maxDragUp))
      const stretch = Math.abs(deltaY) * resistanceFactor
      bottomSheet.style.height = `${height + stretch}px` // Grow the height, but keep it pinned at the bottom
      bottomSheet.style.transform = `translateY(0px)`  // Keeps it pinned at the bottom
    } else {
      bottomSheet.style.height = `${height}px`
      bottomSheet.style.transform = `translateY(${deltaY}px)`
    }
  }

  const handlePointerUp = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    
    const deltaY = event.clientY - startY.current
    const deltaTime = performance.now() - startTime.current
    const velocity = deltaY / deltaTime
    
    const bottomSheet = bottomSheetRef.current
    bottomSheet.style.transition = 'transform 100ms ease' // restore CSS transition
    if (deltaY > bottomSheet.offsetHeight / 2) {
      bottomSheet.style.transform = '' // clear inline transform so class takes over
      bottomSheet.addEventListener("transitionend", closeNotifications, { once: true })
      setIsOpen(false)
    } else {
      bottomSheet.style.transform = `translateY(0)`
      bottomSheet.style.height = ''
    }
  }

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      const bottomSheet = bottomSheetRef.current
      bottomSheet.style.transform = ''
      bottomSheet.addEventListener("transitionend", closeNotifications, { once: true })
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
