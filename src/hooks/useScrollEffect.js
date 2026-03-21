import { useRef, useEffect } from 'react'
import scroll from '../utilities/scrollEngine'

function useScrollEffect() {
  const elementRef = useRef(null)
  const styleRef = useRef(null)
  const isHidden = useRef(false)
  const highVelocity = useRef(false)

  const scrollEffect = (element, style) => {
    elementRef.current = element
    styleRef.current = style
  }

  const setHidden = element => {

    console.log('element: ', element)
    console.log('element.classList: ', element.classList)
    
    if (!isHidden.current) {
      element.classList.add(styleRef.current)
      isHidden.current = true
    }
  }

  const setVisible = element => {
    if (isHidden.current) {
      element.classList.remove(styleRef.current)
      isHidden.current = false
    }
  }
  
  const updateElement = ({ deltaY, direction, velocity }) => {
    const element = elementRef.current
    if (!element) {
      return
    }

    if (!highVelocity.current && velocity > 70) {
      highVelocity.current = true
      return setVisible(element)
    }

    if (highVelocity.current && velocity === 0) {
      highVelocity.current = false
      return
    }

    if (highVelocity.current) {
      return
    }

    if (direction === 'down' && deltaY > 200) {
      return setHidden(element)
    }

    if (direction === 'up') {
      return setVisible(element)
    }
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(updateElement)
    return () => {
      unsubscribe()
    }
  }, [elementRef.current])

  return {
    scrollEffect
  }
}

export default useScrollEffect
