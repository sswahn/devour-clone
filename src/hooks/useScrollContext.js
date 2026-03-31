import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

// check with AI about using provider/context/hook pattern
// vs utility with getter setter for this functionality

function useScrollContext(callback = undefined) {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error(`Error in useScrollContext. ref: ${ref}`)
  }
  if (callback) {
    callback(ref)
    return ref
  }
  return ref
}

export { useScrollContext }
