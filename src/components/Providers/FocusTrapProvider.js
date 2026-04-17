import { useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const ref = useRef(null)
  
  const focusRef = useCallback(node => {
    if (node !== null) {
      ref.current = node
      ref.current.focus()
    } else {  
      console.log('focusRef cleanup fired. focusRef.current = null')
      ref.current = null // 2. Cleanup logic (unmount)
    }
  }, [])

  const focusLast = event => {
    console.log('focusLast fired!')
    console.log('focusing on focusRef.current.lastElementChild: ', focusRef.current.lastElementChild) 
    
    focusRef.current.lastElementChild.focus()
  }
  
  const focusFirst = event => {
    console.log('focusFirst fired!')
    console.log('focusing on focusRef.current.firstElementChild: ', focusRef.current.firstElementChild)
    
    focusRef.current.firstElementChild.focus()
  }
    
  return (
    <FocusTrapContext.Provider value={focusRef}>
      {focusRef.current && <div onFocus={focusLast} tabIndex={0}></div>}
        {children}
      {focusRef.current && <div onFocus={focusFirst} tabIndex={0}></div>}
    </FocusTrapContext.Provider>
  )
}

export { FocusTrapContext, FocusTrapProvider }
