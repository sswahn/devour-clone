// scrollEngine.js

let subscribers = new Set()
let started = false // Start engine once
let prevScrollY = window.scrollY
let prevTime = performance.now()
let prevVelocity = 0
let velocity = 0
let ticking = false
const SMOOTHING = 0.35
const IDLE_THRESHOLD = 0.02

function notify(data) {
  for (const fn of subscribers) {
    fn(data)
  }
}

function update() {
  const scrollY = window.scrollY
  const time = performance.now()
  const deltaY = scrollY - prevScrollY
  const deltaTime = Math.max(time - prevTime, 1) 
  const raw = deltaY / deltaTime
  velocity =  velocity * (1 - SMOOTHING) + raw * SMOOTHING
  const acceleration = (velocity - prevVelocity) / deltaTime
  prevVelocity = velocity
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

  prevScrollY = scrollY
  prevTime = time
  prevVelocity = velocity
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
      scrollY: prevScrollY,
      deltaY: 0,
      velocity,
      acceleration: 0,
      direction: 'idle',
      isScrolling: false,
      isIdle: true,
      time: prevTime,
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
