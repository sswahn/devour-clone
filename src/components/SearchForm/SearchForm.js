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
    //
    // store recent searches in locoalStorage
    return
  }
  
  const onKeyPress = event => {
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
    <form className={styles.searchForm}>
      <input 
        ref={inputRef}
        type="search"
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="search input"  
      />
      <button type="button" onClick={clearCloseInput} aria-label="clear search">x</button>
    </form>
  )
}

export default SearchForm
