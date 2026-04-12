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

function Login({ openRegistration }) {
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
  
  return (
    <section className={styles.login}>
      <div>
        <HomeIcon size={40} />
      </div>
      <form onSubmit={onSubmit} aria-label="login form">
        <div>
          <input id="username" type="text" placeholder="Username" required maxLength={50} aria-label="username" />
          <UserIcon size={20} />
        </div>
        <div>
          <input id="password" type="password" placeholder="Password" required maxLength={130} aria-label="password" />
          <LockIcon size={20} />
        </div>
        <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
        <button type="submit" aria-label="sign in">Sign In</button>
        <div>
          <button onClick={forgotPassword} type="button" aria-label="open forgot password form">Forgot password?</button>
          <button onClick={registerUser} type="button" aria-label="open registration form">Create an account</button>
        </div>
      </form>
      <hr />
      <div>
        <GoogleButton />
        <AppleButton />
      </div>
    </section>
  )
}

export default Login
