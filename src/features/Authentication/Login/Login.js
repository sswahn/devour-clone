import Checkbox from '../../../components/Checkbox/Checkbox'
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Login.module.css'

function Login() {

  
  
  return (
    <form className={styles.login} onSubmit={onSubmit} aria-label="login form">
      <h2>Sign In</h2>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} autoComplete="off" aria-label="password" />
        <PasswordIcon />
      </div>
      <Checkbox label="Remember me" checked={checked} onChange={handleCheckbox} />
      {loading && <LoadingSpinner />}
      {!loading && <SubmitButton text="Sign In" message={message} error={error} disabled={!!message} />}
      <div>
        <button type="button" onClick={forgotPassword} aria-label="open forgot password form">Forgot password?</button>
        <button type="button" onClick={registerUser} aria-label="open registration form">Create an account</button>
      </div>
    </form>
  )
  )
}

export default Login
