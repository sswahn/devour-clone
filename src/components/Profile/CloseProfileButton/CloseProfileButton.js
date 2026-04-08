import ArrowLeftIcon from '../../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseProfileButton.module.css'

function CloseProfileButton({ name, closeButtonRef, close }) {
 return (
   <button className={styles.closeButton} ref={closeButtonRef} onClick={close} type="button" aria-label={`close ${name}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseProfileButton
