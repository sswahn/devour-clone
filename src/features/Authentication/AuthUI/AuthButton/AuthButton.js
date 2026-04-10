import styles from './AuthButton.module.css'

function AuthButton({ text, action, aria }) {
  
  const onClick = event => {
    action()
  }
  
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button className={styles.authButton} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label={aria.label}>{text}</button>
  )
}

export default AuthButton
