import { useState, useEffect } from 'react'
import FollowingButton from './FollowingButton/FollowingButton'
import styles from './FollowStats.module.css'

function FollowStats() {
  const [following, setFollowing] = useState(600)
  const [followers, setFollowers] = useState(50)

  const handleClickFollowing = event => {
    alert('following: 600')
  }
  const handleClickFollowers = event => {
    alert('followers 50')
  }
  
  // get live websocket updates on counts
  
  // break the buttons out into components
  
  return (
    <ul className={styles.followStats}>
      <li>
        <FollowingButton username={'username'} count={600} />
      </li>
      <li>
        <button onClick={handleClickFollowers} type="button"><strong>{followers}</strong> Followers</button>
      </li>
    </ul>
  )
}

export default FollowStats
