import { useRef, useEffect } from 'react'
import CloseProfileButton from './CloseProfileButton/CloseProfileButton'
import FollowButton from './FollowButton/FollowButton'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const sentinelStartRef = useRef(null)
  const sentinelEndRef = useRef(null)
  const closeButtonRef = useRef(null)

  const geoRef = useRef(null)
  
  const focusLast = event => {
    // focus on last focusable element between sentinels
  }
  
  const focusFirst = event => {
    closeButtonRef.current.focus()
  }

  const handleFollow = event => {}
  const handleUnFollow = event => {}

  const handleLocation = event => {
    if (event.target.position) {
      const { latitude, longitude } = event.target.position.coords
      alert(`Coordinates: ${latitude}, ${longitude}`)
    } else if (event.target.error) {
      alert(`Error: ${event.target.error.message}`)
    }
  }

  /*
  useEffect(() => {
    const geo = geoRef.current
    geo.addEventListener('location', handleLocation)
    return () => {
      geo.removeEventListener('location', handleLocation)
    }
  }, [])
  */
  
  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])
  
  return (
    <section className={styles.profile} role="dialog" aria-modal="true" aria-labelledby="profile-username">
  
      <div className={styles.sentinel} ref={sentinelStartRef} onFocus={focusLast} tabIndex="0" aria-hidden="true"></div>
  
      <header>
        <CloseProfileButton name="profile" closeButtonRef={closeButtonRef} close={closeProfile} />
        <figure>
          <img src="" alt={`{''}'s profile`} />
        </figure>
        <h1 id="profile-username">Username</h1>
      </header>

      {/* user.bio && <p>{user.bio}</p> */}

      <address>New York, NY</address>
      
      <ul>
        <li><strong>600</strong> Following</li>
        <li><strong>50</strong> Followers</li>
      </ul>

      {/* <geolocation ref={geoRef}></geolocation> */}

      <FollowButton />
        
      <div role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>
      
      <div className="sentinel" ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0" aria-hidden="true"></div>
        
    </section>
  )
}

export default Profile
