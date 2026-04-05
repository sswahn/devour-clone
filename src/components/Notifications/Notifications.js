import { useRef, useEffect } from 'react'
// notifications arrive from server push events
// the button must 'know' of updates so they will be set via context
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const bottomSheetRef = useRef(null)
  const dragging = useRef(false)
  const startY = useRef(0)
  const currentY = useRef(0)
  
  const context = { 
    notifications: [1, 2, 3]
  }

  const handlePointerDown = event => {
    dragging.current = true
    startY.current = event.clientY
   // currentY.current = event.clientY

    const bottomSheet = bottomSheetRef.current

    bottomSheet.style.animation = 'none'
    bottomSheet.style.transition = 'none'
   // bottomSheet.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    currentY.current = event.clientY
    const deltaY = currentY.current - startY.current
    if (deltaY > 0) {
      bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`
    }
  }

  const handlePointerUp = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    const deltaY = event.current - startY.current
    const bottomSheet = bottomSheetRef.current

   sheet.style.transition = 'transform 0.2s ease'
    
    if (deltaY > bottomSheet.offsetHeight / 2) {
      closeNotifications()
    } else {
      bottomSheet.style.transform = `translateY(0)`
    }
   // bottomSheet.releasePointerCapture(event.pointerId)
  }

  const handleClose = event => {
    if (!bottomSheetRef.current.contains(event.target)) {
      closeNotifications()
    }
  }
  
  return (
    <div className={styles.notifications}>
      <section ref={bottomSheetRef}         
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}>
        <div></div>
        <ul role="listbox">
          {context.notifications?.map((notification, index) => 
            <li key={index} role="option">{notification}</li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
