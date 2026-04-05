import BellIcon from '../../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton({ openNotifications }) {

  const onClick = async event => {
    navigator.vibrate(50)
    //await document.getElementById('portal').requestFullscreen()
    //await screen.orientation.lock('portrait')
    openNotifications()
  }
  
  return (
    <button className={styles.notificationsButton} onClick={onClick} type="button" aria-label="open notifications">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
