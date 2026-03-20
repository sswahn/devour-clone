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
  const lockTimeout = useRef(null)
  const intentTimeout = useRef(null)
  const interactionLock = useRef(false)
  const intentActive = useRef(false)

  const HIDE_VELOCITY = 0.7
  const SHOW_VELOCITY = -0.2
  const SNAP_HIDE = 0.3
  const SNAP_SHOW = -0.3
  const INTERACTION_LOCK_MS = 300
  const INTENT_ACCELERATION = -0.0005 // tweakable

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

  const clearAllTimeouts = () => {
    clearTimeout(lockTimeout.current)
    clearTimeout(intentTimeout.current)
  }
  
  const lockInteraction = () => {
    interactionLock.current = true
    clearTimeout(lockTimeout.current)
    lockTimeout.current = setTimeout(() => {
      interactionLock.current = false
    }, INTERACTION_LOCK_MS)
  }

  const triggerIntent = () => {
    intentActive.current = true
    clearTimeout(intentTimeout.current)
    intentTimeout.current = setTimeout(() => {
      intentActive.current = false
    }, 150)
  }

  const snapNav = nav => {
    if (!nav || scrollYRef.current < 80 || intentActive.current || interactionLock.current) {
      return
    }
    if (velocityRef.current > SNAP_HIDE) {
      setHidden(nav)
    }
    if (velocityRef.current < SNAP_SHOW) {
      setVisible(nav)
    }
  }
  
  const updateNav = ({ scrollY, velocity, acceleration, isIdle }) => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    scrollYRef.current = scrollY // For snapNav()

    // Disrupt if user interacts
    if (interactionLock.current) {
      return setVisible(nav)
    }
  
    // Always show near top
    if (scrollY < 80) {
      velocityRef.current = 0
      return setVisible(nav)
    }

    const prevVelocity = velocityRef.current
    velocityRef.current = velocity
  
    const isReversing = velocity < 0 && prevVelocity > 0
    const isBraking = acceleration < INTENT_ACCELERATION

    if (isReversing || isBraking) {
      triggerIntent()
    }
    if (intentActive.current) {
      return setVisible(nav)
    } 
    if (velocity > HIDE_VELOCITY) {
      setHidden(nav)
    }
    else if (velocity < SHOW_VELOCITY) {
      setTimeout(() => setVisible(nav), 50)
    }
    if (isIdle) {
      snapNav(nav)
    }
  }

  const handlePointerDown = () => {
    interactionLock.current = true
  }
    
  const handlePointerUp = () => {
    interactionLock.current = false
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    return () => {
      unsubscribe()
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      clearAllTimeouts()
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
