import CameraIcon from '../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton() {

  const onClick = async event => {
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
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="camera">
      <CameraIcon size={28} />  
    </button>
  )
}

export default CameraButton
