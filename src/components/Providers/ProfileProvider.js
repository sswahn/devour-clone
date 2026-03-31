import { useState, useMemo, useCallback, createContext } from 'react'

const GetProfileContext = createContext(null)
const SetProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [state, setState] = useState(false)

  const context = useMemo(() => state, [state])
  const setContext = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return (
    <GetProfileContext.Provider value={context}>
      <SetProfileContext.Provider value={setContext}>
        {children}
      </SetProfileContext.Provider>
    </GetProfileContext.Provider>
  )
}

export { GetProfileContext, SetProfileContext, ProfileProvider }
