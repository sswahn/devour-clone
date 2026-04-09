import { useRef, useCallback, createContext } from 'react'

const FocusTrapContext = createContext(null)

function FocusTrapProvider({ children }) {
  const focusedRef = useRef(null)
  
  const overlayRef = useCallback(node => {
    if (node !== null) {

      console.log('node: ', node)
      
      node.focus()
      focusedRef.current = node
    } else {  
      focusedRef.current = null // 2. Cleanup logic (unmount)
    }
  }, [])

  const focusLast = event => {

    console.log('focusLast fired!')
    console.log('focusedRef.current.children: ', focusedRef.current.children)
    console.log('focusing on: ', focusedRef.current.children[length - 1])
    
    const { length } = focusedRef.children
    focusedRef.current.children[length - 1].focus()
  }
  
  const focusFirst = event => {

    console.log('focusFirst fired!')
    console.log('focusedRef.current.children: ', focusedRef.current.children)
    console.log('focusing on: ', focusedRef.current.children[0])
    
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
