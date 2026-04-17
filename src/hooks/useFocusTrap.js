import { useContext } from 'react'
import { FocusTrapContext } from '../components/Providers/FocusTrapProvider'

function useFocusTrap() {
  const focusRef = useContext(FocusTrapContext)
  
  if (!focusRef) {
    // -->
  }
  
  return focusRef
}

export default useFocusTrap
