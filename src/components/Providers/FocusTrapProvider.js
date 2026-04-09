import { useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const focusedRef = useRef(null)
  
  const overlayRef = useCallback(node => {
    if (node !== null) {
      console.log('ref in focustrap provider: ', node)
      node.focus()
      focusedRef.current = node
    } else { 
      // 2. Cleanup logic (unmount)
      focusedRef.current = null
    }
  }, [])

  const focusLast = event => {
    
    console.log('first sentinel triggered!')
    
    console.log('overlayRef: ', focusedRef)
    
    const { length } = focusedRef.children
    focusedRef.current.children[length - 1].focus()
  }
  
  const focusFirst = event => {
    
    console.log('last sentinel triggered!')

    console.log('overlayRef: ', focusedRef)
    
    focusedRef.current.children[0].focus()
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
