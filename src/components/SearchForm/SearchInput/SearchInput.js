import { useState, useEffect } from 'react'
import useDebounce from '../../../hooks/useDebounce'
import styles from './SearchInput.module.css'

function SearchInput({ tempTranscript, finalTranscript, setSearchResults }) {
  const [searchValue, setSearchValue] = useState('')
  
  const requestData = async value => {

    return;
    
    const request = {
      value
    }
    const response = await server.post(config.api.search, request)
    setSearchResults(response.message)
  }

  const storeLocally = value => {
    const key = 'searches'
    const item = localStorage.getItem(key)
    const existing = item ? JSON.parse(item) : []
    if (existing.includes(value)) {
      return
    }
    const data = [value, ...existing].slice(0, 5)
    localStorage.setItem(key, JSON.stringify(data))
  }

  const handleData = useDebounce(value => {
    if (!value) {
      return
    }
    storeLocally(value)
    requestData(value)
  }, 600)

  const onChange = event => {
    const value = event.target.value.trim().toLowerCase()

    console.log('searchValue: ', searchValue)
    console.log('value: ', value)
    
    setSearchValue(value)
    handleData(value)
  }

  const onKeyDown = event => {
    switch(event.key) {
      case 'Enter':
        return console.log('Enter key') // handle for enter key (prolly ignore it)
      case 'Escape':
        return console.log('Escape key') // escape -> clearCloseInput()
      case 'ArrowUp':
        return console.log('ArrowUp key') // select suggestion up
      case 'ArrowDown':
        return console.log('ArrowDown key') // select suggestion down
      default:
        return console.log('key', event.key)
    }
  }

  const handleTranscript = () => {
    if (finalTranscript.length || tempTranscript) {
      setSearchValue(`${finalTranscript.join(' ')} ${tempTranscript}`.trim())
    }
  }

  useEffect(() => {
    handleTranscript()
  }, [finalTranscript, tempTranscript])
  
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
