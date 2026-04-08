import { useRef, useCallback, useEffect } from 'react'

function useDebounce(fn, delay) {
  const timeoutRef = useRef()
  const fnRef = useRef(fn)
  
  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])
  
  return useCallback((...args) => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      fnRef.current(...args)
    }, delay)
  }, [delay])
}

export default useDebounce
