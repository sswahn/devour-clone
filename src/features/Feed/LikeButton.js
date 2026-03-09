import { useState } from 'react'
// import icons

function LikeButton() {
  const [liked, setLiked] = useState(false)

  const onClick = event => {
    // handle like
  }
  
  return (
    <button type="button" aria-label="Like" aria-pressed={liked}>
      {liked ? 'liked icon' : 'like icon' }
    </button>
  )
}

export default LikeButton
