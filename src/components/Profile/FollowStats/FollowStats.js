import { useState, useEffect } from 'react'
import styles from './FollowStats.module.css'

function FollowStats() {
  const [following, setFollowing] = useState(600)
  const [followers, setFollowers] = useState(50)

  const handleShowFollowing = event => {}
  const handleShowFollowers = event => {}
  
  // get live websocket updates on counts
  
  return (
    <ul className={styles.followStats}>
      <li>
        <button onClick={handleShowFollowing} type="button"><strong>{following}</strong> Following</button>
      </li>
      <li>
        <button onClick={handleShowFollowers} type="button"><strong>{followers}</strong> Followers</button>
      </li>
    </ul>
  )
}

export default FollowStats
