import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './backbutton.module.css'

function BackButton({ stopCamera }) {
  
  const handleCloseCamera = event => {
    stopCamera()
    dispatch({ type: 'camera', payload: false })
  }

  return (
    <button className={styles.backButton} onClick={handleCloseCamera} type="button" aria-label="close camera">
      <ArrowLeftIcon />
      <div className="tooltip" role="tooltip">Back</div>
    </button>
  )
}

export default BackButton
