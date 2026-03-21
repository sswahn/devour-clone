// scrollEngine.js

let subscribers = new Set()
let started = false
let deltaY = 0
let scrollStart = 0
let scrollEnd = 0
let scrollDirection = undefined
let ticking = false
let prevScrollY = 0

function notify(data) {
  for (const fn of subscribers) {
    fn(data)
  }
}

function update() {
  const scrollY = window.scrollY
  
  // Set scrollStart once
  if (!scrollStart) {
    scrollStart = scrollY
  }
  
  // Calculate current scroll direction
  const dY = scrollY - prevScrollY
  scrollDirection = dY > 0 ? 'down' : dY < 0 ? 'up' : undefined

  // Set prevScrollY for use in next frame
  prevScrollY = scrollY
  
  notify({
    deltaY,
    scrollStart,
    scrollEnd,
    scrollDirection
  })
}

function onScroll(event) {
  if (!ticking) {
    requestAnimationFrame(() => {
      update()
      ticking = false
    })
    ticking = true
  }
}

function onScrollEnd(event) {
  scrollEnd = window.scrollY
  deltaY = scrollEnd - scrollStart 
  scrollStart = undefined
  
  notify({
    deltaY,
    scrollStart,
    scrollEnd,
    scrollDirection
  })
}

function start() {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener("scrollend", onScrollEnd, { passive: true })
  started = true
}

function stop() {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('scrollend', onScrollEnd)
  started = false
}

const scroll = { 
  subscribe(fn) {
    if (!started) {
      start()
    }
    subscribers.add(fn)
    
    fn({
      deltaY: 0,
      scrollStart: 0,
      scrollEnd: 0,
      scrollDirection
    })
    
    return () => {
      subscribers.delete(fn)
      if (subscribers.size === 0) {
        stop()
      }
    }
  }
}

export default scroll
