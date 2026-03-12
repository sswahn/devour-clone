import { useState } from 'react'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import MicrophoneSlashIcon from '../Icons/MicrophoneIcon/MicrophoneSlashIcon'

function MuteButton({ streamRef }) {
  const [mute, setMute] = useState(false)
  
  const toggleMute = event => {
    !mute ? camera.mute(streamRef.current) : camera.unmute(streamRef.current)
    setMute(!mute)
  }
  
  return (
    <div id="mute-video" className="video-mute" aria-hidden="false">
      <button className="icon-btn" onClick={toggleMute} type="button" aria-label="unmute video">
        {mute ? <MicrophoneSlashIcon /> : <MicrophoneIcon />}
        <div className="tooltip" role="tooltip">{mute ? 'Unmute' : 'Mute'</div>
      </button>
    </div>
  )
}

export default MuteButton
