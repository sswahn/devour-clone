import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './profilebutton.module.css'

function ProfileButton() {

  const onClick = async event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    return
    try {
      console.error('Requesting fullscreen.')
      await document.documentElement.requestFullscreen()
      await screen.orientation.lock('portrait')
      console.log('Locked to portrait.')
      dispatch({ type: 'camera', payload: true })
    } catch (error) {
      console.error('Fullscreen failed:', error)
    }
  }
  
  return (
    <button className={styles.profileButton} onClick={onClick} type="button" aria-label="open profile">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
