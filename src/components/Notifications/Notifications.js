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
    initialHeight.current = bottomSheetRef.current.offsetHeight // window.innerHeight * 0.5 // bottomSheetRef.current.offsetHeight
    
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
    const maxDragUp = -300

    // Use a fixed base height (50dvh in your case)
    // It is better to capture this once in PointerDown as initialHeight.current
    const height = initialHeight.current
  
    if (deltaY < 0) {
      /* STRETCH UP */
      const resistanceFactor = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(maxDragUp))
      const stretch = Math.abs(deltaY) * resistanceFactor
      
      // Grow the height, but keep it pinned at the bottom
      bottomSheet.style.height = `${height + stretch}px`
      // Keeps it pinned at the bottom:
      bottomSheet.style.transform = `translateY(0px)`
    } else {
      /* SLIDE DOWN */
      // Reset height to base and slide the whole element down
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
