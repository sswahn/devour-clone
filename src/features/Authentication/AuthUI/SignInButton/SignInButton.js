import styles from './SignInButton.module.css'

function SignInButton() {

  const action = () => {
    // open sign in form
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
      className={styles.signInButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="sign in">
        SignIn
    </button>
  )
}

export default SignInButton
