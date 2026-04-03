import XmarkIcon from '../../Icons/XmarkIcon/XmarkIcon'
import styles from './CloseSearchButton.module.css'

function CloseSearchButton({ closeSearch }) {

  const handleCloseSearch = async event => {
    // await document.exitFullscreen()
    closeSearch()
  }
 
 return (
   <button className={styles.closeSearchButton} onClick={handleCloseSearch} type="button" aria-label="close search">
     <XmarkIcon />
   </button>
  )
}

export default CloseSearchButton
