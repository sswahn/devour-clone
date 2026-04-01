import { useState, useRef, useEffect } from 'react'
import { useSetSearchContext } from '../../hooks/useSearchContext'
import server from '../../utilities/server'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './searchform.module.css'

//TODO: bottom of page just above bottomnav

function SearchForm() {
  const setSearchContext = useSetSearchContext()
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)

  const handleCloseSearch = event => {
     setSearchContext(prevContext => !prevContext)
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

  const requestData = async value => {
    const request = {
      value
    }
    const response = await server.post(config.api.search, request)
    if (response.error) {
      return console.error(error)
    }
    setData(response.message)
  }

  const storeLocally = (key, value) => {
    const existing = JSON.parse(localStorage.getItem(key)) || {}
    if (!existing.includes(value)) {
      const data = JSON.stringify({ ...existing, value })
      localStorage.setItem(key, data)
    }
  }

  
  const onChange = event => {
    // store recent searches in locoalStorage
    const value = event.target.value

    console.log('onChange value: ', value)
    
    setSearchValue(value)
    
    
    // debounce request, avoid multiple http requests for the same query
    // debounce(requestData, 300)
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
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <button type="button" onClick={handleCloseSearch} aria-label="close search">
        <XmarkIcon />
      </button>
  
      <SearchIcon />
  
      <input 
        ref={inputRef}
        type="search"
       /* value={searchValue} */
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search"
        disabled={false}
        aria-label="search input"  
      />
      
      {/* hook should return bool to check if speechRecognition exists, if so render button: */}
      <button type="button" onClick={handleVoiceRecognition} aria-label="voice recognition">
        <MicrophoneIcon />
      </button>
    </form>
  )
}

export default SearchForm
