import { useEffect, useRef } from 'react'
import scroll from '../../utilities/scrollEngine'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserIcon from '../Icons/UserIcon/UserIcon'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef(null)
  const isHidden = useRef(false)
  const scrollStart = useRef(0)
  const scrollSpeed = useRef(false)

  const setHidden = nav => {
    if (!isHidden.current) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    }
  }

  const setVisible = nav => {
    if (isHidden.current) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }
  }

  const updateNav = ({ direction, scrollY, velocity }) => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    const distance = scrollY - scrollStart.current

    console.log('distance: ', distance)

    if (velocity < 0.05) {
      scrollSpeed.current = false
    }

    if (direction === 'down' && velocity > 5) {
      scrollSpeed.current = true
      scrollStart.current = scrollY
      return setVisible(nav)
    }
    
    if (direction === 'down' && distance > 200 && !scrollSpeed.current) {
      return setHidden(nav)
    }

    if (direction === 'up' && Math.abs(distance) > 30) {
      scrollStart.current = scrollY
      return setVisible(nav)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <nav ref={navRef} className={styles.bottomNavbar} aria-label="primary navigation">
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
    </nav>
  )
}

export default BottomNavbar
