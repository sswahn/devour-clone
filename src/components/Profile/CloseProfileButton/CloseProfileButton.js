import ArrowLeftIcon from '../../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseProfileButton.module.css'

function CloseProfileButton({ name, ref, close }) {
 return (
   <button className={styles.closeProfileButton} ref={ref}  onClick={close} type="button" aria-label={`close ${name}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseProfileButton
