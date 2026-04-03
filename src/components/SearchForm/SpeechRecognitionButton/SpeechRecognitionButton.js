import { memo } from 'react'
import MicrophoneIcon from '../../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './SpeechRecognitionButton.module.css'

function SpeechRecognitionButton({ setTempTranscript, setFinalTranscript }) {
  
  // consider using a custom hook
  const speechRecognition = () => {

    console.log('speechRecognition function fired.')
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    console.log('recognition set.')
    
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

  return (window.SpeechRecognition || window.webkitSpeechRecognition) && (
    <button className={styles.speechRecognitionButton} onClick={speechRecognition} type="button" aria-label="voice recognition">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default memo(SpeechRecognitionButton)
