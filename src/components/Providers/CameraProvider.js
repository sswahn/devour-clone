import { createContext, useReducer } from 'react'

export const CameraContext = createContext(null)
export const CameraDispatch = createContext(null)

const initialState = {
  camera: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'camera':
      return { ...state, camera: action.payload }
    default:
      return state
  }
}

function CameraProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CameraContext.Provider value={state.camera}>
      <CameraDispatch.Provider value={dispatch}>
        {children}
      </CameraDispatch.Provider>
    </CameraContext.Provider>
  )
}

export default CameraProvider
