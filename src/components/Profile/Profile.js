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
  
  const handleClose = event => {
    closeProfile()
  }

  const handleFollow = event => {}
  const handleUnFollow = event => {}

  useEffect(() => {
    closeButtonRef.current.focus()
  }, [])
  
  return (
    <section className={styles.profile} role="dialog" aria-modal="true">
      <div className="sentinel" ref={sentinelStartRef} onFocus={focusLast} tabIndex="0"></div>
  
      <button ref={closeButtonRef} onClick={handleClose} type="button">
        Close button
      </button>
      <img src="" alt="" />
      <h1>Username</h1>
        {/* user.bio && <p>{user.bio}</p> */}
      <address>Location</address>
      <button onClick={handleFollow} type="button">Follow Username</button>
      <div>
        {/* feed */}
      </div>
        
      <div className="sentinel" ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0"></div>
    </section>
  )
}

export default Profile
