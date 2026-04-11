import styles from './SignInButton.module.css'

function SignInButton({ openLoginForm }) {

  const action = () => {
    openLoginForm()
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
    <button className={styles.signInButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="sign in">Sign In</button>
  )
}

export default SignInButton
