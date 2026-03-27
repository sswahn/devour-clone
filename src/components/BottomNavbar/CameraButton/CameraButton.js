import { useContext } from 'react'
import { SetCameraContext} from '../Providers/CameraProvider'
import CameraIcon from '../../Icons/CameraIcon/CameraIcon'
import styles from './camerabutton.module.css'

function CameraButton() {
  const setCameraContext = useContext(SetCameraContext)
  
  const onClick = async event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    return
    try {
      await document.documentElement.requestFullscreen()
      await screen.orientation.lock('portrait')
      setCameraContext(prevContext => !prevContext)
    } catch (error) {
      console.error('Opening camera failed: ', error)
    }
  }
  
  return (
    <button className={styles.cameraButton} onClick={onClick} type="button" aria-label="open camera">
      <CameraIcon size={32} />  
    </button>
  )
}

export default CameraButton
