import { useRef, useEffect, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const startRef = useRef(null)
  const endRef = useRef(null)
  const overlayRef = useRef(null)

  const focusLast = event => {
    
    console.log('first sentinel triggered!')
    
    const { length } = profileRef.current.children
    overlayRef.current.children[length - 1].focus()
  }
  
  const focusFirst = event => {
    
    console.log('last sentinel triggered!')
    
    overlayRef.current.children[0].focus()
  }

    
  useEffect(() => {
    overlayRef.current?.focus()
  }, [])
  
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      {overlayRef.current && <div ref={overlayRef} onFocus={focusLast} tabIndex={0}></div>}
        {children}
      {overlayRef.current &&  <div ref={overlayRef} onFocus={focusFirst} tabIndex={0}></div>}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
