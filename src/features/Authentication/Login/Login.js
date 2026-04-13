import { useState, useContext } from 'react'
import { SetSessionContext } from '../../../components/Providers/SessionProvider'
import UserIcon from '../../../components/Icons/UserIcon/UserIcon'
import LockIcon from '../../../components/Icons/LockIcon/LockIcon'
import Checkbox from '../../../components/Checkbox/Checkbox'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import GoogleButton from '../AuthUI/GoogleButton/GoogleButton'
import AppleButton from '../AuthUI/AppleButton/AppleButton'
import styles from './Login.module.css'

import HomeIcon from '../../../components/Icons/HomeIcon/HomeIcon'

function Login({ openRegistration, openForgotPassword }) {
  const setSession = useContext(SetSessionContext) // onSubmit, setSession({isAuthenticated: true, ...user_data})
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleCheckbox = event => {
    setChecked(prevState => !prevState)
  }

  // buttons should go to their own componenets
  const forgotPassword = event => {}
  const registerUser = event => {}

  const onSubmit = event => {
    event.preventDefault()
    
  }

  // for better organization
  // only use forms in login components
  // move home icon to Authentication component
  // conditionally render google/apple buttons in authentication
  
  return (
    <section className={styles.login}>
      <form onSubmit={onSubmit} aria-label="login form">
        <div>
          <input id="username" type="text" placeholder="Username" required maxLength={50} autoComplete="username" aria-label="username" />
          <UserIcon size={20} />
        </div>
        <div>
          <input id="password" type="password" placeholder="Password" required maxLength={130} autoComplete="current-password" aria-label="password" />
          <LockIcon size={20} />
        </div>
        <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
        <button type="submit" aria-label="sign in">Sign In</button>
        <div>
          <button onClick={openForgotPassword} type="button" aria-label="open forgot password form">Forgot password?</button>
          <button onClick={openRegistration} type="button" aria-label="open registration form">Create an account</button>
        </div>
      </form>
      <div>
        <GoogleButton />
        <AppleButton />
      </div>
    </section>
  )
}

export default Login
