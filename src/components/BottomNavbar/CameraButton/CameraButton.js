import CameraIcon from '../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton() {

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    return
  }
  
  return (
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="camera">
      <CameraIcon />  
    </button>
  )
}

export default CameraButton
