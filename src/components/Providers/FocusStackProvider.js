import { useRef, useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

function FocusStackProvider() {
  const stack = useRef([])
  
  const resoreFocus = () => {
    for (const element of stack.current) {
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
      }
    }
  }
  
  useEffect(() => {
    stack.push(document.ActiveElement)
  }, [document.ActiveElement])

  return (
    <FocusStackContext.Provider value={restoreFocus}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
