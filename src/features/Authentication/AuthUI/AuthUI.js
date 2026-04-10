import { useState } from 'react'
import AuthButton from './AuthButton/AuthButton'
import styles from './AuthUI.module.css'

function AuthUI() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  return (
    <section className={styles.AuthUI}>
      <AuthButton text="Sign In" action={setOpenLogin} aria={{label: 'sign in'}} />
      <AuthButton text="Sign Up" action={setOpenRegistration} aria={{label: 'sign up'}} />
      <hr />
      <AuthButton text="Continue with Google" action="" aria={{label: 'continue with Google'}} />
      <AuthButton text="Continue with Apple" action="" aria={{label: 'continue with Apple'}} />
    </section>    
  )
}

export default AuthUI
