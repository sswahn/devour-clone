import { useState } from 'react'
import SunIcon from '../Icons/SunIcon/SunIcon'
import DarkSunIcon from '../Icons/SunIcon/DarkSunIcon'

function LightButton({ streamRef }) {
  const [light, setLight] = useState(false)

  const handleTurnOnLight = event => {
    light ? camera.dark(streamRef.current) : camera.light(streamRef.current)
    setLight(!light)
  }
  
  return (
    <button className="camera-light-btn" onClick={handleTurnOnLight} type="button" aria-label="camera light button">
      {light ? <DarkSunIcon /> : <SunIcon />}
      <div className="tooltip" role="tooltip">Light</div>
    </button>
  )
}

export default LightButton
