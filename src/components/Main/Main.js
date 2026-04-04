import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './main.module.css'

import useChime from '../../hooks/useChime'

function Main() {

  useEffect(() => {
    //alert(`width: ${window.innerWidth}`) 
    //alert(`height: ${window.innerHeight}`)
  }, [])

  const { playStart, playStop } = useSpeechChime()

  const handleStart = () => {
    playStart()
    startSpeechRecognition()
  }
  
  const handleStop = () => {
    playStop()
    stopSpeechRecognition()
  }

  const chime = event => {
    
    handleStart()

    const timeout = setTimeout(() => {
      handleStop()
    }, 5000)
  }

  const btnStyle = {
    background: 'blue',
    border: '1px dashed red',
    width: '150px',
    height: '150px',
    margin: '200px auto 0 auto'
  }
  
  return (
    <main className={styles.main}>

     <button onClick={chime} type="button" style={btnStyle}>
      Chime 
     </button>

    
      {/* <Suggestions /> etc. 
      <Feed />*/}
    </main>
  )
}

export default Main
