import { useEffect, useRef } from 'react'
import useScrollEffect from '../../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './Navigation.module.css'

function Navigation({ 
  openSearch,
  openCamera, 
  openNotifications, 
  openProfile 
}) {
  const navRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    navRef && scrollEffect(navRef.current, styles.hidden)
  }, [])
  
  return (
    <nav ref={navRef} className={styles.navigation} aria-label="primary navigation">
      <div>
        <div>
          <HomeButton />  
          <SearchButton openSearch={openSearch} />
        </div>
        <div>
          <CameraButton openCamera={openCamera} />
        </div>
        <div>
          <NotificationsButton openNotifications={openNotifications} />
          <ProfileButton openProfile={openProfile} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
