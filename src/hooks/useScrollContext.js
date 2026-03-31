import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'
  
function useScrollContext() {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error(`Error in useScrollContext. ref: ${ref}`)
  }
  return ref
}

export default useScrollContext
