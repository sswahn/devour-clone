import { useState, useRef, useEffect } from 'react'
import SearchIcon from './Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from './Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './searchform.module.css'

//TODO: bottom of page just above bottomnav

function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)

  const clearCloseInput = () => {
    // first click clears, second closes
    return
  }

  // make/use a custom hook
  const speechRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'
    recognition.start()
  }

  const handleVoiceRecognition = event => {
    // set speech to searchValue
  }
  
  const onChange = event => {
    // debounce
    // store recent searches in locoalStorage
    // avoid multiple http requests for the same query
    return
  }
  
  const onKeyDown = event => {
    // handle for enter key (prolly ignore it)
    if (event.key === 'Enter') {
      return
    }
    
    // handle key select of suggestions
    // Tab and arrow keys
    if (event.key === 'Tab') {}
    if (event.key === 'ArrowDown') {}
    if (event.key === 'ArrowUp') {}
    
    // escape clears input then closes if already cleared
    // escape -> clearCloseInput()
    if (event.key === 'Escape') {}
    
    
    return
  }

  const onSubmit = event => {
    event.preventDefault()
  }
  
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <input 
        ref={inputRef}
        type="search"
        value={searchValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search"
        disabled={false}
        aria-label="search input"  
      />
      <SearchIcon />
      <button type="button" onClick={handleVoiceRecognition} aria-label="voice recognition">
        <MicrophoneIcon />
      </button>
    </form>
  )
}

export default SearchForm
