
function ViewPort() {

  return (
    <video ref={videoRef} className="camera" autoPlay muted playsInline aria-label="camera feed" aria-live="assertive"></video>
  )
}

export default ViewPort
