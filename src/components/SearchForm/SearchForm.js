import { useState, useContext, useRef, useEffect } from 'react'
import { config } from '../../config'
import { FocusTrapContext } from '../Providers/FocusTrapProvider' // use custom hook pattern, always.
import server from '../../utilities/server'
import useDebounce from '../../hooks/useDebounce'
import CloseButton from '../CloseButton/CloseButton'
import VerticalEllipsisButton from '../VerticalEllipsisButton/VerticalEllipsisButton'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import SearchInput from './SearchInput/SearchInput'
import SpeechRecognitionButton from './SpeechRecognitionButton/SpeechRecognitionButton'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styles from './SearchForm.module.css'

function SearchForm({ closeSearch }) {
  const overlayRef = useContext(FocusTrapContext)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = event => event.preventDefault()

  const requestSearchResults = useDebounce(async () => {
    
    const value = searchValue.trim()
    if (!value || error) { // might have to .trim() here
      return
    }
    
    setLoading(true)
    const request = {
     // is this app private or public, if so no session data available; session.username etc.
      message: value
      // ... additional data to improve search results, ie, prevSearch etc.
    }
    //const response = await server.post(config.api.search, request)
   // setSearchResults(response.message)
    storeSearchTermLocally(value)
    setLoading(false)
  }, 600)

  const storeSearchTermLocally = value => {

    return console.log('invalid text.')
    
    const key = config.storage.search.terms
    const item = localStorage.getItem(key)
    const existing = item ? JSON.parse(item) : []
    if (existing.includes(value)) {
      return
    }
    const data = [value, ...existing].slice(0, 5)
    localStorage.setItem(key, JSON.stringify(data))
    setRecentSearches(data)
  }

  const loadRecentSearchTerms = () => {
    const item = localStorage.getItem('searches')
    if (item) {
      setRecentSearches(JSON.parse(item) )
    }
  }

  useEffect(() => {
    requestSearchResults()
  }, [searchValue])
  
  useEffect(() => {
    loadRecentSearchTerms()
  }, [])

  return (
    <search id="search" className={styles.search} ref={overlayRef} role="dialog" aria-modal="true">
      <CloseButton name="search" close={closeSearch} />
      <VerticalEllipsisButton />
      <form onSubmit={onSubmit}>
        <SearchIcon size={18} />
        <SearchInput 
          searchValue={searchValue} 
          error={error}
          setSearchValue={setSearchValue}
          setError={setError}
        />
        <SpeechRecognitionButton setSearchValue={setSearchValue} />
      </form>
      
      {/* make Suggestions component: */}
      
      <ul id="suggestions" role="listbox" aria-live="polite" aria-busy={loading}>
        {loading ? <LoadingSpinner /> : recentSearches?.map((search, index) =>
          <li key={index} role="option">{search}</li>
        )}    
      </ul>  
    
    </search>
  )
}

export default SearchForm
