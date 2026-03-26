import { createContext, useReducer } from 'react'

export const Context = createContext([])

const Provider = ({ children }) => {
  const data = {
    bottomsheet: false,
    modal: false
  }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'bottomsheet':
        return { ...state, bottomsheet: action.payload }        
      case 'modal':
        return { ...state, modal: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider
