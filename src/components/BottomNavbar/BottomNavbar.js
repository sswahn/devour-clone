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

  const HIDE_ENTER = 0.7
  const HIDE_EXIT = 0.4
  const SHOW_ENTER = -0.2
  const SHOW_EXIT = -0.05
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
    if (scrollYRef.current < 80 || intentActive.current || interactionLock.current) {
      return
    }
    if (velocityRef.current > SNAP_HIDE) {
      setHidden(nav)
    } else if (velocityRef.current < SNAP_SHOW) {
      setVisible(nav)
    }
  }

  const curveVelocity = v => {
    const sign = Math.sign(v)
    const mag = Math.abs(v)

    // cubic curve → softer small movement, stronger large movement
    return sign * Math.pow(mag, 1.3)
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
    const curvedVelocity = curveVelocity(velocity)
    velocityRef.current = curvedVelocity
  
    const isReversing = curvedVelocity < 0 && prevVelocity > 0
    const isBraking = acceleration != null && acceleration < INTENT_ACCELERATION
    const isDeceleratingFast = acceleration != null && acceleration < -0.001

    if (isReversing || isBraking || isDeceleratingFast) {
      triggerIntent()
    }
    if (intentActive.current) {
      return setVisible(nav)
    } 

    if (!isHidden.current) {
      if (curvedVelocity > HIDE_ENTER) {
        setHidden(nav)
      }
    } else {
      if (curvedVelocity < SHOW_SHOW) {
        setVisible(nav)
      }
    }
    
    if (isIdle) {
      snapNav(nav)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    return () => {
      unsubscribe()
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
