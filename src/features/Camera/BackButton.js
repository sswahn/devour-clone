
import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'

function BackButton() {
  
  const handleCloseCamera = event => {
    stopCamera()
    
    // this is no longer a modal so remove this type of dispatch
    dispatch({ type: 'modal', payload: { isOpen: false, content: <></> } })
  }

  return (
    <button className="camera-back-btn" onClick={handleCloseCamera} type="button" aria-label="close camera">
      <ArrowLeftIcon />
      <div className="tooltip" role="tooltip">Back</div>
    </button>
  )
}

export default BackButton
