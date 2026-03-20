// scrollEngine.js

let subscribers = new Set()
let started = false // Start engine once
let prevScrollY = window.scrollY
let prevTime = performance.now()
let prevVelocity = 0
let ticking = false
const SMOOTHING = 0.35

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
  const velocity =  prevVelocity * (1 - SMOOTHING) + raw * SMOOTHING
  const acceleration = (velocity - prevVelocity) / deltaTime
  const isScrolling = Math.abs(deltaY) > 0.5
  const direction = deltaY > 0 ? 'down' : deltaY < 0 ? 'up' : 'idle'
  
  notify({
    acceleration,
    deltaY,
    direction,
    isScrolling,
    scrollY,
    time,
    velocity
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
      acceleration: 0,
      deltaY: 0,
      direction: 'idle',
      isScrolling: false,
      scrollY: prevScrollY,
      time: prevTime,
      velocity: prevVelocity
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
