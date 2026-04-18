import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import RightToBracketIcon from '../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './Header.module.css'

const Header = ({ authenticationButtonRef, openAuthentication }) => {
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])

  // move nav button(s) to their own components
  const action = () => {
    console.log('openAuth fired!')
    
    navigator.vibrate(50)
    openAuthentication()  
  }
  
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
        {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
    
          <button onClick={onClick} onKeyDown={onKeyDown} ref={authenticationButtonRef} type="button" aria-label="sign in">
            <RightToBracketIcon />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
