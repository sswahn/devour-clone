import { useState, useRef, useEffect } from 'react'
import styles from './searchform.module.css'

function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)

  const clearCloseInput = () => {
    // first click clears, second closes
    return
  }
  
  const onChange = event => {
    // debounce
    // store recent searches in locoalStorage
    // avoid multiple http requests for the same query
    return
  }
  
  const onKeyDown = event => {
    // handle for enter key (prolly ignore it)
    // handle tab to suggestions
    // escape clears + closes if already cleared
    // escape -> clearCloseInput()
    // arrow keys up and down suggestions
    
    return
  }

  const onSubmit = event => {
    event.preventDefault()
  }
  
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="search"
        value={searchValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search"
        disabled={false}
        aria-label="search input"  
      />
      <button type="button" onClick={clearCloseInput} aria-label="clear search">x</button>
          
      <div>Suggestions</div>
    </form>
  )
}

export default SearchForm
