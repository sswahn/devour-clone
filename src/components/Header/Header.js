import { useContext, useEffect, useRef  } from 'react'
import { Context } from '../../Provider'
import scroll from '../../utilities/scrollEngine'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import styles from './header.module.css'

const Header = () => {
const navRef = useRef(null)
  const isHidden = useRef(false)
  const scrollStart = useRef(0)
  const scrollSpeed = useRef(false)

  const setHidden = nav => {
    if (!isHidden.current) {
      nav.classList.add(styles.hidden)
      isHidden.current = true
    }
  }

  const setVisible = nav => {
    if (isHidden.current) {
      nav.classList.remove(styles.hidden)
      isHidden.current = false
    }
  }

  const updateNav = ({ direction, scrollY, velocity }) => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    
    const distance = scrollY - scrollStart.current

    if (velocity < 0.05) {
      scrollSpeed.current = false
    }

    if (direction === 'down' && velocity > 5) {
      scrollSpeed.current = true
      scrollStart.current = scrollY
      return setVisible(nav)
    }
    
    if (direction === 'down' && distance > 200 && !scrollSpeed.current) {
      return setHidden(nav)
    }

    if (direction === 'up') {
      scrollStart.current = scrollY
      return setVisible(nav)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateNav)
    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <header ref={navRef} className={styles.header}>
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
