import { useContext, useEffect, useRef, memo } from 'react'
import { Context } from '../../Provider'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'

const Images = memo(({ index, setIndex, imageURLs, imageEditorStyles }) => {
  const [context, dispatch] = useContext(Context)
  const imageContainerRef = useRef(null)
  const imageRefs = useRef([])

  const renderVisibleImage = imgElement => {
    // Get visible size and position
    const rect = imgElement.getBoundingClientRect()
  
    // Create offscreen canvas at visible pixel resolution
    const canvas = document.createElement('canvas')
    canvas.width = rect.width
    canvas.height = rect.height
  
    const ctx = canvas.getContext('2d')
  
    // Match CSS filter
    ctx.filter = getComputedStyle(imgElement).filter || 'none'
  
    // Calculate how to draw the image based on object-fit
    const fit = getComputedStyle(imgElement).objectFit || 'fill'
  
    // Determine how the image is scaled within its box
  
    const imgRatio = imgElement.naturalWidth / imgElement.naturalHeight
    const canvasRatio = canvas.width / canvas.height

    let sx = 0, sy = 0, sw = imgElement.naturalWidth, sh = imgElement.naturalHeight

    if (fit === 'cover') {
      if (canvasRatio > imgRatio) {
        sh = imgElement.naturalWidth / canvasRatio
        sy = (imgElement.naturalHeight - sh) / 2
      } else {
        sw = imgElement.naturalHeight * canvasRatio
        sx = (imgElement.naturalWidth - sw) / 2
      }
    } else if (fit === 'contain') {
      const scale = Math.min(
        canvas.width / imgElement.naturalWidth,
        canvas.height / imgElement.naturalHeight
      )
      const w = imgElement.naturalWidth * scale
      const h = imgElement.naturalHeight * scale
      const dx = (canvas.width - w) / 2
      const dy = (canvas.height - h) / 2
      ctx.drawImage(imgElement, 0, 0, imgElement.naturalWidth, imgElement.naturalHeight, dx, dy, w, h)
      return
    }

    ctx.drawImage(imgElement, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height)

  
    // Reset filter
    ctx.filter = 'none'
  
    // Add border
    const borderThickness = 10
    ctx.lineWidth = borderThickness
    ctx.strokeStyle = 'white'
    ctx.strokeRect(
      borderThickness / 2,
      borderThickness / 2,
      canvas.width - borderThickness,
      canvas.height - borderThickness
    )
  
    // Add text
    ctx.font = 'bold 40px sans-serif'
    ctx.fillStyle = 'white'
    ctx.shadowColor = 'black'
    ctx.shadowBlur = 6
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    ctx.fillText('Overlay Text', canvas.width / 2, canvas.height - 20)
  
    return canvas.toDataURL('image/png')
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
