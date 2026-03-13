import { useRef } from 'react'
import ViewPort from './ViewPort/ViewPort'
import BackButton from './BackButton/BackButton'
import RecordTimer from './RecordTimer/RecordTimer'
import LightButton from './LightButton/LightButton'
import MuteButton from './MuteButton/MuteButton'
import RecordButton from './RecordButton/RecordButton'
import LocationButton from './LocationButton/LocationButton'
import styles from './camera.module.css'

function Camera() {
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  const [timer, setTimer] = useState(300)

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
