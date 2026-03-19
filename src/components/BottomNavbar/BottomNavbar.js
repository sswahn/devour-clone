import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const ref = useRef()
  const lastScrollY = useRef(0)

  const onScroll = () => {
    if (!ref.current) {
      return
    }
    
    let lastScrollY = window.scrollY
    
    // always show at top
    if (currentScrollY < 80) {
      ref.current.classList.remove(styles.hidden)
      lastScrollY.current = currentScrollY
      return
    }
    
    const currentScrollY = window.scrollY
  
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      ref.current.classList.add(styles.hidden) // scrolling down
    } else if (currentScrollY < lastScrollY.current - 10) {
      ref.current.classList.remove(styles.hidden) // scrolling up
    }
    
    lastScrollY = currentScrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  
  // break each button and their function out into components
  
  return (
    <nav ref={ref} className={styles.bottomNavbar} aria-label="primary navigation">
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
