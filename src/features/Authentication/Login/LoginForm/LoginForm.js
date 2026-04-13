import { useState, useContext } from 'react'
import { SetSessionContext } from '../../../../components/Providers/SessionProvider'
import UserIcon from '../../../components/Icons/UserIcon/UserIcon'
import LockIcon from '../../../components/Icons/LockIcon/LockIcon'
import Checkbox from '../../../components/Checkbox/Checkbox'
import ForgotPasswordButton from './ForgotPasswordButton/ForgotPasswordButton'
import OpenRegistrationButton from './OpenRegistrationButton/OpenRegistrationButton'
import styles from './LoginForm.module.css'

function LoginForm({ openForgotPassword, openRegistration }) {
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
        <ForgotPasswordButton openForgotPassword={openForgotPassword} />
        <OpenRegistrationButton openRegistration={openRegistration} />
      </div>
    </form>
  )
}

export default LoginForm
