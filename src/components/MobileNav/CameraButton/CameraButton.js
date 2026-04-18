import CameraIcon from '../../../Icons/CameraIcon/CameraIcon'
import styles from './CameraButton.module.css'

function CameraButton({ cameraButtonRef, openCamera }) {

  const action = async () => {
    navigator.vibrate(50); return;
   
    // await document.getElementById('portal').requestFullscreen()
    // await screen.orientation.lock('portrait')
    openCamera()
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
      className={styles.cameraButton} 
      ref={cameraButtonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="open camera" 
      aria-haspopup="dialog">
      <CameraIcon size={32} />  
    </button>
  )
}

export default CameraButton
