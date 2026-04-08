import CameraIcon from '../../../Icons/CameraIcon/CameraIcon'
import styles from './CameraButton.module.css'

function CameraButton({ cameraButtonRef, openCamera }) {
 
  const onClick = async event => {
    navigator.vibrate(50); return;
   
    // await document.getElementById('portal').requestFullscreen()
    // await screen.orientation.lock('portrait')
    openCamera()
  }
  
  return (
    <button 
      className={styles.cameraButton} 
      ref={cameraButtonRef} 
      onClick={onClick} 
      type="button" 
      aria-label="open camera" 
      aria-haspopup="dialog">
      <CameraIcon size={32} />  
    </button>
  )
}

export default CameraButton
