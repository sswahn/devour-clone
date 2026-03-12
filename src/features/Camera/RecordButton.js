import { useState } from 'react'

function RecordButton({ streamRef }) {

  const handleRecordVideo = () => {
    // check remaining time?
    dispatch({ type: 'mode', payload: 'recording' })  // narrow down this 'mode' thing and maybe dont use it anymore
    
    const recorder = camera.startRecording(streamRef.current, framesRef.current)
    recorderRef.current = recorder
  }

  const handleStopRecordVideo = async () => {
    
    dispatch({ type: 'mode', payload: 'video' }) // or at least change mode from video to recording/not recording
    
    timerRef.current = timer
    const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
    const video = [ ...context.video, blob ]
    const currentDuration = context.video_duration.reduce((acc, val) => acc + val, 0)
    const duration = [ ...context.video_duration, 300 - timerRef.current - currentDuration ]
    dispatch({ type: 'video_duration', payload: duration })
    dispatch({ type: 'video', payload: video }) 
    db.put({ id: 'video', video, duration })
  }
  
  const handleRecordButton = event => {
    context.mode === 'recording' ? handleStopRecordVideo() : handleRecordVideo()
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
