import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './notificationsButton.module.css'


function NotificationsButton() {

  const onClick = event => {
    return
  }
  
  return (
    <button className={styles.notificationsButton} onClick={onClick} type="button" aria-label="notifications">
      <BellIcon />  
    </button>
  )
}

export default NotificationsButton
