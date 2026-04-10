import { useReducer, createContext } from 'react'

const SessionContext = createContext()

function SessionProvider({ children }) {
  
  return (
    <SessionContext.Provider>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionProvider }
