// scrollEngine.js

let subscribers = new Set()
let started = false // Start engine once
let previousScrollY = window.scrollY
let previousTime = performance.now()
let velocity = 0
let ticking = false
const SMOOTHING = 0.2

function notify(data) {
  subscribers.forEach((fn) => fn(data))
}

function update() {
  const scrollY = window.scrollY
  const time = performance.now()
  const deltaY = scrollY - previousScrollY
  const deltaTime = Math.max(time - previousTime, 1) 
  const raw = deltaY / deltaTime
  velocity =  velocity * (1 - SMOOTHING) + raw * SMOOTHING
  const direction = velocity > 0 ? 'down' : velocity < 0 ? 'up' : 'idle'

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
  window.addEventListener('scroll', onScroll, { passive: true })
  started = true
}

function stop() {
  window.removeEventListener('scroll', onScroll)
  started = false
}

const scroll = { 
  subscribe(fn) {
    if (!started) {
      start()
    }
    subscribers.add(fn)
    return () => {
      subscribers.delete(fn)
      if (subscribers.size === 0) {
        stop()
      }
    }
  }
}

export default scroll
