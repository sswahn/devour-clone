import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './notificationsbutton.module.css'

function NotificationsButton() {

  const onClick = event => {
    try {
      navigator.vibrate(50)
      // open notifications
    } catch (error) {
      throw new Error(error)
    }
  }
  
  return (
    <button className={styles.notificationsButton} onClick={onClick} type="button" aria-label="open notifications">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
