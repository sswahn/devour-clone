// scrollEngine.js

let subscribers = new Set()

let lastScrollY = window.scrollY
let lastTime = performance.now()
let velocity = 0

let ticking = false

const SMOOTHING = 0.2

function computeVelocity(deltaY, deltaTime, prevVelocity) {
  const raw = deltaTime > 16 ? deltaY / deltaTime : 0
  return prevVelocity * (1 - SMOOTHING) + raw * SMOOTHING
}

function notify(data) {
  subscribers.forEach((fn) => fn(data))
}

function update() {
  const currentScrollY = window.scrollY
  const currentTime = performance.now()

  const deltaY = currentScrollY - lastScrollY
  const deltaTime = currentTime - lastTime

  velocity = computeVelocity(deltaY, deltaTime, velocity)

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

// Start engine once
let started = false

function start() {
  if (started) {
    return
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  started = true
}

function stop() {
  window.removeEventListener('scroll', onScroll)
  started = false
}

export function subscribe(fn) {
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
