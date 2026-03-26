import { useContext } from 'state'
import { Context } from '../../../Provider'
import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './notificationsbutton.module.css'

function NotificationsButton() {
  const [context, dispatch] = useContext(Context)

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    // dispatch({ type: 'drawer', payload: true })
    return
  }
  
  return (
    <button className={styles.notificationsButton} onClick={onClick} type="button" aria-label="notifications">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
