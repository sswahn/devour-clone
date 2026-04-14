import { useState, useContext } from 'react'
import { SetSessionContext } from '../../../../components/Providers/SessionProvider'
import styles from './LoginForm.module.css'

function LoginForm() {
  const setSession = useContext(SetSessionContext) // onSubmit, setSession({isAuthenticated: true, ...user_data})
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleCheckbox = event => {
    setChecked(prevState => !prevState)
  }

  const onSubmit = event => {
    event.preventDefault()
  }
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <label htmlFor="email">Email:</label>
      <input id="email" type="text" required maxLength={50} autoComplete="email" aria-label="email" />
      <button type="submit" aria-label="sign in">Continue</button>
    </form>
  )
}

export default LoginForm
