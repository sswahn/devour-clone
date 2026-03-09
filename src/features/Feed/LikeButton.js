import { useState, useEffect } from 'react'
import server from '../../utilitles/server'
import config from '../../config'
// import icons

function LikeButton({ initialLikeState }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const onClick = async event => {
    setLoading(true)
    const response = await server.post(config.post.like)
    if (response.error) {
      return alert(response.error)
    }
    setLiked(!liked)
    setLoading(false)
  }

  useEffect() {
    setState(initialLikeState) 
  }, [initialLikeState])
  
  return (
    <button type="button" onClick={onClick} disabled={loading} aria-label="Like" aria-pressed={liked}>
      {liked ? 'liked icon' : 'like icon' }
    </button>
  )
}

export default LikeButton
