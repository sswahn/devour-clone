import { useRef, useEffect, memo } from 'react'
import useSpeechRecognition from '../../../hooks/useSpeechRecognition'
import MicrophoneIcon from '../../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './SpeechRecognitionButton.module.css'

function SpeechRecognitionButton({ setTempTranscript, setFinalTranscript }) {

  const speechRecognition = () => {
    const recognition = useSpeechRecognition()
    recognition.start()
    
  }

  return (window.SpeechRecognition || window.webkitSpeechRecognition) && (
    <button className={styles.speechRecognitionButton} onClick={speechRecognition} type="button" aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default memo(SpeechRecognitionButton)
