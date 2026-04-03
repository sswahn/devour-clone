import { useRef, useEffect, memo } from 'react'
import MicrophoneIcon from '../../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './SpeechRecognitionButton.module.css'

function SpeechRecognitionButton({ setTempTranscript, setFinalTranscript }) {
  const recognitionRef = useRef()
  // consider using a custom hook
  const speechRecognition = () => {

    console.log('speechRecognition function fired.')
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognitionRef.current = recognition
    
    console.log('recognition set.')

    
    recognition.onerror = event => {
      console.error('recognition error: ', event.error)
    }
    
    recognition.onresult = event => { 
      let temp = ''

      console.log('onresult event fired. looping: ')
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const segment = event.results[i][0].transcript

        console.log('event.results[i]: ', event.results[i])
        console.log('event.results[i][0].transcript: ', segment)
        
        if (event.results[i].isFinal) {
          setFinalTranscript(prev => [...prev, segment])
          setTempTranscript('')
        } else {
          temp += segment
          
          console.log('tempTranscript: ', temp)
          setTempTranscript(temp)
        }
      }
      
    }
    recognition.start()
  }

  useEffect(() => {
    return () => {
      recognitionRef.current.stop()
    }
  }, [])

  return (window.SpeechRecognition || window.webkitSpeechRecognition) && (
    <button className={styles.speechRecognitionButton} onClick={speechRecognition} type="button" aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default memo(SpeechRecognitionButton)
