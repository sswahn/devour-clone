import { useState } from 'react'
import LoginButton from './LoginButton/LoginButton'
import styles from './LoginUI.module.css'

function LoginUI() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.loginUI}>
      <LoginButton text="Sign In" action={setOpenLogin} aria={{label: 'sign in'}} />
      <LoginButton text="Sign Up" action={setOpenRegistration} aria={{label: 'sign up'}} />
      <hr />
      <LoginButton text="Continue with Google" action="" aria={{label: 'continue with Google'}} />
      <LoginButton text="Continue with Apple" action="" aria={{label: 'continue with Apple'}} />
    </section>    
  )
}

export default LandingUI
