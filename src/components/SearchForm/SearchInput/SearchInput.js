import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, setSearchValue, setError }) {

  const onChange = ({ target }) => {
    if (target.validity.patternMismatch) {
      target.reportValidity()
      setError(true)
    } else {
      setError(false)
    }
    setSearchValue(target.value)
  }
  
  return (
    <input
      className={styles.input}
      type="search"
      value={searchValue}
      enterKeyHint="search"
      onChange={onChange}
      maxLength="288"
      pattern="[a-zA-Z0-9 ]+" 
      title="Use letters and numbers only."
      required
      autoFocus
      autoComplete="on"
      spellCheck={true} 
    />
  )
}

export default SearchInput
