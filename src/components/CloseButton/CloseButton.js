import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ name, close }) { // should use "text" instead of name
  
  const onClick = event => {
    close()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      close()
    }
  }
 
 return (
   <button 
     className={styles.closeButton} 
     onClick={onClick} 
     onKeyDown={onKeyDown}
     type="button" 
     aria-label={`close ${name}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseButton
