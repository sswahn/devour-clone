import { useState } from 'react'
import AuthButton from './AuthButton/AuthButton'
import styles from './AuthUI.module.css'

function AuthUI() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.authUI}>
      <AuthButton text="Sign In" action={setOpenLogin} attributes={{'aria-label': 'sign in'}} />
      <AuthButton text="Sign Up" action={setOpenRegistration} attributes={{'aria-label': 'sign up'}} />
      <hr />
      <AuthButton text="Continue with Google" action="" attributes={{'aria-label': 'continue with Google'}} />
      <AuthButton text="Continue with Apple" action="" attributes={{'aria-label': 'continue with Apple'}} />
    </section>    
  )
}

export default AuthUI
