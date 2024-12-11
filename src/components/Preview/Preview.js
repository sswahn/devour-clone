import { useContext, useState, useEffect, memo } from 'react'
import { Context } from '../../Provider'
import { navigateTo } from '@sswahn/router'
import { Avatar } from '@sswahn/social'
import storage from '@sswahn/storage'
import Menu from './Menu'
import Figure from './Figure'

const Preview = memo(({ type, closeModal }) => {
  const [context, dispatch] = useContext(Context)
  const [index, setIndex] = useState(0)

  const handleNavigation = event => {
    event.preventDefault()
    navigateTo(`/profile/${context.user.username}`)
  }
  
  const loadFromStorage = () => {
    if (type === 'video') {
      dispatch({ type: 'video_captions', payload: storage.local.get('video_captions') ?? [] })
      dispatch({ type: 'video_caption_styles', payload: storage.local.get('video_caption_styles') ?? [] })
      dispatch({ type: 'video_editor_styles', payload: storage.local.get('video_editor_styles') ?? [] })
      dispatch({ type: 'video_editor_state', payload: storage.local.get('video_editor_state') ?? [] })
    } else {
      dispatch({ type: 'image_captions', payload: storage.local.get('image_captions') ?? [] })
      dispatch({ type: 'image_caption_styles', payload: storage.local.get('image_caption_styles') ?? [] })
      dispatch({ type: 'image_editor_styles', payload: storage.local.get('image_editor_styles') ?? [] })
      dispatch({ type: 'image_editor_state', payload: storage.local.get('image_editor_state') ?? [] })
    }
  }
  
  useEffect(() => {
    loadFromStorage()
  }, [type])

  return (
    <div className="card" aria-label={`${type} preview`}>
      <div className="card-header">
        <div className="user-header">
          <Avatar image={context.user.avatar} username={context.user.username} />
          <div className="header-text">
            <a href={`/profile/${context.user.username}`} onClick={handleNavigation} aria-label={`${context.user.username}'s' profile`}>{context.user.username}</a> 
            <div>Preview</div>
          </div>
        </div>
        <Menu type={type} index={index} setIndex={setIndex} closeModal={closeModal} />
      </div>
      <Figure type={type} index={index} setIndex={setIndex} />
      
      
      <div className="card-actions">
        
      </div>
    </div>
  )
})

export default Preview
