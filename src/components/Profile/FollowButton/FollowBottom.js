import { useState } from 'react'
import styles from 'FollowButton.module.css'

function FollowButton() {
  use [following, setFollowing] = useState(false)

  const handleFollow = event => {
    setFollowing(prevState => !prevState)
  }
  
  return (
    <button 
      className={styles.followButton} 
      onClick={handleFollow} 
      type="button" 
      aria-label={`{following ? ${'unfollow'} : ${'follow'}}`} 
      aria-pressed={following}>
      + Follow
    </button>
  )
}

export default FollowButton
