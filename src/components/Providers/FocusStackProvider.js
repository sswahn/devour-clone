import { useEffect } from 'react'

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
    <GetProfileContext.Provider value={username}>
      <SetProfileContext.Provider value={setUsername}>
        {children}
      </SetProfileContext.Provider>
    </GetProfileContext.Provider>
  )
}
