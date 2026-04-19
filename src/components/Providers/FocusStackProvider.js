import { useRef, useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

function FocusStackProvider() {
  const stack = useRef([])

  const action = event => {
    if (event.target.tagName === 'BUTTON')) {
      stack.current.push(event.target)
    }
  }

  const onClick = event => {
    action(event)
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action(event)
    }
  }
  
  const resoreFocus = () => {
    for (let i = stack.current.length - 1; i >= 0; i--) {
      const element = stack.current[i]
      if (document.body.contains(element)) {
        element.focus()
        stack.current = []
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <FocusStackContext.Provider value={restoreFocus}>
      {children}
    </FocusStackContext.Provider>
  )
}

export { FocusStackContext, FocusStackProvider }
