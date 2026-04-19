import { useRef, useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

function FocusStackProvider({ children }) {
  const stack = useRef([])

  const action = event => {
    if (event.target.tagName === 'BUTTON') {
      stack.current.push(event.target)
    }
  }

  const onClick = event => {
    action(event)
  }
  
  const restoreFocus = () => {
    for (let i = stack.current.length - 1; i >= 0; i--) {
      const element = stack.current[i]
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
        return
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <FocusStackContext.Provider value={restoreFocus}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
