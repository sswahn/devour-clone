import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'
  
function useScollContext() {
  const ref = useContext(ScrollContext)

  return ref
}

export default useScrollContext
