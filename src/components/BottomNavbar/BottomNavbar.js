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
  const scrollYRef = useRef(0)
  const velocityRef = useRef(0)
  const gestureActive = useRef(false)
  const scrollEndTimeout = useRef(null)
  const lockTimeout = useRef(null)
  const intentActive = useRef(false)
  const intentTimeout = useRef(null)
  const interactionLock = useRef(false)

  const HIDE_VELOCITY = 0.6
  const SHOW_VELOCITY = -0.3
  const SCROLL_END_DELAY = 120 // ms
  const SNAP_HIDE = 0.3
  const SNAP_SHOW = -0.3
  const INTERACTION_LOCK_MS = 300
  const INTENT_VELOCITY = 0.1
  
  const lockInteraction = () => {
    interactionLock.current = true
    if (lockTimeout.current) {
      clearTimeout(lockTimeout.current)
    }
    lockTimeout.current = setTimeout(() => {
      interactionLock.current = false
    }, INTERACTION_LOCK_MS)
  }

  const triggerIntent = () => {
    intentActive.current = true
    if (intentTimeout.current) {
      clearTimeout(intentTimeout.current)
    }
    intentTimeout.current = setTimeout(() => {
      intentActive.current = false
    }, 150) // short buffer
  }

  const setVisible = nav => {
    if (isHidden.current) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }
  }
  
  const updateNav = ({ scrollY, velocity }) => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    // Interaction priority
    if (interactionLock.current) {
      return setVisible(nav)
    }
  
    // Always show near top
    if (scrollY < 80) {
      velocityRef.current = 0
      return setVisible(nav)
    }
  
    // Intent detection (AFTER velocity)
    const isSlowing = Math.abs(velocity) < INTENT_VELOCITY
    const isReversing = velocity < 0 && velocityRef.current > 0
  
    if (isSlowing || isReversing) {
      triggerIntent()
    }

    // Priority: Intent > Physics
    if (intentActive.current) {
      return setVisible(nav)
    } 
  
    // Update velocity AFTER using prev
    velocityRef.current = velocity
    scrollYRef.current = scrollY

    if (!isHidden.current && velocity > HIDE_VELOCITY) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    } else if (isHidden.current && velocity < SHOW_VELOCITY) {
      setVisible(nav)
    }
    
    if (!gestureActive.current) {
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current)
      }
      scrollEndTimeout.current = setTimeout(() => {
        snapNav()
      }, SCROLL_END_DELAY)
    }
  }

  const snapNav = () => {
    const nav = navRef.current
    if (!nav || scrollYRef.current < 80 || interactionLock.current) {
      return
    }
    if (velocityRef.current > SNAP_HIDE) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    } else if (velocityRef.current < SNAP_SHOW) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }
  }

  const handlePointerDown = () => {
    gestureActive.current = true
    if (scrollEndTimeout.current) {
      clearTimeout(scrollEndTimeout.current)
    }
  }
    
  const handlePointerUp = () => {
    gestureActive.current = false
    scrollEndTimeout.current = setTimeout(() => {
      snapNav()
    }, SCROLL_END_DELAY)
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    return () => {
      unsubscribe()
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      clearTimeout(scrollEndTimeout.current)
      clearTimeout(lockTimeout.current)
      clearTimeout(intentTimeout.current)
    }
  }, [])

  return (
    <nav ref={navRef} className={styles.bottomNavbar} aria-label="primary navigation">
      <button onPointerDown={lockInteraction} type="button" aria-label="home">
        <HomeIcon />  
      </button>
      <button onPointerDown={lockInteraction} type="button" aria-label="search">
        <SearchIcon size="1em" />  
      </button>
      <button onPointerDown={lockInteraction} type="button" aria-label="camera">
        <CameraIcon />  
      </button>
      <button onPointerDown={lockInteraction} type="button" aria-label="notifications">
        <BellIcon />  
      </button>
      <button onPointerDown={lockInteraction} type="button" aria-label="profile">
        <UserIcon size="1em" />  
      </button>
    </nav>
  )
}

export default BottomNavbar
