import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

function useScrollContext(callback = undefined) {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error(`Error in useScrollContext. ref: ${ref}`)
  }
  return ref
}

export { useScrollContext }
