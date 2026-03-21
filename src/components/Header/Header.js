import { useContext, useEffect, useRef  } from 'react'
import { Context } from '../../Provider'
import useScrollEffect from '../../hooks/useScrollEffect'
import scroll from '../../utilities/scrollEngine'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import styles from './header.module.css'

const Header = () => {
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])
  
  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button type="button" aria-label="home">
          <HomeIcon />
        </button>
        <button type="button" aria-label="open search bar" aria-controls="search bar" aria-expanded="false">
          <SearchIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
