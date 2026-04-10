import { setState } from 'react'
import UserIcon from '../../../components/UserIcon/UserIcon'
import Checkbox from '../../../components/Checkbox/Checkbox'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Login.module.css'

function Login() {
  const [checked, setChecked] = useState(false)
  
  const handleCheckbox = event => {
    setChecked(prevState => !prevState)
  }

  // buttons should go to their own componenets
  const forgotPassword = event => {}
  const registerUser = event => {}
  
  return (
    <form className={styles.login} onSubmit={onSubmit} aria-label="login form">
      <h1>Sign In</h1>
      <div>
        <input id="username" type="text" placeholder="Username" required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" placeholder="Password" required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Sign In" message={message} error={error} disabled={!!message} />}
      <div>
        <button onClick={forgotPassword} type="button" aria-label="open forgot password form">Forgot password?</button>
        <button onClick={registerUser} type="button" aria-label="open registration form">Create an account</button>
      </div>
    </form>
  )
  )
}

export default Login
