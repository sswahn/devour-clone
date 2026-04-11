import styles from './SignUpButton.module.css'

function SignUpButton() {

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
    <button className={styles.signUpButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="sign up">SignUp</button>
  )
}

export default SignUpButton
