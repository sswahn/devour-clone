import { useState, useContext, useEffect, useRef, useCallback } from 'react'
import { Context } from '../../Provider'
import camera from '../../utilities/camera'
import storage from '@sswahn/storage'
import database from '@sswahn/database'

import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import NavOverlay from './NavOverlay'
import SubmitPost from './SubmitPost'

const Camera = () => {
  const [context, dispatch] = useContext(Context)

  const [type, setType] = useState(undefined)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isFlashing, setIsFlashing] = useState(false)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  
  const previewModalRef = useRef(null)
  const locationModalRef = useRef(null)
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

  // consider nav overlay as all navigation elements 
  // (including close camera, and toggle light buttons, and camera button)
  // move those to navOverlay.js
  // move modals out as well.
  // make the parent component <Camera />
  // and it would contain, <ViewPort /> (this current component), and <NavOverlay />
  
  return (
    <div className="card" aria-label="camera viewport">
      <div className={`flash-overlay ${isFlashing ? 'flash' : ''}`}></div>
        <>
          <div className="card-header">
            <button className="camera-back-btn" onClick={handleCloseCamera} type="button" aria-label="close camera button">
              <ArrowLeftIcon />
              <div className="tooltip" role="tooltip">Back</div>
            </button>
            <LightButton streamRef={streamRef} />
          </div>
          
          <div className="card-content">
            <video ref={videoRef} className="camera" autoPlay muted playsInline aria-label="camera feed" aria-live="assertive"></video>
            <NavOverlay timer={timer} previewFiles={handlePreviewFiles} openSubmit={handleOpenLocationModal} toggleMute={toggleMute} mute={mute} />
          </div>
        </>
      
    </div>
  )
}

export default Camera
