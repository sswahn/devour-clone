import { useState } from 'react'
import SignInButton from './SignInButton/SignInButton'
import SignUpButton from './SignUpButton/SignUpButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import Appl from './SignIn/SignIn'
import styles from './AuthUI.module.css'

function AuthUI() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.authUI}>
      <SignInButton />
      <SignUpButton />
      <hr />
      <GoogleButton />
      <AppleButton />
    </section>    
  )
}

export default AuthUI
