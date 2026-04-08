import ArrowLeftIcon from '../../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseProfileButton.module.css'

function CloseProfileButton({ closeSearch }) {

  const handleCloseProfile = async event => {
    // await document.exitFullscreen()
    closeSearch()
  }
 
 return (
   <button className={styles.closeProfileButton} onClick={handleCloseProfile} type="button" aria-label="close profile">
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseProfileButton
