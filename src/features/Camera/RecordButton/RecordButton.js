import { useState, useContext, useRef } from 'react'
import { Context } from '../../../Provider'
import database from '@sswahn/database'
import styles from './recordbutton.module.css'

function RecordButton({ streamRef, timer }) {
  const [context, dispatch] = useContext(Context)
  const framesRef = useRef([])
  const recorderRef = useRef(null)
  const db = database()
  
  const handleRecordVideo = () => {
    if (timer < 1) {
      return alert('No recording time remaining.') // should be custom modal
    }
    dispatch({ type: 'recording', payload: true })
    const recorder = camera.startRecording(streamRef.current, framesRef.current)
    recorderRef.current = recorder
  }

  const handleStopRecordVideo = async () => {
    dispatch({ type: 'recording', payload: false })
    
    const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
    const video = [ ...context.video, blob ]
    const currentDuration = context.video_duration.reduce((acc, val) => acc + val, 0)

    // it may be more reliable to set timer in parent component instead of timerRef
    
    const duration = [ ...context.video_duration, 300 - timer - currentDuration ]
    
    dispatch({ type: 'video_duration', payload: duration })
    dispatch({ type: 'video', payload: video })
    
    db.put({ id: 'video', video, duration })
  }
  
  const handleRecordButton = event => {
    context.recording ? handleStopRecordVideo() : handleRecordVideo()
  }
  
  return (
    <div className={styles.recordButtonContainer}>
      <button className={styles.recordButton} onClick={handleRecordButton} type="button" aria-label="record button" style={{
        backgroundColor: context.recording ? '#cb4154' : '#e5e4e2', 
        borderColor: context.recording ? '#eb4c42' : 'white'
      }}></button>
    </div>
  )
}

export default RecordButton
