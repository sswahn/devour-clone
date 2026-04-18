import SearchIcon from '../../Icons/SearchIcon/SearchIcon'
import styles from './SearchButton.module.css'

function SearchButton({ searchButtonRef, openSearch }) {

  const action = async () => {
    navigator.vibrate(50)
    //await document.getElementById('portal').requestFullscreen()
    //await screen.orientation.lock('portrait')
    openSearch()
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button 
      className={styles.searchButton} 
      ref={searchButtonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="search" 
      aria-haspopup="dialog">
      <div>
        <SearchIcon size={size} />  
      </div>
    </button>
  )
}

export default SearchButton
