import { useState, Suspense, lazy } from 'react'
import AuthUI from './AuthUI/AuthUI'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
// const LoginForm = lazy(() => import('./LoginForm/LoginForm'))
import LoginForm from './LoginForm/LoginForm'
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'))

function Authentication() {
  const [loginIsOpen, setLoginIsOpen] = useState(false)
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)

  const openLoginForm = () => {
    setLoginIsOpen(true)
  }

  const openRegistrationForm = () => {
    setRegistrationIsOpen(true)
  }

  return (
    <>
      {/*(!loginIsOpen && !registrationIsOpen) && 
        <AuthUI openLoginForm={openLoginForm} openRegistrationForm={openRegistrationForm} />
     */}
      <LoginForm />
      <Suspense fallback={<LoadingSpinner />}>
        {registrationIsOpen && <RegistrationForm />}
      </Suspense>
    </>
  )
}

export default Authentication
