import { useContext, useEffect, useRef } from 'react'
import { Context } from '../../Provider'
import ChevronLeftIcon from '../icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon/ChevronRightIcon'

export default function Images({ index, setIndex, imageURLs, imageEditorStyles }) {
  const [context, dispatch] = useContext(Context)
  const imageContainerRef = useRef(null)
  const imageRefs = useRef([])
  
  const handleScrollRight = event => {
    if (imageContainerRef.current) {
      const scrollWidth = imageContainerRef.current.scrollWidth
      const scrollLeft = imageContainerRef.current.scrollLeft
      const containerWidth = imageContainerRef.current.offsetWidth
      const maxScroll = scrollWidth - containerWidth

      if (scrollLeft < maxScroll) {
        const nextScroll = scrollLeft + containerWidth
        imageContainerRef.current.scrollTo({
          left: nextScroll,
          behavior: 'smooth',
        })
      }
    }
  }
  
  const handleScrollLeft = event => {
    if (imageContainerRef.current) {
      const scrollLeft = imageContainerRef.current.scrollLeft
      const containerWidth = imageContainerRef.current.offsetWidth

      if (scrollLeft > 0) {
        const prevScroll = scrollLeft - containerWidth
        imageContainerRef.current.scrollTo({
          left: prevScroll,
          behavior: 'smooth',
        })
      }
    }
  }
  
  const handleIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIndex(entry.target.id)
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
    imageRefs.current.forEach(img => observer.observe(img))
    return () => {
      observer.disconnect()
    }
  }, [imageRefs.current])
  
  return (
    <div className="media-component" ref={imageContainerRef}>
      {index < context.images.length - 1 && (
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
      {imageURLs.map((item, i) => 
        <img 
          key={item.id} 
          id={i} 
          className="media-item" 
          ref={ref => imageRefs.current[i] = ref} 
          src={item.url} 
          alt={`Preview image ${i}`}
          style={{
            border: imageEditorStyles[index]?.border || 0,
            filter: imageEditorStyles[index]?.filter || 'none'
          }} />
      )}
    </div>
  )
}
