import CameraIcon from '../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton() {

  const onClick = event => {
    // open camera
  }
  
  return (
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="camera">
      <CameraIcon />  
    </button>
  )
}

export default CameraButton
