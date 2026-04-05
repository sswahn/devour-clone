import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, setSearchValue, setError }) {

  const onChange = ({ target }) => {
    if (target.validity.patternMismatch) {
      target.reportValidity()
      setError(true)
    } else {
      // check if there is and error before setting
      // error && setError(false)
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
      autoComplete="on"
      spellCheck={true}
      autoFocus
    />
  )
}

export default SearchInput
