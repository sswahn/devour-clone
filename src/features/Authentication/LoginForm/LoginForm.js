import { useState, useContext } from 'react'
import { SetSessionContext } from '../../../../components/Providers/SessionProvider'
import styles from './LoginForm.module.css'

function LoginForm() {
  const setSession = useContext(SetSessionContext) // onSubmit, setSession({isAuthenticated: true, ...user_data})
  const [loading, setLoading] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    // initiate auth call to backend
    // response returns challenge
    // challenge is signed by browser/device:
    // (call navigator.credentials.get() for signature)
    // send signature to backend for verification and tokens
  }
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <label htmlFor="username">Email or username:</label>
      <input id="username" type="text" required maxLength={50} autoComplete="username webauthn" aria-label="email or username" />
      <button type="submit" aria-label="sign in">Continue</button>
    </form>
  )
}

export default LoginForm
