import { useState, useContext } from 'react'
import { SetSessionContext } from '../../../components/Providers/SessionProvider'
import UserIcon from '../../../components/Icons/UserIcon/UserIcon'
import LockIcon from '../../../components/Icons/LockIcon/LockIcon'
import Checkbox from '../../../components/Checkbox/Checkbox'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import styles from './LoginForm.module.css'

function LoginForm() {
  const setSession = useContext(SetSessionContext) // onSubmit, setSession({isAuthenticated: true, ...user_data})
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleCheckbox = event => {
    setChecked(prevState => !prevState)
  }

  // buttons should go to their own componenets
  const forgotPassword = event => {}
  const registerUser = event => {}

  const onSubmit = event => {}
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <h1>Sign In</h1>
      <div>
        <input id="username" type="text" placeholder="Username" required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" placeholder="Password" required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <LockIcon />
      </div>
      <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
      {loading && <LoadingSpinner />}
      {!loading && <button onClick="" onKeyDown="" type="submit" disabled={!!message}>Sign In</button>}
      <div>
        <button onClick={forgotPassword} type="button" aria-label="open forgot password form">Forgot password?</button>
        <button onClick={registerUser} type="button" aria-label="open registration form">Create an account</button>
      </div>
    </form>
  )
}

export default LoginForm
