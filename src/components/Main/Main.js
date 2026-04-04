import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './main.module.css'

import useSpeechChime from '../../hooks/useSpeechChime'

function Main() {

  useEffect(() => {
    //alert(`width: ${window.innerWidth}`) 
    //alert(`height: ${window.innerHeight}`)
  }, [])

  const { playStart, playStop } = useSpeechChime()

  
  const stop = () => {
    playStop()
  }

  const start = event => {
    playStart()
  }

  const btn1Style = {
    background: 'blue',
    border: '1px dashed red',
    width: '150px',
    height: '150px',
    margin: '200px auto 0 auto'
  }

  const btn2Style = {
    background: 'red',
    border: '1px dashed red',
    width: '150px',
    height: '150px',
    margin: '200px auto 0 auto'
  }
  
  return (
    <main className={styles.main}>

     <button onClick={start} type="button" style={btn1Style}>
      Chime 1
     </button>

      <button onClick={stop} type="button" style={btn2Style}>
      Chime 2
     </button>

    
      {/* <Suggestions /> etc. 
      <Feed />*/}
    </main>
  )
}

export default Main
