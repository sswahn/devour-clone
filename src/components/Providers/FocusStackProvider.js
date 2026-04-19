import { useRef, useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

const buttonWhiteList = ['avatar', 'profile']

function FocusStackProvider() {
  const stack = useRef([])

  const addToStack = event => {
    if (buttonWhiteList.contains(event.target.id) {
      stack.current.push(event.target)
    }
  }
  
  const resoreFocus = () => {
    for (const element of stack.current) {
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', addToStack)
    document.addEventListener('keydown', addToStack)
    return () => {
      document.removeEventListener('click', addToStack)
      document.removeEventListener('keydown', addToStack)
    }
  }, [])

  return (
    <FocusStackContext.Provider value={restoreFocus}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
