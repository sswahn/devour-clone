import { useContext, useEffect, useRef, memo } from 'react'
import { Context } from '../../Provider'
import { convertMedia } from '../../utilities'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'

const Images = memo(({ index, setIndex, imageURLs, imageEditorStyles }) => {
  const [context, dispatch] = useContext(Context)
  const imageContainerRef = useRef(null)
  const imageRefs = useRef([])

  const convertImage = async () => {
    const image = imageRefs.current[index]
    
    console.log('image to be converted: ', image)
    
    const blob = await convertMedia(image)
    
    console.log('blob: ', blob)
    
    dispatch({ type: 'convert_image', payload: false })
  }

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
        setIndex(Number(entry.target.id.split('image-preview-')[1]))
      }
    })
  }
  
  useEffect(() => {
    if (imageRefs.current.length === 0) {
      return
    }
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    }
    const observer = new IntersectionObserver(handleIntersection, options)
    imageRefs.current.forEach(img => {
      console.log('img: ', img)
      observer.observe(img)
    })
    
    return () => {
      observer.disconnect()
    }
  }, [imageRefs.current])

  useEffect(() => {
    convertImage()
  }, [context.convert_image])
  
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
            borderTop: imageEditorStyles[index]?.borderTop || 0,
            borderRight: imageEditorStyles[index]?.borderRight || 0,
            borderBottom: imageEditorStyles[index]?.borderBottom || 0,
            borderLeft: imageEditorStyles[index]?.borderLeft || 0,
      
          //  border: imageEditorStyles[index]?.border || 0,
            filter: imageEditorStyles[index]?.filter || 'none'
          }} 
          aria-label={`preview image ${i}`}
          />
      )}
    </div>
  )
})

export default Images
