import { useContext } from 'react'
// import { SetProfileContext } from '../../Providers/ProfileProvider'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './profilebutton.module.css'

function ProfileButton() {
  // const setProfileContext = useContext(SetProfileContext)

  const onClick = async event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    return
    try {
      await document.documentElement.requestFullscreen()
      await screen.orientation.lock('portrait')
      // setProfileContext(prevContext => !prevContext)
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
