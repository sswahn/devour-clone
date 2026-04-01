import { useState, useEffect } from 'react'
import server from '../../../utilities/server'
import { config } from '../../../config'
// import icons

function LikeButton({ likedByUser }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const requestLikes = async () => {
    const request = {}
    const response = await server.post(config.post.like)

    // go in server and see about making this
    // repeating condition go away. check for it there then throw the error
    if (response.error) {
      return alert(response.error)
    }
    
  }

  const onClick = async event => {
    try {
      setLoading(true)
      await requestLikes()
      setLiked(!liked)
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
      {liked ? 'liked icon' : 'like icon' }
    </button>
  )
}

export default LikeButton
