

function LightButton({ streamRef }) {

  const handleTurnOnLight = event => {
    const setting = !light
    setting ? camera.light(streamRef.current) : camera.dark(streamRef.current)
    setLight(setting)
  }
  
  return (
    <></>
  )
}
