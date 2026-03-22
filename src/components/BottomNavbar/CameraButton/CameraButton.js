
import styles from './camerabutton.module.css'

function CameraButton() {

  const onClick = event => {
    // open camera
  }
  
  return (
    <button className={styles.cameraButton} type="button" aria-label="camera">
      <CameraIcon />  
    </button>
  )
}

export default CameraButton
