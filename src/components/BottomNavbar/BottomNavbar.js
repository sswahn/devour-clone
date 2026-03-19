import { useEffect, useRef } from 'react'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserIcon from '../Icons/UserIcon/UserIcon'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef(null)
  const lastScrollY = useRef(0)
  const lastTime = useRef(performance.now())
  const ticking = useRef(false)
  const isHidden = useRef(false)
  const velocityRef = useRef(0)
  const gestureActive = useRef(false)
  const scrollEndTimeout = useRef(null)

  const SMOOTHING = 0.2
  const HIDE_VELOCITY = 0.6
  const SHOW_VELOCITY = -0.3
  const MIN_DELTA_Y = 2
  const SCROLL_END_DELAY = 120 // ms

  const updateNav = () => {
    const nav = navRef.current
    if (!nav) {
      return
    }

    const currentScrollY = window.scrollY
    const currentTime = performance.now()

    const deltaY = currentScrollY - lastScrollY.current
    const deltaTime = currentTime - lastTime.current

    // Always show near top
    if (currentScrollY < 80) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
      velocityRef.current = 0
      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
      return
    }

    if (Math.abs(deltaY) < MIN_DELTA_Y) {
      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
      return
    }

    // Compute smoothed velocity
    const rawVelocity = deltaTime > 16 ? deltaY / deltaTime : 0
    const velocity = velocityRef.current * (1 - SMOOTHING) + rawVelocity * SMOOTHING
    velocityRef.current = velocity

    // Hide/show nav based on velocity
    if (!isHidden.current && velocity > HIDE_VELOCITY) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    } else if (isHidden.current && velocity < SHOW_VELOCITY) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }

    lastScrollY.current = currentScrollY
    lastTime.current = currentTime
  }

  const snapNav = () => {
    const nav = navRef.current
    if (!nav) {
      return
    }

    if (velocityRef.current > 0.2) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    } else if (velocityRef.current < -0.2) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }
  }

  const throttleOnScroll = () => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        updateNav()
        ticking.current = false

        // Scroll-end detection
        if (!gestureActive.current) {
          if (scrollEndTimeout.current) {
            clearTimeout(scrollEndTimeout.current)
          }
          scrollEndTimeout.current = setTimeout(() => {
            snapNav()
          }, SCROLL_END_DELAY)
        }
      })
      ticking.current = true
    }
  }

  const handleTouchStart = () => {
    gestureActive.current = true
    if (scrollEndTimeout.current) {
      clearTimeout(scrollEndTimeout.current)
    }
  }
    
  const handleTouchEnd = () => {
    gestureActive.current = false
    scrollEndTimeout.current = setTimeout(() => {
      snapNav()
    }, SCROLL_END_DELAY)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttleOnScroll, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttleOnScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current)
      }
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
