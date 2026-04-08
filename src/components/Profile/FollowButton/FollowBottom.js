import { useState } from 'react'

function FollowButton() {
  use [following, setFollowing] = useState(false)

  const handleFollow = event => {
    
  }
  
  return (
    <button onClick={handleFollow} type="button" aria-label={`{following ? ${'unfollow'} : ${'follow'}}`} aria-pressed={following}>
      + Follow
    </button>
  )
}

export default FollowButton
