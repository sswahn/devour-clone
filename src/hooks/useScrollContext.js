import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'
  
function useScrollContext() {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error('useScrollContext must be used within appropriate context provider.')
  }
  return ref
}

export default useScrollContext
