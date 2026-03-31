import { useContext, useEffect } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

// check with AI about using provider/context/hook pattern
// vs utility with getter setter for this functionality

function useScrollContext(callback = undefined) {
  const ref = useContext(ScrollContext)
  if (!ref) {
    throw new Error(`Error in useScrollContext. ref: ${ref}`)
  }

  useEffect(() => {
    console.log('useScrollContext useEffect rendered...')

    if (!ref.current) {
      return
    }

    if (callback) {
      callback(ref)
    }
    
  }, [ref])

  return ref
}

export { useScrollContext }
