
function FollowingButton({ following }) {

  const action = () => {
    // request users being followed by user
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
    <button onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="view following">
      <strong>{following}</strong> Following
    </button>
  )
}

export default FollowingButton
