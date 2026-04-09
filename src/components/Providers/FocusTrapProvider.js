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
    console.log('ref in focustrap provider: ', overlayRef.current)
    overlayRef.current?.focus()
  }, [])
  
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      <div ref={startRef} onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div ref={endRef} onFocus={focusFirst} tabIndex={0}></div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
