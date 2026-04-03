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
          <SpeechRecognitionButton />
    
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
