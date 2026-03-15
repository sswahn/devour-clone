import { useState, useRef, useEffect } from 'react'
import camera from '../../utilities/camera'
import ViewPort from './ViewPort/ViewPort'
import BackButton from './BackButton/BackButton'
import RecordTimer from './RecordTimer/RecordTimer'
import LightButton from './LightButton/LightButton'
import MuteButton from './MuteButton/MuteButton'
import RecordButton from './RecordButton/RecordButton'
import LocationButton from './LocationButton/LocationButton'
import styles from './camera.module.css'

function Camera() {
  const [timer, setTimer] = useState(300)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
 

  const startCamera = async () => {

    console.log('in startCamera. executing camera.on() next.')
    try {
      const stream = await camera.on()

      console.log('camera.on() executed. stream aquired: ', stream)
      
      
      streamRef.current = stream
      videoRef.current.srcObject = stream

      console.log('startCamera() function complete.')
      
    } catch (error) {
      console.error('Error accessing camera.')

      console.error(error.name, error.message)
      console.error('whole error: ', error)
      
    }
  }
  
  const stopCamera = event => {
    if (streamRef.current) {
      camera.off(streamRef.current) 
      streamRef.current = null
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <BackButton stopCamera={stopCamera} />
      <RecordTimer timer={timer} setTimer={setTimer} />
      <LightButton streamRef={streamRef} />
      <ViewPort videoRef={videoRef} />
      <MuteButton streamRef={streamRef} />
      <RecordButton streamRef={streamRef} timer={timer} />
      <LocationButton />
    </section>
  )
}

export default Camera
