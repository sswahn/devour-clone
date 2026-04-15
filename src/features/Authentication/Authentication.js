import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Authentication.module.css'

function Authentication() {
  return (
    <section className={styles.authentication}>
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Authentication
