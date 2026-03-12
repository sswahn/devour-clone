import { useEffect } from 'react'

function RecordTimer() {

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
