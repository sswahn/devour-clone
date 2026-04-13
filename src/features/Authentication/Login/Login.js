import Logo from '../../../components/Logo/Logo'
import LoginForm from './LoginForm'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'

function Login() {
  return (
    <section>
      <Logo size={40} />
      <LoginForm />
      <div>
        <GoogleButton />
        <AppleButton />
      </div>
    </section>
  )
}

export default Login
