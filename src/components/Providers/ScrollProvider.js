import { useState, useCallback, createContext } from 'react'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const [state, setState] = useState(null)
  
  const scrollRef = useCallback(node => (node !== null) && setState(node), [])
  
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
