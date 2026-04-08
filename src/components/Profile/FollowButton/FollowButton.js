import { useState } from 'react'
import PlusIcon from '../../Icons/PlusIcon/PlusIcon'
import MinusIcon from '../../Icons/MinusIcon/MinusIcon'
import styles from 'FollowButton.module.css'

function FollowButton() {
  const [following, setFollowing] = useState(false)

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
      {following ? <><PlusIcon /> Follow</> : <><MinusIcon /> Unfollow</>}
    </button>
  )
}

export default FollowButton
