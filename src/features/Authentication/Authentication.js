import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import styles from './Authentication.module.css'

function Authentication() {
  return (
    <section className={styles.authentication}>
      {/* Logo */}
      <LoginForm />
      <RegistrationButton />
    </section>
  )
}

export default Authentication
