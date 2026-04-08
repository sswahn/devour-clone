import BellIcon from '../../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton({ openNotifications }) {

  const onClick = event => {
    navigator.vibrate(50)
    openNotifications()
  }
  
  return (
    <button className={styles.notificationsButton} onClick={onClick} type="button" aria-label="open notifications" aria-haspopup="dialog">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
