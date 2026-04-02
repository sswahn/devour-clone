import { useRef } from 'react'

function useDebounce(callback, delay) {
  const timeoutRef = useRef()

  return (...args) => {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export default useDebounce
