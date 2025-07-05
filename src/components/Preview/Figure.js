import { useContext, useMemo, memo } from 'react'
import { Context } from '../../Provider'
import Video from './Video'
import Images from './Images'

const Figure = memo(({ type, index, setIndex }) => {
  const [context, dispatch] = useContext(Context)

  // Blob URLs stay in memory until you manually revoke them via URL.revokeObjectURL(blobUrl)
  // Failure to do this can lead to memory leaks, especially in single-page applications (SPAs)
  
  const videoURLs = useMemo(() => {
    return context.video.map(file => ({ id: crypto.randomUUID(), url: URL.createObjectURL(file) })) 
  }, [context.video])
  
  const imageURLs = useMemo(() => {
    return context.images.map(file => ({ id: crypto.randomUUID(), url: URL.createObjectURL(file) })) 
  }, [context.images])
  
  const generateStyles = () => {
    const styles = type === 'video' ? context.video_caption_styles : context.image_caption_styles
    return {
      color: styles[index]?.fontColor || '#ffffff',
      fontSize: `${styles[index]?.fontSize || 14}px`,
      fontStyle: styles[index]?.fontStyle || 'normal',
      fontWeight: styles[index]?.fontWeight || 'normal',
      textAlign: styles[index]?.textAlign || 'left',
      textDecoration: `${styles[index]?.textDecoration || 'none'} ${styles[index]?.fontColor || '#ffffff'}`,
      WebkitTextStroke: `${styles[index]?.stroke || 0}px ${styles[index]?.strokeColor || '#000000'}`
    }
  }
  
  return (
    <figure className="card-content">
      {type === 'video' 
        ? <Video index={index} setIndex={setIndex} videoURLs={videoURLs} videoEditorStyles={context.video_editor_styles} /> 
        : <Images index={index} setIndex={setIndex} imageURLs={imageURLs} imageEditorStyles={context.image_editor_styles} />
      }
      <figcaption className="caption" style={generateStyles()}>{type === 'video' ? context.video_captions[index] : context.image_captions[index]}</figcaption>
    </figure>
  )
})

export default Figure
