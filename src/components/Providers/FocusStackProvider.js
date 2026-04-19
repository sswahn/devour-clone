import { useRef, useEffect, createContext } from 'react'

const FocusStackContext = createContext(null)

// Buttons that open overlays:
const BUTTON_WHITELIST = ['avatar', 'open-profile', 'open-notifications']

function FocusStackProvider() {
  const stack = useRef([])

  const action = event => {
    if (BUTTON_WHITELIST.contains(event.target.id)) {
      stack.current.push(event.target)
    }
  }

  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
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
