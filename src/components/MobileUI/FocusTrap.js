import { useRef } from 'react'

function FocusTrap({ children }) {
  const startRef = useRef(null)
  const endRef = useRef(null)
  
  return (
    <>
      <div></div>
      {children}
      <div></div>
    </>
  )
}

export default FocusTrap
