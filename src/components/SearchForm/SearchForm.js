import { useState, useRef, useEffect } from 'react'
import server from '../../utilities/server'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import SearchInput from './SearchInput/SearchInput'
import SpeechRecognitionButton from './SpeechRecognitionButton/SpeechRecognitionButton'
import CloseSearchButton from './CloseSearchButton/CloseSearchButton'
import styles from './searchform.module.css'

function SearchForm({ closeSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])

  const onSubmit = event => {
    event.preventDefault()
  }

  const storeServerSide = async value => {
    return;
    const request = {
      value
    }
    const response = await server.post(config.api.search, request)
    setSearchResults(response.message)
  }

  const storeLocalSide = value => {
    const key = 'searches'
    const item = localStorage.getItem(key)
    const existing = item ? JSON.parse(item) : []
    if (existing.includes(value)) {
      return
    }
    const data = [value, ...existing].slice(0, 5)
    localStorage.setItem(key, JSON.stringify(data))
  }
  
  useEffect(() => {
    const item = localStorage.getItem('searches')
    if (item) {
      setRecentSearches(JSON.parse(item) )
    }
  }, [])

  // remove x button from end of input, let mic be at end
  
  return (
    <search className={styles.search}>
      <form onSubmit={onSubmit}>
        <div>
          <SearchIcon />
        </div>
        <SearchInput 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          setSearchResults={setSearchResults} 
        />
        <div>
          <SpeechRecognitionButton setSearchValue={setSearchValue} />
  {/*    <CloseSearchButton closeSearch={closeSearch} /> */}
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
