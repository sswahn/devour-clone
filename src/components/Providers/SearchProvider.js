import { useState, useMemo, useCallback, createContext } from 'react'

const GetSearchContext = createContext(null)
const SetSearchContext = createContext(null)

function SearchProvider({ children }) {
  const [state, setState] = useState(false)

  const context = useMemo(() => state, [state])
  const setContext = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return (
    <GetSearchContext.Provider value={context}>
      <SetSearchContext.Provider value={setContext}>
        {children}
      </SetSearchContext.Provider>
    </GetSearchContext.Provider>
  )
}

export { GetSearchContext, SetSearchContext, SearchProvider }
