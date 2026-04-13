import { useState, Suspense, lazy } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Login from './Login/Login'
const Registration = lazy(() => import('./Registration/Registration'))
const ForgotPassword = lazy(() => import('./ForgotPassword/ForgotPassword'))
import styles from './Authentication.module.css'

function Authentication() {
  const [registrationIsOpen, setRegistrationIsOpen] = useState(false)
  const [forgotPasswordIsOpen, setForgotPasswordIsOpen] = useState(false)

  const openRegistration = () => setRegistrationIsOpen(true)
  const closeRegistration = () => setRegistrationIsOpen(false)
  
  const openForgotPassword = () => setForgotPasswordIsOpen(true)
  const closeForgotPassword = () => setForgotPasswordIsOpen(false)
  
  return (
    <section className={styles.authentication}>
      {(!registrationIsOpen && !forgotPasswordIsOpen) && <>
        <Login openRegistration={openRegistration} openForgotPassword={openForgotPassword} />
      </>}
      <Suspense fallback={<LoadingSpinner />}>
        {registrationIsOpen && <Registration closeRegistration={closeRegistration} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {forgotPasswordIsOpen && <ForgotPassword closeForgotPassword={closeForgotPassword} />}
      </Suspense>
    </section>
  )
}

export default Authentication
