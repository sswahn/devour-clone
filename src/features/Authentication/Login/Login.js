import Logo from '../../../components/Logo/Logo'
import LoginForm from './LoginForm/LoginForm'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Login.module.css'

function Login({ openForgotPassword, openRegistration }) {
  return (
    <section className={styles.login}>
      <Logo size={40} />
      <LoginForm openForgotPassword={openForgotPassword} openRegistration={openRegistration} />
      <div>
        <GoogleButton />
        <AppleButton />
      </div>
    </section>
  )
}

export default Login
