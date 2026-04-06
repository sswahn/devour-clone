import { useState, useRef, useEffect } from 'react'
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
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

    lastTime.current = performance.now()
  }

  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    const bottomSheet = bottomSheetRef.current
    const deltaY = event.clientY - startY.current
    
    /* elasticity */
    const height = bottomSheet.offsetHeight
    let translate = deltaY
    const maxDragUp = -300

    if (deltaY < 0) {
      //translate = deltaY * 0.5 // Resistance when dragging up   
      // 1. Calculate how far into the "resistance zone" we are (0 to 1)
      // As deltaY becomes more negative (closer to maxDragUp), 
      // resistanceFactor approaches 0.
      const resistanceFactor = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(maxDragUp))
      
      // 2. Apply non-linear resistance:
      // When deltaY is near 0, resistanceFactor is near 1 (mostly 1:1 movement).
      // When deltaY is near maxDragUp, resistanceFactor is near 0 (hardly any movement).
      translate = deltaY * resistanceFactor
    }
    // translate = Math.max(translate, maxDragUp)
    bottomSheet.style.transform = `translateY(${translate}px)`

    const newHeight = height + Math.abs(translate)
    bottomSheet.style.height = `${newHeight}px`
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
