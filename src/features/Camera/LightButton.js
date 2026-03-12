import { useState } from 'react'

function LightButton({ streamRef }) {
  const [light, setLight] = useState(false)

  const handleTurnOnLight = event => {
    const setting = !light
    setting ? camera.light(streamRef.current) : camera.dark(streamRef.current)
    setLight(setting)
  }
  
  return (
    <button className="camera-light-btn" onClick={handleTurnOnLight} type="button" aria-label="camera light button">
      {light ? <DarkSunIcon /> : <SunIcon />}
      <div className="tooltip" role="tooltip">Light</div>
    </button>
  )
}

export default LightButton
