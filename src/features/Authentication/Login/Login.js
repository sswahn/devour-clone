import Logo from '../../../components/Logo/Logo'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import styles from './Login.module.css'

function Login({ openRegistration }) {
  return (
    <section className={styles.login}>
      <Logo size={40} />
      /*
        Login Form collects username form, and prompts for passkey. one step.
        
      */
      <LoginForm />
      <RegistrationButton openRegistration={openRegistration} />
    </section>
  )
}

export default Login
