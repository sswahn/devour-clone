import { useState } from 'react'

function RecordButton() {

  const handleRecordButton = event => {
    context.mode === 'recording'
      ? handleStopRecordVideo()
      : handleRecordVideo()
  }
  
  return (
    <div className="card-actions">
      <div className="camera-button-container">
        <button 
          className="camera-button" 
          onClick={handleCameraButton} 
          type="button" 
          aria-label="camera button"
          style={{
            backgroundColor: context.mode === 'recording' ? '#cb4154' : '#e5e4e2', 
            borderColor: context.mode === 'recording' ? '#eb4c42' : 'white'
        }}></button>
      </div>
    </div>
  )
}

export default RecordButton
