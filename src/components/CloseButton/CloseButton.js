import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ name, close }) {
  
  const onClick = event => {
    close()
  }

  const onKeyDown = event => {
    console.log('close button onKeyPress fired.')
    if (event.key === 'Enter') {
      console.log('Enter key pressed.')
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
