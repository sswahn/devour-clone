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

  const pointerDown = event => {
    dragging.current = true
    startY.current = event.clientY

    currentY.current = event.clientY
    bottomSheetRef.current.style.transition = 'none'
    bottomSheetRef.current.setPointerCapture(event.pointerId)
  }

  const pointerMove = event => {
    if (!dragging.current) {
      return
    }
    currentY.current = event.clientY
    const deltaY = currentY.current - startY.current
    if (deltaY > 0) {
      bottomSheetRef.current.style.transform = `translateY(${deltaY}px)`
    }
  }

  const pointerUp = event => {
    if (!dragging.current) {
      return
    }
    dragging.current = false
    const deltaY = currentY.current - startY.current
    const sheetHeight = bottomSheetRef.current.offsetHeight
    if (deltaY > sheetHeight / 2) {
      closeNotifications()
    } else {
      bottomSheetRef.current.style.transform = `translateY(0)`
    }
    bottomSheetRef.current.releasePointerCapture(event.pointerId)
  }

  const handleClose = event => {
    if (!bottomSheetRef.current.contains(event.target)) {
      closeNotifications()
    }
  }
  
  useEffect(() => {
    const bottomSheet = bottomSheetRef.current
    bottomSheet.addEventListener('pointerdown', pointerDown)
    bottomSheet.addEventListener('pointermove', pointerMove)
    bottomSheet.addEventListener('pointerup', pointerUp)
    bottomSheet.addEventListener('pointercancel', pointerUp)
    return () => {
      bottomSheet.removeEventListener('pointerdown', pointerDown)
      bottomSheet.removeEventListener('pointermove', pointerMove)
      bottomSheet.removeEventListener('pointerup', pointerUp)
      bottomSheet.removeEventListener('pointercancel', pointerUp)
    }
  }, [])
  
  return (
    <div className={styles.notifications}>
      <section ref={bottomSheetRef}>
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
