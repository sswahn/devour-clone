import { useState, useRef } from 'react'
import server from '../../utilities/server'
import useDebounce from '../../hooks/useDebounce'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './searchform.module.css'

// const unique_values = [...new Set(repeated_values)]

function SearchForm({ closeSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const [recentSearches, setRecentSearches] = useState(JSON.parse(localStorage.getItem('searches') || '[]'))
  const inputRef = useRef(null)

  const handleCloseSearch = async event => {
    // await document.exitFullscreen()
    closeSearch()
  }

  // make/use a custom hook
  const speechRecognition = () => {
    const recognition = new window.SpeechRecognition() // window.webkitSpeechRecognition
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'
    recognition.start()
  }

  const requestData = async value => {
    const request = {
      value
    }
    const response = await server.post(config.api.search, request)
    setData(response.message)
  }

  const storeLocally = useDebounce((key, value) => {
    try {
        const item = localStorage.getItem(key)
        const existing = item ? JSON.parse(item) : []
        if (existing.includes(value)) {
          return
        }
        const data = [value, ...existing].slice(0, 5)
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      throw error
    }
  }, 600)

  
  const onChange = event => {
    const value = event.target.value.trim().toLowerCase()
    if (!value) {
      return
    }

    // check for empty string ''?
    
    storeLocally('searches', value)
    
    setSearchValue(value)
    
  }
  
  const onKeyDown = event => {

    return
    
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

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <search className={styles.search}>
      <form onSubmit={onSubmit}>
        <div>
          <SearchIcon />
        </div>
    
        <input 
          ref={inputRef}
          type="search"
          enterKeyHint="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength="288"
          autoFocus
          autoComplete="on"
          spellCheck={true} 
        />

        <div>
          {/* !!window.SpeechRecognition && */
            <button type="button" onClick={speechRecognition} aria-label="voice recognition">
              <MicrophoneIcon size={18} />
            </button>
          }
          <button type="button" onClick={handleCloseSearch} aria-label="close search">
            <XmarkIcon />
          </button>
        </div>
      </form>

      <ul role="listbox">
        {recentSearches?.length > 0 && recentSearches.map((search, index) =>
          <li key={index} role="option">{search}</li>
        )}    
      </ul>      
    </search>
  )
}

export default SearchForm
