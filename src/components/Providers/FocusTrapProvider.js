import { useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const focusedRef = useRef(null)
  
  const overlayRef = useCallback(node => {
    if (node !== null) {
      node.focus()
      focusedRef.current = node
    } else {  
      focusedRef.current = null // 2. Cleanup logic (unmount)
    }
  }, [])

  const focusLast = event => {
    const { length } = focusedRef.children
    focusedRef.current.children[length - 1].focus()
  }
  
  const focusFirst = event => {
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
