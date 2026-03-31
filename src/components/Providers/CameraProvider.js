import { useState, createContext } from 'react'

const GetCameraContext = createContext(null)
const SetCameraContext = createContext(null)

function CameraProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <GetCameraContext.Provider value={state}>
      <SetCameraContext.Provider value={setState}>
        {children}
      </SetCameraContext.Provider>
    </GetCameraContext.Provider>
  )
}

export { GetCameraContext, SetCameraContext, CameraProvider }
