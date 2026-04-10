import styles from './LoginButton.module.css'

function LoginButton({ text, action, aria }) {
  
  const onClick = event => {
    action()
  }
  
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button className={styles.loginButton} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label={aria.label}>{text}</button>
  )
}

export default LoginButton
