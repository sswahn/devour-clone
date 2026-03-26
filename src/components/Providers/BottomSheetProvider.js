import { createContext, useReducer } from 'react'

export const BottomSheetContext = createContext(null)
export const BottomSheetDispatch = createContext(null)

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

function BottomSheetProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BottomSheetContext.Provider value={state.bottomsheet}>
      <BottomSheetDispatch.Provider value={dispatch}>
        {children}
      </BottomSheetDispatch.Provider>
    </BottomSheetContext.Provider>
  )
}

export default BottomSheetProvider
