
function SpeechRecognitionButton() {

  // consider using a custom hook
  const speechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'
    recognition.onresult = event => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      console.log(transcript) // set state with transcript
    }
    recognition.start()
  }

  return window.SpeechRecognition || window.webkitSpeechRecognition && 
    <button type="button" onClick={speechRecognition} aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default SpeechRecognitionButton
