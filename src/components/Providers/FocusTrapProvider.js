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
    const elements = containerRef.current.querySelectorAll(selector)
    console.log('focusLast: ', elements)
    console.log('elements.length: ', elements.length)
    console.log('elements.at(-1): ', elements.at(-1))
    if (elements.length > 0) {
      elements.at(-1).focus()
    }
  }
  
  const focusFirst = event => {
    const elements = containerRef.current.querySelectorAll(selector)
    console.log('focusFirst: ', elements)
    console.log('elements.length: ', elements.length)
    console.log('elements.at(0): ', elements.at(0))
    if (elements.length > 0) {
      elements.at(0).focus()
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
