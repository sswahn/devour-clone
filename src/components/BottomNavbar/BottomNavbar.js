import { useState } from 'react'
import styles from './bottomnavbar.module.css'

function BottomNavbar() {

  // break each button and their function out into components
  
  return (
    <nav className={styles.bottomNavbar} aria-label="primary navigation">
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
