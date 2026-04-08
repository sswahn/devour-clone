import { useEffect, useRef } from 'react'
import useScrollEffect from '../../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './Navigation.module.css'

function Navigation({ 
  searchIsOpen,
  cameraIsOpen,
  notificationsIsOpen,
  profileIsOpen,
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
          <SearchButton searchIsOpen={searchIsOpen} openSearch={openSearch} />
        </div>
        <div>
          <CameraButton cameraIsOpen={cameraIsOpen} openCamera={openCamera} />
        </div>
        <div>
          <NotificationsButton notificationsIsOpen={notificationsIsOpen} openNotifications={openNotifications} />
          <ProfileButton profileIsOpen={profileIsOpen} openProfile={openProfile} />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
