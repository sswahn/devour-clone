import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ overlay, close }) {

  const action = () => {
    close()
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    event.preventDefault()
    if (event.key === 'Enter') {
      action()
    }
  }
 
 return (
   <button 
     className={styles.closeButton} 
     onClick={onClick} 
     onKeyDown={onKeyDown}
     type="button" 
     aria-label={`close ${overlay}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseButton
