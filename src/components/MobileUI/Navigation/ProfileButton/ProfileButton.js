import UserIcon from '../../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton({ profileButtonRef, openProfile }) {

  const action = async () => {
    navigator.vibrate(50)
    // await document.documentElement.requestFullscreen()
    // await screen.orientation.lock('portrait')
    openProfile()
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button 
      className={styles.profileButton} 
      ref={profileButtonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="open profile" 
      aria-haspopup="dialog">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
