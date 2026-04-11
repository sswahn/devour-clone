import { useState } from 'react'
import SignInButton from './SignInButton/SignInButton'
import SignUpButton from './SignUpButton/SignUpButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './AuthUI.module.css'

import HomeIcon from '../../../components/Icons/HomeIcon/HomeIcon'

function AuthUI({ openLoginForm, openRegistrationForm }) {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.authUI}>
      <div>
        <HomeIcon size={40} />
      </div>
      <SignInButton open={openLoginForm} />
      <SignUpButton open={openRegistration} />
      <hr />
      <GoogleButton />
      <AppleButton />
    </section>    
  )
}

export default AuthUI
