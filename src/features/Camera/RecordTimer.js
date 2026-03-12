import { useState, useEffect, useRef } from 'react'

function RecordTimer() {
 const [timer, setTimer] = useState(300)
 const timerRef = useRef(timer)
  
  const createInterval = () => {
    if (context.mode === 'recording') {
      return setInterval(() => {
        if (timer < 1) {
          clearInterval(interval)
          return handleStopRecordVideo()
        }
        setTimer(timer - 1)
      }, 1000)
    }
  }

  useEffect(() => {
    let interval = createInterval()
    return () => {
      clearInterval(interval)
    }
  }, [timer, context.mode])

  return (
    <div className="video-timer">
      {`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
    </div>
  )
}

export default RecordTimer
