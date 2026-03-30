import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import styles from './header.module.css'

const Header = () => {
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    // headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])
  
  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button type="button" aria-label="home">
          <HomeIcon />
        </button>
  
      {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
      {/*
        <button type="button" aria-label="open search bar" aria-controls="search bar" aria-expanded="false">
          <SearchIcon />
        </button>
      */}
      </div>
    </header>
  )
}

export default Header
