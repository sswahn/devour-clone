import useSession from '../../../hooks/useSession'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton({ profileButtonRef, openProfile }) {
  const session = useSession()
  
  const action = async () => {
    navigator.vibrate(50)
    openProfile(session.username)
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
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
