import { useRef, useEffect } from 'react'
import CloseProfileButton from './CloseProfileButton/CloseProfileButton'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const sentinelStartRef = useRef(null)
  const sentinelEndRef = useRef(null)
  const headerRef = useRef(null)
  
  // use sentinel focus trap pattern
  // use useEffect to load initial focus on load, (header or close btn)

  const focusLast = event => {}
  const focusFirst = event => {}

  const handleFollow = event => {}
  const handleUnFollow = event => {}

  useEffect(() => {
    headerRef.current.focus()
  }, [])
  
  return (
    <section className={styles.profile} role="dialog" aria-modal="true" aria-labelledby="profile-username">
      <div className="sentinel" ref={sentinelStartRef} onFocus={focusLast} tabIndex="0" aria-hidden="true"></div>
      <header ref={headerRef}>
        <CloseProfileButton closeProfile={closeProfile} />
        <figure>
          <img src="" alt={`{''}'s profile`} />
        </figure>
        <h1 id="profile-username">Username</h1>
      </header>
        {/* user.bio && <p>{user.bio}</p> */}
      <address>Location</address>
      
      <ul role="list" className={styles.statsList}>
        <li><strong>600</strong> Following</li>
        <li><strong>50</strong> Followers</li>
      </ul>
        
      <button onClick={handleFollow} type="button">+ Follow</button>
        
      <div>
        {/* feed */}
      </div>
        
      <div className="sentinel" ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0" aria-hidden="true"></div>
    </section>
  )
}

export default Profile
