import { useRef, useEffect } from 'react'
import CloseProfileButton from './CloseProfileButton/CloseProfileButton'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const sentinelStartRef = useRef(null)
  const sentinelEndRef = useRef(null)
  const closeButtonRef = useRef(null)
  
  // use sentinel focus trap pattern
  // use useEffect to load initial focus on load, (header or close btn)

  const focusLast = event => {}
  const focusFirst = event => {}

  const handleFollow = event => {}
  const handleUnFollow = event => {}

  useEffect(() => {
    closeButtonRef.current.focus()
  }, [])
  
  return (
    <section className={styles.profile} role="dialog" aria-modal="true" labelledby="profile-username">
      <div className="sentinel" ref={sentinelStartRef} onFocus={focusLast} tabIndex="0" aria-hidden="true"></div>
  
      <CloseProfileButton closeProfile={closeProfile} />
      <figure>
        <img src="" alt="" />
      </figure>
      <h1 id="profile-username">Username</h1>
        {/* user.bio && <p>{user.bio}</p> */}
      <address>Location</address>
      
      <div>
        <div>600 Following</div>
        <div>50 Followers</div>
      </div>
      <button onClick={handleFollow} type="button">+ Follow</button>
        
      <div>
        {/* feed */}
      </div>
        
      <div className="sentinel" ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0" aria-hidden="true"></div>
    </section>
  )
}

export default Profile
