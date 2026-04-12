import { useState, Suspense, lazy } from 'react'
import AuthUI from './AuthUI/AuthUI'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
// const LoginForm = lazy(() => import('./LoginForm/LoginForm'))
import LoginForm from './LoginForm/LoginForm'
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'))

function Authentication() {
  // const [loginIsOpen, setLoginIsOpen] = useState(false)
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)
  
  /*
  const openLoginForm = () => {
    setLoginIsOpen(true)
  }
  */

  const openRegistrationForm = () => {
    setRegistrationIsOpen(true)
  }

  const closeRegistrationForm = () => {
    setRegistrationIsOpen(false)
  }
  

  return (
    <>
      <div>
        <HomeIcon size={40} />
      </div>

      {/*(!loginIsOpen && !registrationIsOpen) && 
        <AuthUI openLoginForm={openLoginForm} openRegistrationForm={openRegistrationForm} />
     */}
      {!registrationIsOpen && <LoginForm openRegistrationForm={openRegistrationForm} />}
      <Suspense fallback={<LoadingSpinner />}>
        {registrationIsOpen && <RegistrationForm closeRegistrationForm={closeRegistrationForm} />}
      </Suspense>
    </>
  )
}

export default Authentication
