
function SignInButton({ setLoginIsOpen }) {
  
  const action = () => {
    setLoginIsOpen(true)
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button className={styles} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label="sign in">Sign In</button>
  )
}

export default SignInButton
