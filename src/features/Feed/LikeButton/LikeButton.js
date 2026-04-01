import { useState, useEffect } from 'react'
import server from '../../../utilities/server'
import { config } from '../../../config'
import HeartIconFill from '../../../components/Icons/HeartIcon/HeartIconFill' 
import HeartIconStroke from '../../../components/Icons/HeartIcon/HeartIconStroke' 

function LikeButton({ likedByUser }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const onClick = async event => {
    try {
      setLiked(prevState => !prevState)
      return
      
      setLoading(true)
      const request = {}
      const response = await server.post(config.post.like)
      
      setLiked(prevState => !prevState)
      setLoading(false)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    setLiked(likedByUser) 
  }, [likedByUser])
  
  return (
    <button type="button" onClick={onClick} disabled={loading} aria-label="Like" aria-pressed={liked}>
      {liked ? <HeartIconFill /> : <HeartIconStroke />}
    </button>
  )
}

export default LikeButton
