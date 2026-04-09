import { useRef, useEffect } from 'react'
import CloseProfileButton from './CloseProfileButton/CloseProfileButton'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const sentinelStartRef = useRef(null)
  const sentinelEndRef = useRef(null)
  const profileRef = useRef(null)

  // const geoRef = useRef(null)
  
  const focusLast = event => {
    profileRef.current.children.at(-1).focus()
  }
  
  const focusFirst = event => {
    profileRef.current.children[0].focus()
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
    profileRef.current?.focus()
  }, [])
  
  return (
    <section className={styles.profile} ref={profileRef} role="dialog" aria-modal="true" aria-labelledby="profile-username">
  
      <div className={styles.sentinel} ref={sentinelStartRef} onFocus={focusLast} tabIndex="0" aria-hidden="true"></div>
      
      <CloseProfileButton name="profile" close={closeProfile} />
        
      <header>
        <img src="" alt={`{''}'s profile picture`} />

        <div>
          <h1 id="profile-username">Username</h1>
          <p id="bio">Some biographical information about Username.</p>
          <address>New York, NY</address>
        </div>
      </header>
  
      <FollowButton />
      <FollowStats />

      {/* <geolocation ref={geoRef}></geolocation> */}
        
      <div role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>
      
      <div className="sentinel" ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0" aria-hidden="true"></div>
        
    </section>
  )
}

export default Profile
