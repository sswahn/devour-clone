import { useState, useRef, useEffect } from 'react'
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
  const listRef = useRef(null)
  const initialHeight = useRef(0)
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  
  const context = { 
    notifications: [
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
    ]
  }

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      const bottomSheet = bottomSheetRef.current
      bottomSheet.style.transform = ''
      bottomSheet.addEventListener("transitionend", closeNotifications, { once: true })
      setIsOpen(false)
    }
  }

  const handlePointerDown = event => {
    dragging.current = true
    startY.current = event.clientY
    startTime.current = performance.now()
    initialHeight.current = bottomSheetRef.current.offsetHeight
  }

  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    const bottomSheet = bottomSheetRef.current
    const deltaY = event.clientY - startY.current
    

  
    if (listRef.current.scrollTop === 0 && deltaY > 0) {
      // Prevent the list from scrolling so the sheet moves instead
      event.preventDefault()
 
 


    const height = initialHeight.current
    const maxDragUp = -200
    let translate = deltaY
    
    if (deltaY < 0) {
      const resistanceFactor = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(maxDragUp))
      const stretch = Math.abs(deltaY) * resistanceFactor
      bottomSheet.style.height = `${height + stretch}px`
      bottomSheet.style.transform = `translateY(0px)` 
    } else {
      bottomSheet.style.height = `${height}px`
      bottomSheet.style.transform = `translateY(${deltaY}px)`
    }



    //////
      } else {
        bottomSheet.style.transform = 'translateY(0px)'
      }

      
  }

  const handlePointerUp = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    event.currentTarget.releasePointerCapture(event.pointerId)
    const deltaY = event.clientY - startY.current
    const deltaTime = performance.now() - startTime.current
    const velocity = deltaY / deltaTime
    const bottomSheet = bottomSheetRef.current
    bottomSheet.style.transition = 'transform 100ms cubic-bezier(0.25, 1, 0.5, 1), height 100ms ease'
    bottomSheet.style.height = ''
    if (deltaY > bottomSheet.offsetHeight / 2 || velocity > 0.5) {
      bottomSheet.style.transform = ''
      bottomSheet.addEventListener("transitionend", closeNotifications, { once: true })
      setIsOpen(false)
    } else {
      bottomSheet.style.transform = `translateY(0)`
    }
  }

  const handlePointerCancel = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    const bottomSheet = bottomSheetRef.current
    bottomSheet.style.transition = 'transform 100ms cubic-bezier(0.25, 1, 0.5, 1), height 100ms ease'
    bottomSheet.style.transform = 'translateY(0)'
    bottomSheet.style.height = ''
  }

  useEffect(() => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }, [])

  // need bottomsheet height to expand with list items.
    
  return (
    <div className={styles.notifications} onClick={handleClose}>
      <section ref={bottomSheetRef}  
        className={`${styles.bottomSheet} ${isOpen ? styles.open : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        role="dialog" 
        aria-modal="true" 
        aria-label="notifications">
        <div id="grabber" role="presentation"></div>
        <ul ref={listRef} aria-label="user notifications">
          {context.notifications?.map((notification, index) => 
            <li key={index}>{notification}</li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
