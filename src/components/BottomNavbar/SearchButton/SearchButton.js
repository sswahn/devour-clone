import { useSetSearchContext } from '../../../hooks/useSearchContext'
import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './searchbutton.module.css'

function SearchButton() {
  const setSearchContext = useSetSearchContext()
  
  const onClick = async event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    await document.getElementById('portal').requestFullscreen()
    await screen.orientation.lock('portrait')
    setSearchContext(prevContext => !prevContext)
  }
  
  return (
    <button className={styles.searchButton} onClick={onClick} type="button" aria-label="search">
      <SearchIcon />  
    </button>
  )
}

export default SearchButton
