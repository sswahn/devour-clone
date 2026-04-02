import UserIcon from '../../../Icons/UserIcon/UserIcon'
import styles from './profilebutton.module.css'

function ProfileButton({ openProfile }) {
  
  const onClick = async event => {
    try {
      navigator.vibrate(50)
      return
      await document.documentElement.requestFullscreen()
      await screen.orientation.lock('portrait')
      openProfile()
    } catch (error) {
      throw new Error(error)
    }
  }
  
  return (
    <button className={styles.profileButton} onClick={onClick} type="button" aria-label="open profile">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
