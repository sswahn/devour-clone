import AppleIcon from '../../../../components/Icons/AppleIcon/AppleIcon'
import styles from './AppleButton.module.css'

function AppleButton() {

  const action = () => {
    // handle federated access with Apple
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
      className={styles.appleButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="continue with apple">
      <AppleIcon /> 
      <span>Continue with Apple</span>
    </button>
  )
}

export default AppleButton
