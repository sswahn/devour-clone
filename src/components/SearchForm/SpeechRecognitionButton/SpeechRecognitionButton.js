
function SpeechRecognitionButton() {

  return window.SpeechRecognition || window.webkitSpeechRecognition && 
    <button type="button" onClick={speechRecognition} aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default SpeechRecognitionButton
