import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
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
        <button type="button" aria-label="home">
          <HomeIcon />  
        </button>
        <button type="button" aria-label="search">
          <SearchIcon size="1em" />  
        </button>
        <button type="button" aria-label="camera">
          <CameraIcon />  
        </button>
        <button type="button" aria-label="notifications">
          <BellIcon />  
        </button>
        <button type="button" aria-label="profile">
          <UserIcon size="1em" />  
        </button>
      </div>
    </nav>
  )
}

export default BottomNavbar
