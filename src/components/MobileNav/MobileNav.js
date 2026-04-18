import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './Navigation.module.css'

function MobileNav({ 
  searchButtonRef,
  cameraButtonRef,
  notificationsButtonRef,
  profileButtonRef,
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
          <SearchButton searchButtonRef={searchButtonRef} openSearch={openSearch} />
        </div>
        <div>
          <CameraButton cameraButtonRef={cameraButtonRef} openCamera={openCamera} />
        </div>
        <div>
          <NotificationsButton notificationsButtonRef={notificationsButtonRef} openNotifications={openNotifications} />
          <ProfileButton profileButtonRef={profileButtonRef} openProfile={openProfile} />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
