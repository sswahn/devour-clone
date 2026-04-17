import { useState, useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

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
    console.log('focusFirst fired!')
    console.log('focusing on ref.current.firstElementChild: ', ref.current.firstElementChild)
    
    ref.current.firstElementChild.focus()
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
