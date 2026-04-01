import { useRef, useEffect, createContext } from 'react'
import scroll from '../../utilities/scrollEngine'

const ScrollContext = createContext(null)

function ScrollProvider({ children }) {
  const scrollRef = useRef(null)

   useEffect(() => {
    if (scrollRef.current) {
      scroll.setElement(scrollRef.current)
    }
  }, [])
  
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
