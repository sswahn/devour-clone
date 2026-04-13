import Logo from '../../components/Logo/Logo'
import LoginForm from './LoginForm'
import FederatedLoginButtons from './FederatedLoginButtons'

function Login() {
  return (
    <section>
      <Logo size={40} />
      <LoginForm />
      <FederatedLoginButtons />
    </section>
  )
}

export default Login
