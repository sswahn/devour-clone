import { useState, useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const focusedRef = useRef(null)
  
  const overlayRef = useCallback(node => {
    if (node !== null) {
      node.focus()
      focusedRef.current = node
      setIsOpen(true)
    } else {  
      focusedRef.current = null // 2. Cleanup logic (unmount)
      setIsOpen(false)
    }
  }, [])

  const focusLast = event => {

    console.log('focusLast fired!')
    console.log('focusing on focusedRef.current.lastElementChild: ', focusedRef.current.lastElementChild) 
    
    focusedRef.current.lastElementChild.focus()
  }
  
  const focusFirst = event => {

    console.log('focusFirst fired!')
    console.log('focusing on focusedRef.current.firstElementChild: ', focusedRef.current.firstElementChild)
    
    focusedRef.current.firstElementChild.focus()
  }
    
  return (
    <FocusTrapContext.Provider value={overlayRef}>
      {focusedRef.current && <div onFocus={focusLast} tabIndex={0}></div>}
        {children}
      {focusedRef.current && <div onFocus={focusFirst} tabIndex={0}></div>}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
