import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './main.module.css'

function Main() {

  useEffect(() => {
    //alert(`width: ${window.innerWidth}`) 
    //alert(`height: ${window.innerHeight}`)
  }, [])

  const chime = event => {
    const audioCtx = new window.AudioContext()
    const oscillator = audioCtx.createOscillator()
    ocillator.type = 'sine' // sine, square, sawtooth, triangle
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime)
    oscillator.connect(audioCtx.destination)
    oscillator.start()
    oscillator.stop(audioCtx.currentTime + 1)
  }

  const btnStyle = {
    width: '50px',
    height: '50px',
    margin: 'auto'
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
