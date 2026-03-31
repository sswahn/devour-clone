import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'
  
function useScollContext() {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error('useScrollContext must be used within appropriate context provider.')
  }
  return ref
}

export default useScrollContext
