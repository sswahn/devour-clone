import { useState, useContext, useEffect, useRef, useCallback } from 'react'
import { Context } from '../../Provider'
import camera from '../../utilities/camera'
import storage from '@sswahn/storage'
import database from '@sswahn/database'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import NavOverlay from './NavOverlay'

const Camera = () => {
  const [context, dispatch] = useContext(Context)

  const [isFlashing, setIsFlashing] = useState(false)
  
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  const db = database()

  const startCamera = async () => {
    try {
      const stream = await camera.on()
      streamRef.current = stream
      videoRef.current.srcObject = stream
    } catch (error) {
      console.error('Error accessing camera.')
    }
  }
  
  const stopCamera = event => {
    if (streamRef.current) {
      camera.off(streamRef.current) 
      streamRef.current = null
    }
  }
  
  const loadFromStorage = async () => {
    const video = await db.get('video')
    const totalDuration = video?.duration.reduce((acc, val) => acc + val, 0)
    dispatch({ type: 'video', payload: video?.video || [] })
    dispatch({ type: 'video_duration', payload: video?.duration || [] })
    if (totalDuration) {
      setTimer(300 - totalDuration) 
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
      loadFromStorage()
    }
    return () => {
      stopCamera()
    }
  }, [])

  // move the rest of this into componet into NavOverlay and make NavOverlay into Camera
  
  return (
    <div className="card" aria-label="camera viewport">
      <div className={`flash-overlay ${isFlashing ? 'flash' : ''}`}></div>
        <>
          <div className="card-content">
            <video ref={videoRef} className="camera" autoPlay muted playsInline aria-label="camera feed" aria-live="assertive"></video>
            <NavOverlay />
          </div>
        </>
    </div>
  )
}

export default Camera
