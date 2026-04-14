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
        <p>This app uses passkeys. With passkeys, users no longer need to enter usernames and passwords or additional factors. Instead, a user approves a sign-in with the same process they use to unlock their device (for example, biometrics, PIN, pattern).</p>
        <p>Read more about passkeys here: <a href="https://fidoalliance.org/passkeys/" target="_blank" rel="noopener noreferrer" aria-label="Read about passkeys">About passkeys</a></p>
      </div>
    </section>
  )
}

export default Authentication
