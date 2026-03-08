export function createMultiObserver(options) {
  const elementCallbacks = new Map()

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elementCallbacks.get(entry.target)
      if (callback) {
        callback(entry)
      }
    })
  }, options)

  const observe = (element, callback) => {
    elementCallbacks.set(elemet, callback)
    observer.observe(element)
  }

  const unobserve = element => {
    elementCallbacks.delete(element)
    observer.unobserve(element)
  }

  const disconnect = () => {
    elementCallbacks.clear()
    observer.disconnect()
  }
  
  return {
    observe,
    unobserve,
    disconnect
  }
}
