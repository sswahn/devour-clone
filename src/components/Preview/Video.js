import { useContext, useState, useEffect, useRef, memo } from 'react'
import { Context } from '../../Provider'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'
import PlayIcon from '../Icons/PlayIcon/PlayIcon'
import PauseIcon from '../Icons/PauseIcon/PauseIcon'
import VolumeHighIcon from '../Icons/VolumeHighIcon/VolumeHighIcon'
import VolumeXIcon from '../Icons/VolumeXIcon/VolumeXIcon'

const Video = memo(({ index, setIndex, videoURLs, videoEditorStyles }) => {    // try using context for setting index to remove this prop dependency?
  const [context, dispatch] = useContext(Context)
  const [mute, setMute] = useState(false)
  const [pause, setPause] = useState(false)
  
  
  const videoContainerRef = useRef(null)
  const videoRefs = useRef([])
  
  
  const handleOnPause = event => {
    
  }
  
  const handleOnPlay = event => {
    
  }
  
  const handlePauseVideo = event => {
    setPause(true) 
    videoRefs.current[index].pause()
  }
  
  const handlePlayVideo = event => {
    setPause(false)
    videoRefs.current[index].play()
  }
  
  const handleToggleMute = event => {
    videoRefs.current[index].muted = !mute
    setMute(!mute)
  }
  
  const handleScrollRight = event => {
    if (videoContainerRef.current) {
      const scrollWidth = videoContainerRef.current.scrollWidth
      const scrollLeft = videoContainerRef.current.scrollLeft
      const containerWidth = videoContainerRef.current.offsetWidth
      const maxScroll = scrollWidth - containerWidth

      if (scrollLeft < maxScroll) {
        const nextScroll = scrollLeft + containerWidth
        videoContainerRef.current.scrollTo({
          left: nextScroll,
          behavior: 'smooth',
        })
      }
    }
  }
  
  const handleScrollLeft = event => {
    if (videoContainerRef.current) {
      const scrollLeft = videoContainerRef.current.scrollLeft
      const containerWidth = videoContainerRef.current.offsetWidth

      if (scrollLeft > 0) {
        const prevScroll = scrollLeft - containerWidth
        videoContainerRef.current.scrollTo({
          left: prevScroll,
          behavior: 'smooth',
        })
      }
    }
  }
  
  const handleIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIndex(entry.target.id.split('video-preview-')[1])
      }
    })
  }
  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    }
    const observer = new IntersectionObserver(handleIntersection, options)
    videoRefs.current.forEach(video => observer.observe(video))
    return () => {
      observer.disconnect()
    }
  }, [videoRefs.current])
  
  useEffect(() => {
    videoRefs.current[index].play() // might need an if statement
  }, [index])
  
  
  
  return (
    <div className="media-component">
      <div className="video-controls">
        {pause ? ( 
          <button className="icon-btn-alt" onClick={handlePlayVideo} type="button" aria-label="play video" aria-controls={`video-preview-${index}`}>
            <PlayIcon />
            <div className="tooltip" role="tooltip">Play</div>
          </button>
        ) : ( 
          <button className="icon-btn-alt" onClick={handlePauseVideo} type="button" aria-label="pause video" aria-controls={`video-preview-${index}`}>
            <PauseIcon />
            <div className="tooltip" role="tooltip">Pause</div>
          </button>
        )}
        {mute ? (
          <button className="icon-btn-alt" onClick={handleToggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
            <VolumeXIcon />
            <div className="tooltip" role="tooltip">Unmute</div>
          </button>
        ) : (
          <button className="icon-btn-alt" onClick={handleToggleMute} type="button" aria-label="mute video" aria-controls={`video-preview-${index}`}> 
            <VolumeHighIcon />
            <div className="tooltip" role="tooltip">Mute</div>
          </button>
        )}
      </div>
      <div className="media-component" ref={videoContainerRef}>
        {index < context.video.length - 1 && (
          <div className="cheveron-right">
            <button className="icon-btn-alt" onClick={handleScrollRight} type="button">
              <ChevronRightIcon />
            </button>
          </div>
        )}
        {index > 0 && (
          <div className="cheveron-left">
            <button className="icon-btn-alt" onClick={handleScrollLeft} type="button">
              <ChevronLeftIcon />
            </button>
          </div>
        )}
        
        {videoURLs.map((item, i) => 
          <video 
            key={item.id} 
            id={`video-preview-${i}`} 
            className="media-item" 
            ref={ref => videoRefs.current[i] = ref} 
            onPlay={handleOnPlay} 
            onPause={handleOnPause} 
            src={item.url} 
            loop 
            playsinline
            style={{
              border: videoEditorStyles[index]?.border || 0,
              filter: videoEditorStyles[index]?.filter || 'none'
            }}
            aria-label={`preview video: segment ${i}`} />
        )}
      </div>
    </div>
  )
})

export default Video
