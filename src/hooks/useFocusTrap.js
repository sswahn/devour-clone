import { useContext } from 'react'
import { FocusTrapContext } from '../Providers/FocusTrapProvider'

function useFocusTrap() {
  const focusRef = useContext(FocusTrapContext)
  
  if (!focusRef) {
    // error
  }
  
  return focusRef
}

export default useFocusTrap
