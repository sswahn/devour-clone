import styles from './OpenRegistrationButton.module.css'

function OpenRegistrationButton({ openRegistration }) {

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
      className={styles.openRegistrationButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="open registration form">
      Create an account
    </button>
  )
}

export default OpenRegistrationButton
