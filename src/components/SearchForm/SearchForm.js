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

  const clearCloseInput = () => {
    // first click clears, second closes
   
  }

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
    const existing = localStorage.getItem(key) || {}
    const data = JSON.stringify({ ...existing, value })
    localStorage.setItem(key, data)
  }

  const debounce = (fn, delay) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
  
  const onChange = event => {
    // store recent searches in locoalStorage
    const value = event.target.value
    setSearchValue(value)
    //storeLocally('searches', value)
    
    // debounce request, avoid multiple http requests for the same query
    // debounce(requestData, 300)
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

  // use searchContext to add/remove .hidden class so transition will show (or use useTransition?)
  const setHidden = element => (!isHidden.current) && element.classList.add(styleRef.current)
  const setVisible = element => (isHidden.current) && element.classList.remove(styleRef.current)

  
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <button type="button" onClick={handleCloseSearch} aria-label="close search">
        <XmarkIcon />
      </button>
  
      <SearchIcon />
  
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
      
      {/* hook should return bool to check if speechRecognition exists, if so render button: */}
      <button type="button" onClick={handleVoiceRecognition} aria-label="voice recognition">
        <MicrophoneIcon />
      </button>
    </form>
  )
}

export default SearchForm
