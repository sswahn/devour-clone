import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef(null)
  const lastScrollY = useRef(0)
  const timeout = useRef(false)
  const lastTime = useRef(performance.now())
  const isHidden = useRef(false)

  const updateNav = () => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    const currentScrollY = window.scrollY
    const currentTime = performance.now()

    const deltaY = currentScrollY - lastScrollY.current
    const deltaTime = currentTime - lastTime.current

    if (Math.abs(deltaY) < 2) {
      return
    }

    const velocity = deltaTime > 16 ? deltaY / deltaTime : 0
    
    // Always show near top
    if (currentScrollY < 80) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    } 
    else if (!isHidden.current && velocity > 0.5) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    }
    else if (isHidden.current && velocity < -0.5) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }

    lastScrollY.current = currentScrollY
    lastTime.current = currentTime
  }

  const throttleOnScroll = () => {
    if (!timeout.current) {
      window.requestAnimationFrame(() => {
        updateNav()
        timeout.current = false
      })
      timeout.current = true
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttleOnScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttleOnScroll)
    }
  }, [])
  
  // break each button and their function out into components
  
  return (
    <nav ref={navRef} className={styles.bottomNavbar} aria-label="primary navigation">
      <button type="button" aria-label="home">
      </button>
      <button type="button" aria-label="search">
      </button>
      <button type="button" aria-label="camera">
      </button>
      <button type="button" aria-label="notifications">
      </button>
      <button type="button" aria-label="profile">
      </button>
    </nav>
  )
}

export default BottomNavbar
