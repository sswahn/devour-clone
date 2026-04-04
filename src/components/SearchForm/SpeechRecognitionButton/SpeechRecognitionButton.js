import { useRef, useEffect, memo } from 'react'
import useSpeechRecognition from '../../../hooks/useSpeechRecognition'
import useSpeechChime from '../../hooks/useSpeechChime'
import MicrophoneIcon from '../../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './SpeechRecognitionButton.module.css'

/*
isSupported,
isListening,
finalTranscript,
interimTranscript,
error,
start,
stop,
reset
*/

function SpeechRecognitionButton({ setSearchValue }) {
  const recognition = useSpeechRecognition()
  const { playStart, playStop } = useSpeechChime()


  const handleSpeechRecognition = () => {
    if (recognition.isListening) {
      recognition.stop()
    } else {
      recognition.reset()
      recognition.start()
    }
  }

  useEffect(() => {
    const combined = `${recognition.finalTranscript} ${recognition.interimTranscript}`.trim()
    if (combined) {
      setSearchValue(prev => prev === combined ? prev : combined)
    }
  }, [recognition.finalTranscript, recognition.interimTranscript,setSearchValue])

  return recognition.isSupported && (
    <button 
      className={`${styles.speechRecognitionButton} ${recognition.isListening ? styles.active : ''}`} 
      onClick={handleSpeechRecognition} 
      type="button" 
      aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default SpeechRecognitionButton
