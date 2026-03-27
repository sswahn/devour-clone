import { useState, createContext } from 'react'

const GetBottomSheetContext = createContext(null)
const SetBottomSheetContext = createContext(null)

function BottomSheetProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <GetBottomSheetContext.Provider value={state}>
      <SetBottomSheetContext.Provider value={setState}>
        {children}
      </SetBottomSheetContext.Provider>
    </GetBottomSheetContext.Provider>
  )
}

export { GetBottomSheetContext, SetBottomSheetContext, BottomSheetProvider }
