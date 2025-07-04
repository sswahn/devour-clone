import { useContext, useEffect, useRef, memo } from 'react'
import { Context } from '../../Provider'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon/ChevronRightIcon'

const Images = memo(({ index, setIndex, imageURLs, imageEditorStyles }) => {
  const [context, dispatch] = useContext(Context)
  const imageContainerRef = useRef(null)
  const imageRefs = useRef([])

  const renderVisibleImage = imgElement => {
    const rect = imgElement.getBoundingClientRect()
    const style = getComputedStyle(imgElement)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
  
    canvas.width = rect.width
    canvas.height = rect.height
  
    // Apply CSS filter to canvas
    ctx.filter = style.filter || 'none'
  
    const fit = style.objectFit || 'fill'
    const imgWidth = imgElement.naturalWidth
    const imgHeight = imgElement.naturalHeight
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const imgRatio = imgWidth / imgHeight
    const canvasRatio = canvasWidth / canvasHeight
  
    // Draw image with object-fit logic
    if (fit === 'contain') {
      const scale = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight)
      const drawWidth = imgWidth * scale
      const drawHeight = imgHeight * scale
      const dx = (canvasWidth - drawWidth) / 2
      const dy = (canvasHeight - drawHeight) / 2
      ctx.drawImage(imgElement, 0, 0, imgWidth, imgHeight, dx, dy, drawWidth, drawHeight)
    } else {
      // Default to "cover" style behavior
      let sx = 0, sy = 0, sw = imgWidth, sh = imgHeight
      if (canvasRatio > imgRatio) {
        sh = imgWidth / canvasRatio
        sy = (imgHeight - sh) / 2
      } else {
        sw = imgHeight * canvasRatio
        sx = (imgWidth - sw) / 2
      }
      ctx.drawImage(imgElement, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight)
    }
  
    // Reset filter before drawing overlays
    ctx.filter = 'none'
  
    // Draw white border
    const borderThickness = 10
    ctx.lineWidth = borderThickness
    ctx.strokeStyle = 'white'
    ctx.strokeRect(
      borderThickness / 2,
      borderThickness / 2,
      canvasWidth - borderThickness,
      canvasHeight - borderThickness
    )
  
    // Draw overlay text
    ctx.font = 'bold 40px sans-serif'
    ctx.fillStyle = 'white'
    ctx.shadowColor = 'black'
    ctx.shadowBlur = 6
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    ctx.fillText('Overlay Text', canvasWidth / 2, canvasHeight - 20)
  
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
