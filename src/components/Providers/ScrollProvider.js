import { useRef, useMemo, useCallback, createContext } from 'react'

const GetScrollContext = createContext(null)

function SearchFormProvider({ children }) {
  const scrollRef = useRef()
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
