import { useState, useEffect, useRef } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {
  const ref = useRef()

  const onScroll = () => {
    let lastScrollY = window.scrollY
    const nav = document.querySelector('.bottom-nav')
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY
    
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        ref.current.classList.add('bottom-nav--hidden') // scrolling down
      } else {
        ref.current.classList.remove('bottom-nav--hidden') // scrolling up
      }
      lastScrollY = currentScrollY
    })
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
