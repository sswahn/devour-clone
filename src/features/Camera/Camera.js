import { useState, useContext } from 'react'
import { Context } from '../../Provider'
import camera from '../../utilities/camera'
import storage from '@sswahn/storage'
import database from '@sswahn/database'

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import NavOverlay from './NavOverlay'

const Camera = () => {
  const [context, dispatch] = useContext(Context)

  const [isFlashing, setIsFlashing] = useState(false)
  
  


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
