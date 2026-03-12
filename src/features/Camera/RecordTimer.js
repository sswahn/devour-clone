import { useState, useEffect } from 'react'

function RecordTimer() {
 const [timer, setTimer] = useState(300)
  
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

  return (
    <></>
  )
}

export default RecordTimer
