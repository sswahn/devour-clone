import { createContext, useReducer } from 'react'

const BottomSheetContext = createContext(null)
const BottomSheetDispatch = createContext(null)

const initialState = {
  bottomsheet: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'bottomsheet':
      return { ...state, bottomsheet: action.payload }
    default:
      return state
  }
}

export function BottomSheetProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BottomSheetContext.Provider value={state}>
      <BottomSheetDispatch.Provider value={dispatch}>
        {children}
      </BottomSheetDispatch.Provider>
    </BottomSheetContext.Provider>
  )
}

export default BottomSheetProvider
