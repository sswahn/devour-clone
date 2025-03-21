import { useContext, useEffect, useRef, memo } from 'react'
import { Context } from '../../Provider'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'

const Images = memo(({ index, setIndex, imageURLs, imageEditorStyles }) => {
  const [context, dispatch] = useContext(Context)
  const imageContainerRef = useRef(null)
  const imageRefs = useRef([])
  
  const handleScrollRight = event => {

    console.log('next index: ', index)
    
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

    console.log('entries: ', entries)
    
    entries.forEach(entry => {

      console.log('entry.isIntersecting: ', entry.isIntersecting)

      console.log('id: ', entry.target.id)

      // index is NOT updating for some reason
      if (entry.isIntersecting) {
        console.log('passed condition and should update')
        setIndex(Number(entry.target.id.split('image-preview-')[1]))
      }
    })
  }
  
  useEffect(() => {

    // problem might be with how the modal is mounted
    
    console.log('imageRefs.current: ', imageRefs.current)
    
    if (imageRefs.current.length === 0) {
      return
    }
    
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    }

    console.log('options: ', options)
    
    const observer = new IntersectionObserver(handleIntersection, options)

    console.log('observer: ', observer)
    
    imageRefs.current.forEach(img => {
      console.log('img: ', img)
      observer.observe(img)
    })
    
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
      {Number(index) > 0 && (
        <div className="cheveron-left">
          <button className="icon-btn-alt" onClick={handleScrollLeft} type="button">
            <ChevronLeftIcon />
          </button>
        </div>
      )}
      {imageURLs.map((item, i) => 
        <img 
          key={item.id} 
          id={`image-preview-${i}`} 
          className="media-item" 
          ref={ref => imageRefs.current[i] = ref} 
          src={item.url} 
          alt={`Preview image ${i}`}
          style={{
            border: imageEditorStyles[index]?.border || 0,
            filter: imageEditorStyles[index]?.filter || 'none'
          }} 
          aria-label={`preview image ${i}`}
          />
      )}
    </div>
  )
})

export default Images
