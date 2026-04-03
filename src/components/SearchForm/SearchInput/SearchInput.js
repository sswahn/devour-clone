import useDebounce from '../../hooks/useDebounce'

function SearchInput({ setSearchValue }) {

  const requestData = async value => {

    return;
    
    const request = {
      value
    }
    const response = await server.post(config.api.search, request)
    setData(response.message)
  }

  const storeLocally = value => {
    const key = 'searches'
    const item = localStorage.getItem(key)
    const existing = item ? JSON.parse(item) : []
    if (existing.includes(value)) {
      return
    }
    const data = [value, ...existing].slice(0, 5)
    localStorage.setItem(key, JSON.stringify(data))
  }

  const onChange = useDebounce(event => {
    const value = event.target.value.trim().toLowerCase()
    if (!value) {
      return
    }
    setSearchValue(value) 
    storeLocally(value)
    requestData(value)
  }, [600])

  const onKeyDown = event => {
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
  
  return (
    <input 
      ref={inputRef}
      type="search"
      enterKeyHint="search"
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength="288"
      autoFocus
      autoComplete="on"
      spellCheck={true} 
    />
  )
}

export default SearchInput
