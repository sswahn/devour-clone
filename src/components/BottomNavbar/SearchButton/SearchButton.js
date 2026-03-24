import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './searchbutton.module.css'

function SearchButton() {

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(45)
    }
    
    return
  }
  
  return (
    <button className={styles.searchButton} onClick={onClick} type="button" aria-label="search">
      <SearchIcon size="1em" />  
    </button>
  )
}

export default SearchButton
