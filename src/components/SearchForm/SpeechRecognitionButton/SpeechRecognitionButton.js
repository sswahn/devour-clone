
function SpeechRecognitionButton({ setTempTranscript, setFinalTranscript }) {
  
  // value={`${finalTranscript.join(' ')} ${tempTranscript}`.trim()}

  // consider using a custom hook
  const speechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'
    recognition.onresult = event => { 
      let temp = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const segment = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          setFinalTranscript(prev => [...prev, segment])
          setTempTranscript('')
        } else {
          temp += segment
          setTempTranscript(temp)
        }
      }
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
