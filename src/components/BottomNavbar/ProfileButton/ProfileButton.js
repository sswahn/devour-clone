import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './profilebutton.module.css'

function ProfileButton() {

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    return
  }
  
  return (
    <button className={styles.profileButton} onClick={onClick} type="button" aria-label="profile">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
