import { useRef, createContext } from 'react'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const scrollRef = useRef(null)
  
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
