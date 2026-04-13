import styles from './Registration.module.css'
import Logo from '../../../components/Logo/Logo'
import RegistrationForm from './RegistrationForm/RegistrationForm'

function Registration({ closeRegistration }) {
  return (
    <section className={styles.registration}>
      <CloseButton text="registration form" close={closeRegistration} />
      <Logo size={40} />
      <RegistrationForm />
    </section>
  )
}

export default Registration
