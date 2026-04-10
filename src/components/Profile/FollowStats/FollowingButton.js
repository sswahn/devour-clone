import { useState } from 'react'
import styles from './FollowingButton.module.css'

function FollowingButton({ username, count }) {
  const [viewFollowing, setViewFollowing] = useState(false)
  
  const action = () => {
    setViewFollowing(prevState => !prevState)
    // request users being followed by user
    // request should be in parent so list populates
    // just need function call here: requestFollowing()
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  return (
    <button 
      className={styles.followingButton}
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label={`view users followed by ${username}`}
      aria-pressed={viewFollowing}
      aria-controls="profile-feed">
      <strong>{count}</strong> <span>Following</span>
    </button>
  )
}

export default FollowingButton
