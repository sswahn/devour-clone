import { useState, createContext } from 'react'

const GetSearchFormContext = createContext(null)
const SetSearchFormContext = createContext(null)

function SearchFormProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <GetSearchFormContext.Provider value={state}>
      <SetSearchFormContext.Provider value={setState}>
        {children}
      </SetSearchFormContext.Provider>
    </GetSearchFormContext.Provider>
  )
}

export { GetSearchFormContext, SetSearchFormContext, SearchFormProvider }
