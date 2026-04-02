import SearchIcon from '../../../Icons/SearchIcon/SearchIcon'
import styles from './searchbutton.module.css'

function SearchButton({ openSearch }) {

  const onClick = async event => {
    try {
      navigator.vibrate(50)
      // await document.getElementById('portal').requestFullscreen()
     // await screen.orientation.lock('portrait')
      openSearch()
    } catch (error) {
      throw new Error(error)
    }
  }
  
  return (
    <button className={styles.searchButton} onClick={onClick} type="button" aria-label="search">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
