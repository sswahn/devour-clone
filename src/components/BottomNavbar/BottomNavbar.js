import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    navRef && scrollEffect(navRef.current, styles.hidden)
  }, [])

  return (
    <nav ref={navRef} className={styles.bottomNavbar} aria-label="primary navigation">
      <div>
        <div>
          <HomeButton />  
          <SearchButton />
        </div>
        <div>
          <CameraButton />
        </div>
        <div>
          <NotificationsButton />
          <ProfileButton />
        </div>
      </div>
    </nav>
  )
}

export default BottomNavbar
