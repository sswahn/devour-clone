
function MuteButton({ streamRef }) {

  const toggleMute = useCallback(event => {
    !mute ? camera.mute(streamRef.current) : camera.unmute(streamRef.current)
    setMute(!mute)
  }, [mute])
  
  return (
      <div id="mute-video" className="video-mute" aria-hidden="false">
        {mute ? (
          <button className="icon-btn" onClick={toggleMute} type="button" aria-label="unmute video">
            <MicrophoneSlashIcon />
            <div className="tooltip" role="tooltip">Unmute</div>
          </button>
        ) : (
          <button className="icon-btn" onClick={toggleMute} type="button" aria-label="mute video">
            <MicrophoneIcon />
            <div className="tooltip" role="tooltip">Mute</div>
          </button>
        )}
      </div>
  )
}

export default MuteButton
