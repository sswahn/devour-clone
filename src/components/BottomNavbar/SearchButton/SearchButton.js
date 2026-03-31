import { useContext } from 'react'
import { SetSearchContext } from '../../Providers/SearchProvider'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './searchbutton.module.css'

function SearchButton() {
  const setSearchFormContext = useContext(SetSearchFormContext)
  
  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    setSearchFormContext(prevContext => !prevContext)
  }
  
  return (
    <button className={styles.searchButton} onClick={onClick} type="button" aria-label="search">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
