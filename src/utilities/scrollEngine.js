// scrollEngine.js

let subscribers = new Set()
let started = false // Start engine once
let lastScrollY = window.scrollY
let lastTime = performance.now()
let velocity = 0
let ticking = false
const SMOOTHING = 0.2

function notify(data) {
  subscribers.forEach((fn) => fn(data))
}

function update() {
  const currentScrollY = window.scrollY
  const currentTime = performance.now()
  const deltaY = currentScrollY - lastScrollY
  const deltaTime = Math.max(currentTime - lastTime, 1) 
  const raw = deltaY / deltaTime
  velocity =  velocity * (1 - SMOOTHING) + raw * SMOOTHING
  const direction = velocity > 0 ? 'down' : velocity < 0 ? 'up' : 'idle'

  notify({
    scrollY: currentScrollY,
    deltaY,
    velocity,
    direction,
    time: currentTime,
  })

  lastScrollY = currentScrollY
  lastTime = currentTime
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
