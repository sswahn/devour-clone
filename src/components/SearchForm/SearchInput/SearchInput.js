
function SearchInput({  }) {

    const storeLocally = useDebounce((key, value) => {
    try {
      const item = localStorage.getItem(key)
      const existing = item ? JSON.parse(item) : []
      if (existing.includes(value)) {
        return
      }
      const data = [value, ...existing].slice(0, 5)
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      throw error
    }
  }, 600)

  const onChange = event => {
    const value = event.target.value.trim().toLowerCase()
    if (!value) {
      return
    }
    storeLocally('searches', value)
    setSearchValue(value) 
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
