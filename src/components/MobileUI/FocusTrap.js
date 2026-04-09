import { useRef, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const startRef = useRef(null)
  const endRef = useRef(null)
  const overlayRef = useRef(null)

  const focusLast = event => {
    
    console.log('first sentinel triggered!')
    
    const { length } = profileRef.current.children
    overlayRef.current.children[length - 2].focus()
  }
  
  const focusFirst = event => {
    
    console.log('last sentinel triggered!')
    
    overlayRef.current.children[1].focus()
  }
  
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      <div></div>
      {children}
      <div></div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }


    const GetProfileContext = createContext(null)
const SetProfileContext = createContext(null)

function ProfileProvider({ children }) {
  const [state, setState] = useState(false)

  const context = useMemo(() => state, [state])
  const setContext = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

  return (
    <GetProfileContext.Provider value={context}>
      <SetProfileContext.Provider value={setContext}>
        {children}
      </SetProfileContext.Provider>
    </GetProfileContext.Provider>
  )
}

export { GetProfileContext, SetProfileContext, ProfileProvider }
