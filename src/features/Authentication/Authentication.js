import { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import styles from './Authentication.module.css'

function Authentication() {
  return (
    <section className={styles.authentication}>
      <div>
        <Logo size={40} />
        <LoginForm />
        <RegistrationButton />
        {/* <FederatedAccess /> */}
      </div>
    </section>
  )
}

export default Authentication
