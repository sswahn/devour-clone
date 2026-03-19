import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef()
  const lastScrollYRef = useRef(0)
  const timeoutRef = useRef(false)
  const lastTime = useRef(performance.now())
  const HIDE_VELOCITY = 0.5
  const SHOW_VELOCITY = -0.5

  const onScroll = () => {
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
    else if (velocity > HIDE_VELOCITY) {
      nav.classList.add(styles.hidden) // fast scroll down
    } 
    else if (velocity < SHOW_VELOCITY) {
      nav.classList.remove(styles.hidden) // fast scroll up
    }

    lastScrollY.current = currentScrollY
    lastTime.current = currentTime
  }

  const throttleOnScroll = () => {
    if (!timeoutRef.current) {
      window.requestAnimationFrame(() => {
        onScroll()
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
