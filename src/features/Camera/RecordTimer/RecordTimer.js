import { useState, useContext, useEffect, useRef } from 'react'
import { Context } from '../../../Provider'
import styles from './recordtimer.module.css'

function RecordTimer({ timerRef }) {
 const [context, provider] = useContext(Context)
 const [timer, setTimer] = useState(300)
  
  const createInterval = () => {
    if (context.recording) {
      return setInterval(() => {
        if (timer < 1) {
          clearInterval(interval)
          return handleStopRecordVideo() // fix: handle out of time
        }
        setTimer(timer - 1)
      }, 1000)
    }
  }

  const loadFromStorage = async () => {
    const video = await db.get('video')
    const totalDuration = video?.duration.reduce((acc, val) => acc + val, 0)
    if (totalDuration) {
      setTimer(300 - totalDuration)
    }
  }

  useEffect(() => {
    let interval = createInterval()
    return () => {
      clearInterval(interval)
    }
  }, [timer, context.recording])

  useEffect(() => {
    if (!context.recording) {
      timerRef.current = timer
    }
  }, [context.recording])

  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <div className={styles.recordTimer}>
      {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
    </div>
  )
}

export default RecordTimer
