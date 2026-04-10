import styles from './FollowingButton.module.css'

function FollowingButton({ username, count }) {

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
    <button 
      className={styles.followingButton}
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label={`view users followed by ${username}`}
      >
      <strong>{count}</strong> Following
    </button>
  )
}

export default FollowingButton
