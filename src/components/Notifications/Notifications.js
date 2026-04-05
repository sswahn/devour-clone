import { useRef, useEffect } from 'react'
// notifications arrive from server push events
// the button must 'know' of updates so they will be set via context
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const bottomSheetRef = useRef(null)
  const touchStartY = useRef()
  const touchEndY = useRef()
  
  const context = { 
    notifications: [1, 2, 3]
  }

  function handleGesture() {
    if (touchEndY.current > touchStartY.current + 50) {
      closeNotifications()
    }
  }

  const touchStart = event => {
    touchStartY.current = event.changedTouches[0].screenY
  }
  
  const touchEnd = event => {
    touchEndY.current = event.changedTouches[0].screenY
    handleGesture()
  }

  useEffect(() => {
    bottomSheetRef.current.addEventListener('pointerdown', touchStart, { passive: true })
    bottomSheetRef.current.addEventListener('pointermove', touchEnd, { passive: true })
    bottomSheetRef.current.addEventListener('pointerup', touchEnd, { passive: true })
    return () => {
      bottomSheetRef.current.removeEventListener('pointerdown', touchStart)
      bottomSheetRef.current.removeEventListener('pointermove', touchStart)
      bottomSheetRef.current.removeEventListener('pointerup', touchEnd)
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
