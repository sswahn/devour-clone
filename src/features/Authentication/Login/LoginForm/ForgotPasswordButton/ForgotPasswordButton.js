import styles from './ForgotPasswordButton.module.css'

function ForgotPasswordButton({ openForgotPassword }) {

  const action = () => {
    openForgotPassword()
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
      className={styles.forgotPasswordButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="open forgot password form">
      Forgot password?
    </button>
  )
}

export default ForgotPasswordButton
