import { useState, useEffect } from 'react'
import styles from './SearchInput.module.css'

function SearchInput({ loading, searchValue, setSearchValue }) {

  const onChange = event => {
    const value = event.target.value
    setSearchValue(value)
    requestSearchResults(value)
  }

  return (
    <input
      className={styles.input}
      type="search"
      value={searchValue}
      enterKeyHint="search"
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={loading}
      maxLength="288"
      autoFocus
      autoComplete="on"
      spellCheck={true} 
    />
  )
}

export default SearchInput
