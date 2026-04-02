import CameraIcon from '../../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton({ openCamera }) {
 
  const onClick = async event => {
    try {
      navigator.vibrate(50)
      return
      await document.getElementById('portal').requestFullscreen()
      await screen.orientation.lock('portrait')
      openCamera()
    } catch (error) {
      throw new Error(error)
    }
  }
  
  return (
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="open camera">
      <CameraIcon size={32} />  
    </button>
  )
}

export default CameraButton
