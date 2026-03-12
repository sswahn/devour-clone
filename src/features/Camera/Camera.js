import { useContext } from 'react'
import { Context } from '../../Provider'
import ViewPort from './ViewPort'
import BackButton from './BackButton'
import RecordTimer from './RecordTimer'
import LightButton from './LightButton'
import MuteButton from './MuteButton'
import RecordButton from './RecordButton'
import LocationButton from './LocationButton'
import styles from './camera.module.css'

function Camera() {
  const [context, dispatch] = useContext(Context)
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
    if (totalDuration) {
      setTimer(300 - totalDuration) // fix this with RecordTimer
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
      // loadFromStorage()
    }
    return () => {
      stopCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <BackButton stopCamera={stopCamera} />
      <RecordTimer />
      <LightButton streamRef={streamRef} />
      <ViewPort videoRef={videoRef} />
      <MuteButton streamRef={streamRef} />
      <RecordButton />
      <LocationButton />
    </section>
  )
}

export default Camera
