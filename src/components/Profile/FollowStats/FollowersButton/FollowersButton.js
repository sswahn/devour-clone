import styles from './FollowersButton.module.css'

function FollowersButton({ username, count }) {

  const action = () => {
    
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
    <button
      className={styles.followersButton}
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button"
      aria-label="">
      <strong>{count}</strong> <span>Followers</span>
    </button>
  )
}

export default FollowersButton
