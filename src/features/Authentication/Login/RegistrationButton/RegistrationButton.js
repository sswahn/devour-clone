import styles from './RegistrationButton.module.css'

function RegistrationButton({ openRegistration }) {

  const action = () => {
    openRegistration()
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  return (
    <button 
      className={styles.registrationButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="open registration form">
      Create an account
    </button>
  )
}

export default RegistrationButton
