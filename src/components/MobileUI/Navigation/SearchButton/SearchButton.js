import SearchIcon from '../../../Icons/SearchIcon/SearchIcon'
import styles from './SearchButton.module.css'

function SearchButton({ searchButtonRef, openSearch }) {

  const onClick = async event => {
    navigator.vibrate(50)
    //await document.getElementById('portal').requestFullscreen()
    //await screen.orientation.lock('portrait')
    openSearch()
  }
  
  return (
    <button className={styles.searchButton} ref={searchButtonRef} onClick={onClick} type="button" aria-label="search" aria-haspopup="dialog">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
