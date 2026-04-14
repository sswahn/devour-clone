import styles from './RegistrationButton.module.css'

function RegistrationButton() {

  const action = () => {
    // navigation.credentials.create()
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }

  // probably needs a registration success page.
  
  return (
    <button 
      id="register-passkey"
      className={styles.registrationButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="create an account">
      Create an account
    </button>
  )
}

export default RegistrationButton
