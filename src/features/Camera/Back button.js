

function BackButton() {
  

  return (
    <button className="camera-back-btn" onClick={handleCloseCamera} type="button" aria-label="close camera button">
      <ArrowLeftIcon />
      <div className="tooltip" role="tooltip">Back</div>
    </button>
  )
}

export default BackButton
