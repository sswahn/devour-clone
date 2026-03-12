import { useContext } from 'react'
import { Context } from '../../Provider'
import FileVideoIcon from '../Icons/FileVideoIcon/FileVideoIcon'

import BackButton from './BackButton'
import RecordTimer from './RecordTimer'
import LightButton from './LightButton'
import MuteButton from './MuteButton'
import RecordButton from './RecordButton'
import LocationButton from './LocationButton'

const NavOverlay = ({ openSubmit }) => {
  const [context, dispatch] = useContext(Context)
  
  const handleOpenLocation = event => {
    dispatch({ type: 'field', payload: context.field === 'location' ? undefined : 'location' })
  }
  
  function blobsToBase64(blobs) {
    return Promise.all(blobs.map(blob => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function() {
          resolve(reader.result)
        }
        reader.onerror = reject
      })
    }))
  }
  
  const handleSubmitTest = async event => {
    const base64Arr = await blobsToBase64(context.video)
    const request = {
      video: base64Arr
    }
    
    const response = await fetch('/api/v1/test', {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    console.log('response: ', response)
    
    const json = await response.json()
    
    console.log('json: ', json)
  }
  
  return (
    <section className="camera-navigation">
      <header className="card-header">
        <BackButton stopCamera={stopCamera} />
        <RecordTimer />
        <LightButton streamRef={streamRef} />
      </header>
    
      <MuteButton streamRef={streamRef} />
      <RecordButton />
      <LocationButton />
    </section>
  )
}

export default NavOverlay
