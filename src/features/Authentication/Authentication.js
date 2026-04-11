import { useState, Suspense, lazy } from 'react'
import AuthUI from './AuthUI/AuthUI'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
const LoginForm = lazy(() => import('./LoginForm/LoginForm'))
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'))

function Authentication() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)

  return (
    <>
      {(!openLogin && !openRegistration) && <AuthUI />}
      <Suspense fallback={<LoadingSpinner />}>
        {openLogin && <LoginForm />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {openRegistration && <RegistrationForm />}
      </Suspense>
    </>
  )
}

export default Authentication
