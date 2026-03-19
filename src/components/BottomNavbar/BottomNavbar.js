import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const navRef = useRef()
  const lastScrollYRef = useRef(0)
  const timeoutRef = useRef(false)

  const onScroll = () => {
    if (!navRef.current) {
      return
    }
    
    lastScrollYRef.current = window.scrollY
    
    // always show at top
    if (currentScrollY < 80) {
      navRef.current.classList.remove(styles.hidden)
      lastScrollYRef.current = currentScrollY
      return
    }
    
    const currentScrollY = window.scrollY
  
    if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
      navRef.current.classList.add(styles.hidden) // scrolling down
    } else if (currentScrollY < lastScrollYRef.current - 10) {
      navRef.current.classList.remove(styles.hidden) // scrolling up
    }
    
    lastScrollYRef.current = currentScrollY
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
