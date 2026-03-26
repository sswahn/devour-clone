import { createContext, useReducer, useContext } from 'react'

const UIContext = createContext(null)
const UIDispatch = createContext(null)

const initialState = {
  bottomsheet: false,
  modal: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'bottomsheet':
      return { ...state, bottomsheet: action.payload }
    case 'modal':
      return { ...state, modal: action.payload }
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
