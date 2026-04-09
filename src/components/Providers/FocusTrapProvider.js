import { useRef, useEffect, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const overlayRef = useRef(null)

  const focusLast = event => {
    
    console.log('first sentinel triggered!')
    
    const { length } = overlayRef.current.children
    overlayRef.current.children[length - 1].focus()
  }
  
  const focusFirst = event => {
    
    console.log('last sentinel triggered!')
    
    overlayRef.current.children[0].focus()
  }

    
  useEffect(() => {
    console.log('ref in focustrap provider: ', overlayRef.current)
    overlayRef.current?.focus()
  }, [overlayRef])
  
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      <div onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div onFocus={focusFirst} tabIndex={0}></div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
