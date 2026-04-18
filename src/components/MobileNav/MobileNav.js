import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './MobileNav.module.css'

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
      <HomeButton />  
      <SearchButton searchButtonRef={searchButtonRef} openSearch={openSearch} />
      <CameraButton cameraButtonRef={cameraButtonRef} openCamera={openCamera} />
      <NotificationsButton notificationsButtonRef={notificationsButtonRef} openNotifications={openNotifications} />
      <ProfileButton profileButtonRef={profileButtonRef} openProfile={openProfile} />
    </nav>
  )
}

export default MobileNav
