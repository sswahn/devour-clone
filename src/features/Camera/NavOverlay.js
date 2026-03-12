import { useContext } from 'react'
import { Context } from '../../Provider'
import FileVideoIcon from '../Icons/FileVideoIcon/FileVideoIcon'

import BackButton from './BackButton'
import RecordTimer from './RecordTimer'
import LightButton from './LightButton'
import MuteButton from './MuteButton'
import RecordButton from './RecordButton'
import LocationButton from './LocationButton'

const NavOverlay = ({ openSubmit }) => {
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
  
  return (
    <section className="camera-navigation">
      <BackButton stopCamera={stopCamera} />
      <RecordTimer />
      <LightButton streamRef={streamRef} />
      
      <MuteButton streamRef={streamRef} />
      <RecordButton />
      <LocationButton />
    </section>
  )
}

export default NavOverlay
