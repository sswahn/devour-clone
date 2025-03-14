import { useState, useContext, useEffect, useRef, useCallback } from 'react'
import camera from '../../utilities/camera'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
import { Modal } from '@sswahn/components'
import { Context } from '../../Provider'
import SunIcon from '../Icons/SunIcon/SunIcon'
import DarkSunIcon from '../Icons/SunIcon/DarkSunIcon'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import NavOverlay from './NavOverlay'
import Preview from '../Preview/Preview'
import SubmitPost from './SubmitPost'

const Camera = () => {
  const [light, setLight] = useState(false)
  const [timer, setTimer] = useState(300)
  const [mute, setMute] = useState(false)
  const [type, setType] = useState(undefined)
  const [context, dispatch] = useContext(Context)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  const recorderRef = useRef(null)
  const timerRef = useRef(timer)
  const framesRef = useRef([])
  const previewModalRef = useRef(null)
  const locationModalRef = useRef(null)
  const db = database()
  
  const stopCamera = event => {
    if (streamRef.current) {

      console.log('passed condition in stopCamera, turning off camera stream.')
      
      camera.off(streamRef.current) 
      streamRef.current = null
      videoRef.current.srcObject = null
      dispatch({ type: 'stream', payload: undefined })
    }
  }
  
  const startCamera = async () => {
    try {
      const stream = await camera.on()

      console.log('Camera started stream: ', stream)

      streamRef.current = stream

      console.log('streamRef.current: ', streamRef.current)
      
      dispatch({ type: 'stream', payload: stream })
      videoRef.current.srcObject = stream
    } catch (error) {
      console.error('Error accessing camera.')
    }
  }
  
  const handleTurnOnLight = useCallback(event => {
    camera.light(context.stream)
    setLight(!light)
  }, [light])
  
  const toggleMute = useCallback(event => {
    !mute ? camera.mute(context.stream) : camera.unmute(context.stream)
    setMute(!mute)
  }, [mute])
  
  const createDefaults = () => {
    const captionsType = context.mode === 'video' ? 'video_captions' : 'image_captions'
    const captionStylesType = context.mode === 'video' ? 'video_caption_styles' : 'image_caption_styles'
    const editorStylesType = context.mode === 'video' ? 'video_editor_styles' : 'image_editor_styles'
    const captions = [ ...context[captionsType], '' ]
    const captionStyles = [ ...context[captionStylesType], {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      fontSize: 14,
      textAlign: 'left',
      fontColor: '#ffffff',
      stroke: 0,
      strokeColor: '#000000'
    }]
    const editorStyles = [ ...context[editorStylesType], {
      border: 'none',
      filter: 'none',
    }]
    dispatch({ type: captionsType, payload: captions })
    dispatch({ type: captionStylesType, payload: captionStyles }) 
    dispatch({ type: editorStylesType, payload: editorStyles })
    storage.local.set(captionsType, captions)
    storage.local.set(captionStylesType, captionStyles)
    storage.local.set(editorStylesType, editorStyles)
  }
  
  const handleTakePhoto = async () => {
    if (context.images.length >= 5) {
      return alert('Please, only 5 photos per submission.') // consider a custom alert popup. check mui.
    }
    camera.takePhoto(videoRef.current)
    //new Audio(effects).play() 
  }
  
  const handleRecordVideo = () => {
   // if (context.video.length && !confirm('You are about to overwrite an existing video. Do you wish to continue?') ) { // make custom popup
   //   return 
  //  }
    dispatch({ type: 'mode', payload: 'recording' })
    const recorder = camera.startRecording(context.stream, framesRef.current)
    recorderRef.current = recorder
  }

  const handleStopRecordVideo = async () => {
    dispatch({ type: 'mode', payload: 'video' })
    timerRef.current = timer
    const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
    const video = [ ...context.video, blob ]
    const currentDuration = context.video_duration.reduce((acc, val) => acc + val, 0)
    const duration = [ ...context.video_duration, 300 - timerRef.current - currentDuration ]
    dispatch({ type: 'video_duration', payload: duration })
    dispatch({ type: 'video', payload: video }) 
    db.put({ id: 'video', video, duration })
    createDefaults()
  }
  
  const loadFromStorage = async () => {
    const images = await db.get('images')
    const video = await db.get('video')
    const totalDuration = video?.duration.reduce((acc, val) => acc + val, 0)
    dispatch({ type: 'images', payload: images?.images || [] })
    dispatch({ type: 'video', payload: video?.video || [] })
    dispatch({ type: 'video_duration', payload: video?.duration || [] })
    if (totalDuration) {
      setTimer(300 - totalDuration) 
    }
  }
  
  const handleCamera = event => {
    switch (context.mode) {
      case 'camera':
        return handleTakePhoto()
      case 'video':
        return handleRecordVideo()
      case 'recording':
        return handleStopRecordVideo()
      default:
        return
    }
  }

  const handlePreviewFiles = event => {
    setType(event.currentTarget.id)
    setIsPreviewOpen()
  }
  
  const handleOpenLocationModal = event => {
    if (context.images.length || context.video.length) {
      locationModalRef.current.showModal()
    } else {
      alert('At least one photo or video is required.') // use a custom alert
    }
  }

  const handleCloseCamera = event => {
    stopCamera()
    dispatch({ type: 'modal', payload: { isOpen: false, content: <></> } })
  }

  ///
  useEffect(() => {
    console.log("Context stream updated in useEffect: ", context.stream);
  }, [context.stream])
  ///
  
  useEffect(() => {
    if (!context.stream) {
      startCamera()
      loadFromStorage()      // <== load media from storage
    }
    return () => {

      console.log('context.stream: ', context.stream)
      console.log('Component unmounting: Calling stopCamera()...')
      stopCamera()
    }
  }, [])

  useEffect(() => {
    if (context.mode !== 'recording') {
     return 
    }
    let interval = setInterval(() => {
      if (timer < 1) {
        clearInterval(interval)
        return handleStopRecordVideo()
      }
      setTimer(timer - 1)
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [timer, context.mode])
  
  // playsInline effects how video is displayed in mobile

  return (
    <div className="card" aria-label="camera viewport">
      
        <>
          <div className="card-header">
            <button className="back-btn" onClick={handleCloseCamera} type="button" aria-label="back button">
              <ArrowLeftIcon />
            </button>
            <button className="camera-light" onClick={handleTurnOnLight} type="button" aria-label="camera light">
              {light ? <DarkSunIcon /> : <SunIcon />}
              <div className="tooltip" role="tooltip">Light</div>
            </button>
          </div>
          
          <div className="card-content">
            <video ref={videoRef} className="camera" autoPlay muted aria-label="camera feed" aria-live="assertive"></video>
            <NavOverlay timer={timer} previewFiles={handlePreviewFiles} openSubmit={handleOpenLocationModal} toggleMute={toggleMute} mute={mute} />

            {/*
            <Modal open={isPreviewOpen}>
              <Preview type={type} closeModal={closeModal} />
            </Modal>
            <Modal open={isSubmitPostOpen}>
              <SubmitPost modalRef={locationModalRef} /> 
            </Modal>
            */}
          </div>
          
          <div className="card-actions">
            <div className="camera-button-container">
              <button 
                className="camera-button" 
                onClick={handleCamera} 
                type="button" 
                aria-label="camera button"
                style={{
                  backgroundColor: context.mode === 'recording' ? '#cb4154' : '#e5e4e2', 
                  borderColor: context.mode === 'recording' ? '#eb4c42' : 'white'
              }}></button>
            </div>
          </div>
        </>
      
    </div>
  )
}

export default Camera
