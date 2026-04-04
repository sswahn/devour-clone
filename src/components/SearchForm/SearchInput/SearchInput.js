import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, setSearchValue }) {

  const onChange = ({ target }) => {
    setSearchValue(target.value)    
  }

  const onInput = ({ target }) => {
    if (target.validity.patternMismatch) {
      target.reportValidity()
    }
  }
  
  return (
    <input
      className={styles.input}
      type="search"
      value={searchValue}
      enterKeyHint="search"
      onChange={onChange}
      onInput={onInput}
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
