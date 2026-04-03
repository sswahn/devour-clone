
function SearchInput({  }) {
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
