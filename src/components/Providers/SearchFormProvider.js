import { useState, useMemo, useCallback, createContext } from 'react'

const GetSearchFormContext = createContext(null)
const SetSearchFormContext = createContext(null)

// providers should have useHook implementation
// between context and components
// probably one hook per context:
// useGetSearchFormContext, etc.

function SearchFormProvider({ children }) {
  const [state, setState] = useState(false)

  const context = useMemo(() => state, [state])

  const setContext = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return (
    <GetSearchFormContext.Provider value={context}>
      <SetSearchFormContext.Provider value={setContext}>
        {children}
      </SetSearchFormContext.Provider>
    </GetSearchFormContext.Provider>
  )
}

export { GetSearchFormContext, SetSearchFormContext, SearchFormProvider }
