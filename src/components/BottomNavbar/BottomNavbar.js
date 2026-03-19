import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef()
  const lastScrollYRef = useRef(0)
  const timeoutRef = useRef(false)
  const lastTime = useRef(performance.now())

  const updateNav = () => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    const currentScrollY = window.scrollY
    const currentTime = performance.now()

    const deltaY = currentScrollY - lastScrollY.current
    const deltaTime = currentTime - lastTime.current

    const velocity = deltaY / deltaTime

    // Always show near top
    if (currentScrollY < 80) {
      nav.classList.remove(styles.hidden)
    } 
    else if (velocity > 0.5) {
      nav.classList.add(styles.hidden) // scroll down
    } 
    else if (velocity < -0.5) {
      nav.classList.remove(styles.hidden) // scroll up
    }

    lastScrollY.current = currentScrollY
    lastTime.current = currentTime
  }

  const throttleOnScroll = () => {
    if (!timeoutRef.current) {
      window.requestAnimationFrame(() => {
        updateNav()
        timeoutRef.current = false
      })
      timeoutRef.current = true
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
