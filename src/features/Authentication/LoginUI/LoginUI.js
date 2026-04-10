import { useState } from 'react'
import LoginButton from './LoginButton/LoginButton'
import styles from './AuthUI.module.css'

function AuthUI() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.AuthUI}>
      <LoginButton text="Sign In" action={setOpenLogin} aria={{label: 'sign in'}} />
      <LoginButton text="Sign Up" action={setOpenRegistration} aria={{label: 'sign up'}} />
      <hr />
      <LoginButton text="Continue with Google" action="" aria={{label: 'continue with Google'}} />
      <LoginButton text="Continue with Apple" action="" aria={{label: 'continue with Apple'}} />
    </section>    
  )
}

export default AuthUI
