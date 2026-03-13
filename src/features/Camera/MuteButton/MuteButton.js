import { useState } from 'react'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import MicrophoneSlashIcon from '../Icons/MicrophoneIcon/MicrophoneSlashIcon'
import styles from './mutebutton.module.css'

function MuteButton({ streamRef }) {
  const [mute, setMute] = useState(false)
  
  const toggleMute = event => {
    !mute ? camera.mute(streamRef.current) : camera.unmute(streamRef.current)
    setMute(!mute)
  }
  
  return (
    <button className={styles.muteButton} onClick={toggleMute} type="button" aria-label={mute ? 'unmute' : 'mute'}>
      {mute ? <MicrophoneSlashIcon /> : <MicrophoneIcon />}
      <div className="tooltip" role="tooltip">{mute ? 'Unmute' : 'Mute'}</div>
    </button>
  )
}

export default MuteButton
