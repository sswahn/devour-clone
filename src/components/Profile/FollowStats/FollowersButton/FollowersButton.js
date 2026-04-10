import { useState } from 'react'
import styles from './FollowersButton.module.css'

function FollowersButton({ username, count }) {
  const [viewFollowers, setViewFollowers] = useState(false)

  const action = () => {
    setViewFollowers(prevState => !prevState)
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button
      className={styles.followersButton}
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button"
      aria-label={`view users following ${username}`}
      aria-pressed={viewFollowers}
      aria-controls="profile-feed">
      <strong>{count}</strong> <span>Followers</span>
    </button>
  )
}

export default FollowersButton
