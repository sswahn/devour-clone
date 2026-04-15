import { useState, useEffect } from 'react'
import { config } from '../../../config'
import server from '../../../utilities/server'
import HeartIconFill from '../../../components/Icons/HeartIcon/HeartIconFill' 
import HeartIconStroke from '../../../components/Icons/HeartIcon/HeartIconStroke' 

function LikeButton({ likedByUser }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const action = () => {
    setLiked(prevState => !prevState)
    return
    
    setLoading(true)
    const request = {}
    const response = await server.post(config.post.like)
    
    setLiked(prevState => !prevState)
    setLoading(false)
  }

  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }

  useEffect(() => {
    setLiked(likedByUser) 
  }, [likedByUser])
  
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} disabled={loading} type="button" aria-label="like this" aria-pressed={liked}>
      {liked ? <HeartIconFill /> : <HeartIconStroke />}
    </button>
  )
}

export default LikeButton
