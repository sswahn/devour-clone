import { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import styles from './Authentication.module.css'

function Authentication() {
  return (
    <section className={styles.authentication}>
      <Logo size={40} />
      <LoginForm />
      <RegistrationButton />
      <a href="https://fidoalliance.org/passkeys/" target="_blank" rel="noopener noreferrer" aria-label="Read about passkeys">About passkeys</a>
    </section>
  )
}

export default Authentication
