import styles from './Registration.module.css'
import Logo from '../../../components/Logo/Logo'
import RegistrationForm from './RegistrationForm/RegistrationForm'

function Registration() {
  return (
    <section className={styles.registration}>
      <Logo size={40} />
      <RegistrationForm />
    </section>
  )
}

export default Registration
