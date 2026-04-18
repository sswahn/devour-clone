import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import RightToBracketIcon from '../Icons/RightToBracketIcon/RightToBracketIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import styles from './Header.module.css'

const Header = () => {
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])

  // move nav button(s) to their own components
  const action = () => {}
  const onClick = event => {
    action()
  }
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button type="button" aria-label="home">
          <HomeIcon />
        </button>
    
        <nav>
          <button onClick={onClick} onKeyPress={onKeyPress} type="text" aria-label="sign in">
            <RightToBracketIcon />
          </button>
        </nav>
      {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
      {/* <nav></nav> */}

      </div>
    </header>
  )
}

export default Header
