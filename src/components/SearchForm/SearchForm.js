import { useState, useRef, useEffect } from 'react'
import server from '../../utilities/server'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './searchform.module.css'

function SearchForm({ closeSearch }) {
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])

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

  useEffect(() => {
    const item = localStorage.getItem('searches')
    if (item) {
      setRecentSearches(JSON.parse(item) )
    }
  }, [])
  
  return (
    <search className={styles.search}>
      <form onSubmit={onSubmit}>
        <div>
          <SearchIcon />
        </div>
    
        <SearchInput setSearchResults={setSearchResults} />

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
