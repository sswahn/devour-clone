import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './main.module.css'

function Main() {

  useEffect(() => {
    //alert(`width: ${window.innerWidth}`) 
    //alert(`height: ${window.innerHeight}`)
  }, [])
  
  return (
    <main className={styles.main}>
      {/* <Suggestions /> etc. */}
      <Feed />
    </main>
  )
}

export default Main
