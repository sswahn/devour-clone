import { useRef, useEffect } from 'react'
// notifications arrive from server push events
// the button must 'know' of updates so they will be set via context
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const context = { 
    notifications: [1, 2, 3]
  }
  const touchStartY = useRef()
  const touchEndY = useRef()
  
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
    element.addEventListener('touchstart', touchStart)
    element.addEventListener('touchend', touchEnd)
    return () => {
      element.removeEventListener('touchstart', touchStart)
      element.removeEventListener('touchend', touchEnd)
    }
  }, [])
  
  return (
    <div className={styles.notifications}>
      <section>
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
