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
