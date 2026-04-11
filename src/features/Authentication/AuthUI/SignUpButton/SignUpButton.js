import styles from './SignUpButton.module.css'

function SignUpButton({ openRegistrationForm }) {

  const action = () => {
    openRegistrationForm()
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
    <button className={styles.signUpButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="sign up">Sign Up</button>
  )
}

export default SignUpButton
