import { createContext, useReducer } from 'react'

export const SearchFormContext = createContext(null)
export const SearchFormDispatch = createContext(null)

const initialState = {
  searchform: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'searchform':
      return { ...state, searchform: action.payload }
    default:
      return state
  }
}

function SearchFormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <SearchFormContext.Provider value={state.searchform}>
      <SearchFormDispatch.Provider value={dispatch}>
        {children}
      </SearchFormDispatch.Provider>
    </SearchFormContext.Provider>
  )
}

export default SearchFormProvider
