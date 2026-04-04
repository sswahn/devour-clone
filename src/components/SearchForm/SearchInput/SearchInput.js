import { useState, useEffect } from 'react'
import useDebounce from '../../../hooks/useDebounce'
import styles from './SearchInput.module.css'

function SearchInput({ searchValue, setSearchValue, setSearchResults, requestSearchResults }) {

  const handleSearch = value => {
    setSearchValue(value)
    requestSearchResults(value)
  }
  
  const onChange = event => {
    const value = event.target.value
    handleSearch(value)
  }

  const onKeyDown = event => { // might have to move this to parent, to focus on list items.
    const value = event.target.value
    switch(event.key) {
      case 'Enter':
        return handleSearch(value)
      case 'Escape':
        return setSearchValue('')
      case 'ArrowUp':
        return console.log('ArrowUp key') // select suggestion up
      case 'ArrowDown':
        return console.log('ArrowDown key') // select suggestion down
      default:
        return console.log('key', event.key)
    }
  }

  return (
    <input
      className={styles.input}
      type="search"
      value={searchValue}
      enterKeyHint="search"
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength="288"
      autoFocus
      autoComplete="on"
      spellCheck={true} 
    />
  )
}

export default SearchInput
