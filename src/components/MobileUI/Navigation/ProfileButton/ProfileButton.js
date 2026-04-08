import UserIcon from '../../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton({ openProfile }) {
  
  const onClick = async event => {
    navigator.vibrate(50)
    // await document.documentElement.requestFullscreen()
    // await screen.orientation.lock('portrait')
    openProfile()
  }
  
  return (
    <button className={styles.profileButton} onClick={onClick} type="button" aria-label="open profile">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
