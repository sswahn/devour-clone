import { useRef, useEffect, memo } from 'react'
import useSpeechRecognition from '../../../hooks/useSpeechRecognition'
import useSpeechChime from '../../../hooks/useSpeechChime'
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
  const chime = useSpeechChime()

  const action = () => {
    if (recognition.isListening) {
      recognition.stop()
      chime.playStop()
    } else {
      recognition.reset()
      recognition.start()
      chime.playStart()
    }
  }

  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
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
      onClick={onClick}
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="speech recognition"
      aria-description="search using your voice">
      <MicrophoneIcon size={12} />
    </button>
  )
}

export default SpeechRecognitionButton
