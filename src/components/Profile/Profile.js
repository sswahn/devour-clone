import { useRef, useEffect } from 'react'
import CloseButton from './CloseButton/CloseButton'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const sentinelStartRef = useRef(null)
  const sentinelEndRef = useRef(null)
  const profileRef = useRef(null)
  
  const focusLast = event => {
    profileRef.current.children.at(-1).focus()
  }
  
  const focusFirst = event => {
    profileRef.current.children.at(0).focus()
  }


  /* 
  const geoRef = useRef(null)
  const handleLocation = event => {
    if (event.target.position) {
      const { latitude, longitude } = event.target.position.coords
      alert(`Coordinates: ${latitude}, ${longitude}`)
    } else if (event.target.error) {
      alert(`Error: ${event.target.error.message}`)
    }
  }
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
    <section className={styles.profile} ref={profileRef} role="dialog" aria-modal="true" aria-labelledby="username" aria-describedby="biography">
      <div ref={sentinelStartRef} onFocus={focusLast} tabIndex="0" aria-hidden="true"></div>
      
      <CloseButton name="profile" close={closeProfile} />
        
      <header>
        <img src="" alt={`{''}'s profile picture`} />
        <div>
          <h1 id="username">Username</h1>
          <address>New York, NY</address>
          <p id="biography">Some biographical information about Username.</p>
        </div>
      </header>
  
      <FollowButton />
      <FollowStats />

      {/* <geolocation ref={geoRef}></geolocation> */}
        
      <div role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>
      
      <div ref={sentinelEndRef} onFocus={focusFirst} tabIndex="0" aria-hidden="true"></div>
    </section>
  )
}

export default Profile
