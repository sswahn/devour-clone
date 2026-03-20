// scrollEngine.js

let subscribers = new Set()
let started = false // Start engine once
let previousScrollY = window.scrollY
let previousTime = performance.now()
let previousVelocity = 0
let velocity = 0
let ticking = false
const SMOOTHING = 0.2

function notify(data) {
  for (const fn of subscribers) {
    fn(data)
  }
}

function update() {
  const scrollY = window.scrollY
  const time = performance.now()
  const deltaY = scrollY - previousScrollY
  const deltaTime = Math.max(time - previousTime, 1) 
  const raw = deltaY / deltaTime
  velocity =  velocity * (1 - SMOOTHING) + raw * SMOOTHING
  const acceleration = (velocity - previousVelocity) / deltaTime
  previousVelocity = velocity
  const isScrolling = Math.abs(deltaY) > 0.5
  const isIdle = Math.abs(velocity) < IDLE_THRESHOLD
  // const direction = velocity > 0 ? 'down' : velocity < 0 ? 'up' : 'idle'
  const direction = deltaY > 0 ? 'down' : deltaY < 0 ? 'up' : 'idle'
  
  notify({
    scrollY,
    deltaY,
    velocity,
    acceleration,
    direction,
    isScrolling,
    isIdle,
    time
  })

  previousScrollY = scrollY
  previousTime = time
  previousVelocity = velocity
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      update()
      ticking = false
    })
    ticking = true
  }
}

function start() {
  if (!started) {
    window.addEventListener('scroll', onScroll, { passive: true })
    started = true
  }
}

function stop() {
  if (started) {
    window.removeEventListener('scroll', onScroll)
    started = false
  }
}

const scroll = { 
  subscribe(fn) {
    if (!started) {
      start()
    }
    subscribers.add(fn)
    
    fn({
      scrollY: previousScrollY,
      deltaY: 0,
      velocity,
      acceleration: 0,
      direction: 'idle',
      isScrolling: false,
      isIdle: true,
      time: previousTime,
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
