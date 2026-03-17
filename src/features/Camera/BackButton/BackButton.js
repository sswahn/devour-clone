import { useContext } from 'react'
import { Context } from '../../../Provider'
import ArrowLeftIcon from '../../../components/Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './backbutton.module.css'

function BackButton({ stopCamera }) {
  const [context, dispatch] = useContext(Context)
  
  const handleCloseCamera = event => {
    stopCamera()
    dispatch({ type: 'camera', payload: false })
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  }

  return (
    <button className={styles.backButton} onClick={handleCloseCamera} type="button" aria-label="close camera">
      <ArrowLeftIcon />
      <div className="tooltip" role="tooltip">Back</div>
    </button>
  )
}

export default BackButton
