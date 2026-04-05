// notifications arrive from server push events
// the button must 'know' of updates so they will be set via context
import styles from './Notifications.module.css'

function Notifications({ closeNotifications }) {
  const context = { 
    notifications: [1, 2, 3]
  }
  
  // use bottomsheet
  // .notifications class is the overlay, and contains the bottomsheet
  // 
  
  return (
    <div className={styles.notifications}>
      <section>
        <div></div>
        <ul>
          {context.notifications?.map(notification => 
            <li>{notification}</li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
