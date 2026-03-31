import { useSetSearchContext } from '../../../hooks/useSearchContext'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './searchbutton.module.css'

function SearchButton() {
  const setSearchContext = useSetSearchContext()
  
  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    setSearchContext()
  }
  
  return (
    <button className={styles.searchButton} onClick={onClick} type="button" aria-label="search">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
