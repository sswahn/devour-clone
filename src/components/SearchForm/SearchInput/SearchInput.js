import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, error, setSearchValue, setError }) {

  const onChange = ({ target }) => {
    if (target.validity.patternMismatch) {
      target.reportValidity()
      setError(true)
    } else if (error) {
      setError(false)
    }
    setSearchValue(target.value)
  }
  
  return (
    <input
      className={styles.input}
      type="search"
      value={searchValue}
     // enterKeyHint="search"
      onChange={onChange}
      maxLength="288"
      pattern="[a-zA-Z0-9 ]+" 
      title="Use letters and numbers only."
      spellCheck={true}
      autoComplete="off"
      autoFocus
      role="combobox"
      aria-autocomplete="list"
      aria-controls="suggestions"
      aria-expanded={true} /* add something like isExpanded={searchResults.length > 0} when backend complete.[ */
    />
  )
}

export default SearchInput
