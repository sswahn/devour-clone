import { useState, useRef, useEffect } from 'react'
import server from '../../utilities/server'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import MicrophoneIcon from '../Icons/MicrophoneIcon/MicrophoneIcon'

import SearchInput from './SearchInput/SearchInput'
import SpeechRecognitionButton from './SpeechRecognitionButton/SpeechRecognitionButton'
import CloseSearchButton from './CloseSearchButton/CloseSearchButton'

import styles from './searchform.module.css'

function SearchForm({ closeSearch }) {
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [tempTranscript, setTempTranscript] = useState('')
  const [finalTranscript, setFinalTranscript] = useState([])
  
  const onSubmit = event => {
    event.preventDefault()
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
    
        <SearchInput
          tempTranscript={tempTranscript}
          finalTranscript={finalTranscript}   
          setSearchResults={setSearchResults}
        />

        <div>
          <SpeechRecognitionButton 
            setTempTranscript={setTempTranscript} 
            setFinalTranscript={setFinalTranscript} 
          />
          <CloseSearchButton closeSearch={closeSearch} />
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
