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

export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UIContext.Provider value={state}>
      <UIDispatch.Provider value={dispatch}>
        {children}
      </UIDispatch.Provider>
    </UIContext.Provider>
  )
}
