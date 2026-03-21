import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import scroll from '../../utilities/scrollEngine'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserIcon from '../Icons/UserIcon/UserIcon'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef(null)
  const { setElement } = useScrollEffect()

  /*
  const isHidden = useRef(false)
  const highVelocity = useRef(false)

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

  // create a hook called useScrollEffect()
  // returns a function: scrollEffect
  // execute in useEffect: navRef && scrollEffect(navRef)
  
  const updateNav = ({ deltaY, direction, velocity }) => {
    const nav = navRef.current
    if (!nav) {
      return
    }

    if (!highVelocity.current && velocity > 70) {
      highVelocity.current = true
      return setVisible(nav)
    }

    if (highVelocity.current && velocity === 0) {
      highVelocity.current = false
      return
    }

    if (highVelocity.current) {
      return
    }

    if (direction === 'down' && deltaY > 200) {
      return setHidden(nav)
    }

    if (direction === 'up') {
      return setVisible(nav)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    return () => {
      unsubscribe()
    }
  }, [])
  */
  useEffect(() => {
    navRef && setElement(navRef)
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
