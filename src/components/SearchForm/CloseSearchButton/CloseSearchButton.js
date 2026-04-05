import ArrowLeftIcon from '../../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseSearchButton.module.css'

function CloseSearchButton({ closeSearch }) {

  const handleCloseSearch = async event => {
    // await document.exitFullscreen()
    closeSearch()
  }
 
 return (
   <button className={styles.closeSearchButton} onClick={handleCloseSearch} type="button" aria-label="close search">
     <ArrowLeftIcon size={20} />
   </button>
  )
}

export default CloseSearchButton
