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

  const onSubmit = event => {
    event.preventDefault()
  }
  
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
    try {
      const request = {
        value
      }
      const response = await server.post(config.api.search, request)
      setData(response.message)
    } catch (error) {
      throw error
    }
  }

  return (
    <search className={styles.search}>
      <form onSubmit={onSubmit}>
        <div>
          <SearchIcon />
        </div>
    
        <SearchInput />

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
