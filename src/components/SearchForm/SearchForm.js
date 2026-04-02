import { useState, useRef, useEffect } from 'react'
import server from '../../utilities/server'
import useDebounce from '../../hooks/useDebounce'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './searchform.module.css'

function SearchForm({ closeSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const [recentSearches, setRecentSearches] = useState(JSON.parse(localStorage.getItem('searches') || '[]'))
  const inputRef = useRef(null)

  const handleCloseSearch = async event => {
    try {
    // await document.exitFullscreen()
     closeSearch()
    } catch (error) {
      throw new Error(error)
    }
  }

  // make/use a custom hook
  const speechRecognition = () => {
    try {
      const recognition = new window.SpeechRecognition() // window.webkitSpeechRecognition
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'en-US'
      recognition.start()
    } catch (error) {
      throw new Error(error)
    }
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

  // this overrides with a single value
  const storeLocally = useDebounce((key, value) => {
    try {
        const storage = localStorage.getItem(key) || '[]'
        const existing = JSON.parse(storage).filter(x => !x.includes(value))
        const data = [value, ...existing ].slice(0, 5)
        const json = JSON.stringify(data)
        localStorage.setItem(key, json)
    } catch (error) {
      throw new Error(error)
    }
  }, 500)

  
  const onChange = event => {
    // store recent searches in locoalStorage
    const value = event.target.value

    
    
    storeLocally('searches', value)
    
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

  useEffect(() => {
    return () => {
      // localStorage.removeItem('searches')
    }
  }, [])

  return (
    <section className={styles.search}>
      <form onSubmit={onSubmit}>
        <div>
          <SearchIcon />
        </div>
    
        <input 
          ref={inputRef}
          type="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={true}
          aria-label="search input"  
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

            
      
      <div className="suggestions">
        <ul>
        {recentSearches?.length > 0 && recentSearches.map((search, index) =>
          <li key={index}>{search}</li>
        )}    
        </ul>      
      </div>
    </section>
  )
}

export default SearchForm
