import { useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

function FocusStackProvider() {
  let stack = []
  
  const resoreFocus = () => {
    for (const element of stack) {
      if (document.body.contains(element)) {
        element.focus()
        stack = []
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
