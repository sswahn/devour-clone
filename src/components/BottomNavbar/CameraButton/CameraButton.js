import { useContext } from 'react'
import { SetCameraContext} from '../../Providers/CameraProvider'
import CameraIcon from '../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton() {
  const setCameraContext = useContext(SetCameraContext)
  
  const onClick = async event => {
    try {
      navigator.vibrate(50)
      return
      await document.getElementById('portal').requestFullscreen()
      await screen.orientation.lock('portrait')
      setCameraContext(prevContext => !prevContext)
    } catch (error) {
      console.error(`Error opening camera: ${error}`)
    }
  }
  
  return (
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="open camera">
      <CameraIcon size={32} />  
    </button>
  )
}

export default CameraButton
