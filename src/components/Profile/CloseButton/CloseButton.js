import ArrowLeftIcon from '../../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ name, close }) {
 return (
   <button className={styles.closeButton} onClick={close} type="button" aria-label={`close ${name}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseButton
