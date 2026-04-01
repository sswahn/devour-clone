import { useContext, useEffect } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

function useScrollContext(callback = undefined) {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error(`Error in useScrollContext. ref: ${ref}`)
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (callback) {
      callback(ref)
    }
    
  }, [ref, callback])

  return ref
}

export { useScrollContext }
