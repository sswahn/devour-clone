import { useContext, useRef, useEffect } from 'react'
import { FocusTrapContext } from '../Providers/FocusTrapProvider'
import CloseButton from '../CloseButton/CloseButton'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile({ closeProfile }) {
  const overlayRef = useContext(FocusTrapContext)

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
  <geolocation ref={geoRef}></geolocation>
  */
  
  return (
    <section 
      id="profile"
      className={styles.profile} 
      ref={overlayRef} 
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby="biography">
        
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
        
      <div role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>

    </section>
  )
}

export default Profile
