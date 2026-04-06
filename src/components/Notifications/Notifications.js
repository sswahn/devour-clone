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
    notifications: [
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
      'testing user notification section, testing user notification section',
    ]
  }

  const handlePointerDown = event => {
    dragging.current = true
    startY.current = event.clientY
    bottomSheetRef.current.style.animation = 'none'
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
      closeNotifications()
    } else {
      bottomSheet.style.transform = `translateY(0)`
    }
  }

  const handleClose = event => {
    if (event.target !== event.currentTarget) { //(!bottomSheetRef.current.contains(event.target)) {
      closeNotifications()
    }
  }

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      return console.log("This browser does not support notifications.")
    }
    
    const permission = await Notification.requestPermission()
    
    if (permission === "granted") {
 
      const notification = new Notification("Hello!", {
        body: "This is a browser notification.",
        icon: "/path/to/icon.png" // Optional icon
      })
  
      // Optional: Handle click event
      notification.onclick = () => {
        window.focus()
        notification.close()
      }
    }
  }
  
  return (
    <div className={styles.notifications} onClick={handleClose}>
      <section ref={bottomSheetRef}         
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
