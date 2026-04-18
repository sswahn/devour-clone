

function LoginButton() {

  
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} ref={authenticationButtonRef} type="button" aria-label="sign in">
      <RightToBracketIcon />
    </button>
  )
}

export default LoginButton
