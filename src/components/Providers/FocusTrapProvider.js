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
      <div ref={overlayRef} onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div ref={overlayRef} onFocus={focusFirst} tabIndex={0}></div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
