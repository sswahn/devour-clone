import { useState, createContext } from 'react'

const GetProfileContext = createContext(null)
const SetProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <GetProfileContext.Provider value={state}>
      <SetProfileContext.Provider value={setState}>
        {children}
      </SetProfileContext.Provider>
    </GetProfileContext.Provider>
  )
}

export { GetProfileContext, SetProfileContext, ProfileProvider }
