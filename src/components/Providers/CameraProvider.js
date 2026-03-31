import { useState, createContext } from 'react'

const GetCameraContext = createContext(null)
const SetCameraContext = createContext(null)

function CameraProvider({ children }) {
  const [state, setState] = useState(false)

  const context = useMemo(() => state, [state])
  const setContext = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return (
    <GetCameraContext.Provider value={context}>
      <SetCameraContext.Provider value={setContext}>
        {children}
      </SetCameraContext.Provider>
    </GetCameraContext.Provider>
  )
}

export { GetCameraContext, SetCameraContext, CameraProvider }
