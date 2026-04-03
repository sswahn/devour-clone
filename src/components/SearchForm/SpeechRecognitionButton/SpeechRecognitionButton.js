import { useRef, useEffect, memo } from 'react'
import useSpeechRecognition from '../../../hooks/useSpeechRecognition'
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

function SpeechRecognitionButton({ setTempTranscript, setFinalTranscript }) {
  const recognition = useSpeechRecognition()

  const handleSpeechRecognition = () => {
    recognition.start()

    console.log('recognition.interimTranscript: ', recognition.interimTranscript)
    console.log('recognition.finalTranscript: ', recognition.finalTranscript)
    
    setTempTranscript(recognition.interimTranscript)
    setFinalTranscript(recognition.finalTranscript)
  }

  return recognition.isSupported && (
    <button className={styles.speechRecognitionButton} onClick={handleSpeechRecognition} type="button" aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default SpeechRecognitionButton
