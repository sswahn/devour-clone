import { useRef, useEffect } from 'react'

function useScrollEffect() {
  const element = useRef(null)

  const setElement = el => {
    element.current = el
  }

  return {
    setElement
  }
}

export default useScrollEffect
