import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraButton from './CameraButton/CameraButton'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserIcon from '../Icons/UserIcon/UserIcon'
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
          <button type="button" aria-label="home">
            <HomeIcon />  
          </button>
          <button type="button" aria-label="search">
            <SearchIcon size="1em" />  
          </button>
        </div>
        <div></div>
        <CameraButton />
        <div>
          <button type="button" aria-label="notifications">
            <BellIcon />  
          </button>
          <button type="button" aria-label="profile">
            <UserIcon size="1em" />  
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BottomNavbar
