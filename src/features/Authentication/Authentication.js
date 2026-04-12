import { useState, Suspense, lazy } from 'react'
import AuthUI from './AuthUI/AuthUI'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
// const LoginForm = lazy(() => import('./LoginForm/LoginForm'))
import Login from './Login/Login'
const RegistrationForm = lazy(() => import('./RegistrationForm/RegistrationForm'))
import styles from './Authentication.module.css'

import HomeIcon from '../../components/Icons/HomeIcon/HomeIcon'

function Authentication() {
  // const [loginIsOpen, setLoginIsOpen] = useState(false)
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)
  
  /*
  const openLoginForm = () => {
    setLoginIsOpen(true)
  }
  */

  const openRegistration = () => {
    setRegistrationIsOpen(true)
  }

  const closeRegistration = () => {
    setRegistrationIsOpen(false)
  }
  

  return (
    <section className={styles.authentication}>

      {/*(!loginIsOpen && !registrationIsOpen) && 
        <AuthUI openLoginForm={openLoginForm} openRegistrationForm={openRegistrationForm} />
     */}
      {!registrationIsOpen && <LoginForm openRegistration={openRegistration} />}
      <Suspense fallback={<LoadingSpinner />}>
        {registrationIsOpen && <RegistrationForm closeRegistration={closeRegistration} />}
      </Suspense>
    </section>
  )
}

export default Authentication
