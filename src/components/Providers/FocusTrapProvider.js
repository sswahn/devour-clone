import { useState, useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function FocusTrapProvider({ children }) {
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef(null)
  
  const focusRef = useCallback(node => {
    if (node !== null) {
      ref.current = node
      ref.current.focus()
      setIsMounted(true)
    } else {  
      ref.current = null // 2. Cleanup logic (unmount)
      setIsMounted(false)
    }
  }, [])

  const focusLast = event => {
    console.log('focusLast fired!')
    console.log('focusing on ref.current.lastElementChild: ', ref.current.lastElementChild) 
    
    ref.current.lastElementChild.focus()
  }
  
  const focusFirst = event => {
    const focusableElements = containerRef.current.querySelectorAll(selector)
    // 3. Focus the first found element if it exists
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
    
  return (
    <FocusTrapContext.Provider value={focusRef}>
      {isMounted && <div onFocus={focusLast} tabIndex={0}></div>}
        {children}
      {isMounted && <div onFocus={focusFirst} tabIndex={0}></div>}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
