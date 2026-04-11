import styles from './AuthButton.module.css'

function AuthButton({ text, action, attributes }) {
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button className={styles.authButton} onClick={onClick} onKeyDown={onKeyDown} type="button" {...attributes}>{text}</button>
  )
}

export default AuthButton
