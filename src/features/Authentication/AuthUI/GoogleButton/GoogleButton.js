import styles from './GoogleButton.module.css'

function GoogleButton() {

  const action = () => {
    // handle federated access with Google
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
    <button className={styles.googleButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="continue with google">Continue with Google</button>
  )
}

export default GoogleButton
