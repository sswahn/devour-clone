import { useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const overlayRef = useCallback(node => {
    if (node !== null) {
      console.log('ref in focustrap provider: ', node)
      node.focus()
    }
  }, [])

  const focusLast = event => {
    
    console.log('first sentinel triggered!')
    
    const { length } = overlayRef.children
    overlayRef.children[length - 1].focus()
  }
  
  const focusFirst = event => {
    
    console.log('last sentinel triggered!')
    
    overlayRef.children[0].focus()
  }
    
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      <div onFocus={focusLast} tabIndex={0}></div>
        {children}
      <div onFocus={focusFirst} tabIndex={0}></div>
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
