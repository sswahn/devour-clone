import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, setSearchValue }) {

  const onChange = ({ target }) => {
    if (target.validity.patternMismatch) {
      return target.reportValidity()
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
      title="Please use letters and numbers only."
      required
      autoFocus
      autoComplete="on"
      spellCheck={true} 
    />
  )
}

export default SearchInput
