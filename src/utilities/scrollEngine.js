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
  const direction = velocity > 0 ? 'down' : velocity < 0 ? 'up' : 'idle'
  const acceleration = (velocity - previousVelocity) / deltaTime
  previousVelocity = velocity

  notify({
    scrollY,
    deltaY,
    velocity,
    direction,
    time,
  })

  previousScrollY = scrollY
  previousTime = time
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


subscribe(fn) {
  if (!started) start()
  subscribers.add(fn)

  // immediate sync
  fn({
    scrollY: previousScrollY,
    deltaY: 0,
    velocity,
    direction: 'idle',
    time: previousTime,
  })

  return () => { ... }
}

const scroll = { 
  subscribe(fn) {
    if (!started) {
      start()
    }
    subscribers.add(fn)
    
    // immediate sync
    fn({
      scrollY: previousScrollY,
      deltaY: 0,
      velocity,
      direction: 'idle',
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
