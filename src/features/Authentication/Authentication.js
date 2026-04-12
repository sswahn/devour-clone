import { useState, Suspense, lazy } from 'react'
import AuthUI from './AuthUI/AuthUI'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Login from './Login/Login'
const Registration = lazy(() => import('./Registration/Registration'))
import styles from './Authentication.module.css'

//import HomeIcon from '../../components/Icons/HomeIcon/HomeIcon'

function Authentication() {
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
      {!registrationIsOpen && <Login openRegistration={openRegistration} />}
      <Suspense fallback={<LoadingSpinner />}>
        {registrationIsOpen && <RegistrationForm closeRegistration={closeRegistration} />}
      </Suspense>
    </section>
  )
}

export default Authentication
