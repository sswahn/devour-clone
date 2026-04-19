import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import LoginButton from './LoginButton/LoginButton'
import styles from './Header.module.css'

import DefaultAvatar from '../DefaultAvatar/DefaultAvatar'

const Header = ({ authenticationButtonRef, openAuthentication }) => {
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button onClick={() => navigator.vibrate(50)} type="button" aria-label="home">
          <HomeIcon />
        </button>
        <button>
          <DefaultAvatar seed={'exampleUsername'} />
        </button>
        <nav>
        {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
    
          <LoginButton 
            authenticationButtonRef={authenticationButtonRef} 
            openAuthentication={openAuthentication} 
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
