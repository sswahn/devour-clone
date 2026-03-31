import { useState, createContext } from 'react'

const GetSearchContext = createContext(null)
const SetSearchContext = createContext(null)

function SearchProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <GetSearchContext.Provider value={state}>
      <SetSearchContext.Provider value={setState}>
        {children}
      </SetSearchContext.Provider>
    </GetSearchContext.Provider>
  )
}

export { GetSearchContext, SetSearchContext, SearchProvider }
