import { useRef } from 'react'

function FocusTrap({ children }) {
  const startRef = useRef(null)
  const endRef = useRef(null)
  const overlayRef = useRef(null)

  const focusLast = event => {
    console.log('first sentinel triggered!')
    const { length } = profileRef.current.children
    profileRef.current.children[length - 2].focus()
  }
  
  const focusFirst = event => {
    console.log('last sentinel triggered!')
    profileRef.current.children[1].focus()
  }
  
  return (
    <>
      <div></div>
      {children}
      <div></div>
    </>
  )
}

export default FocusTrap
