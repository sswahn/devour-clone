import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef()
  const lastScrollY = useRef(0)
  const timeout = useRef(false)

  const onScroll = () => {
    if (!navRef.current) {
      return
    }
    
    let lastScrollY = window.scrollY
    
    // always show at top
    if (currentScrollY < 80) {
      navRef.current.classList.remove(styles.hidden)
      lastScrollY.current = currentScrollY
      return
    }
    
    const currentScrollY = window.scrollY
  
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navRef.current.classList.add(styles.hidden) // scrolling down
    } else if (currentScrollY < lastScrollY.current - 10) {
      navRef.current.classList.remove(styles.hidden) // scrolling up
    }
    
    lastScrollY = currentScrollY
  }

  const throttleOnScroll = () => {
    if (!timeout.current) {
      window.requestAnimationFrame(() => {
        onScroll()
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
