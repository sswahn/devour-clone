import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './profilebutton.module.css'

function ProfileButton() {

  const onClick = event => {
    return
  }
  
  return (
    <button className={styles.profileButton} onClick={onClick} type="button" aria-label="profile">
      <UserIcon size="1em" />  
    </button>
  )
}

export default ProfileButton
