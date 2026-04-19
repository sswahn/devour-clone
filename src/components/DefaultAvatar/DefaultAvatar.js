function createSeededRandom(seed = "default") {
  let h = 2166136261 >>> 0

  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }

  return function () {
    h += h << 13
    h ^= h >>> 7
    h += h << 3
    h ^= h >>> 17
    h += h << 5
    return (h >>> 0) / 4294967296
  }
}

function DefaultAvatar({ seed = "default", size = 200 }) {

  const rand = createSeededRandom(seed)

  const colors = [
    `hsl(${rand()*360},70%,60%)`,
    `hsl(${rand()*360},70%,55%)`,
    `hsl(${rand()*360},70%,50%)`,
    `hsl(${rand()*360},70%,45%)`
  ]

  const shapes = []

  // Grid system for better composition
  const grid = 4
  const cell = size / grid

  const rotations = [0, 45, 90]

  for (let i = 0; i < 6; i++) {

    const gx = Math.floor(rand() * grid)
    const gy = Math.floor(rand() * grid)

    const x = gx * cell
    const y = gy * cell

    const s = cell * (0.5 + rand() * 0.5)
    const color = colors[Math.floor(rand() * colors.length)]
    const type = Math.floor(rand() * 3)
    const rotation = rotations[Math.floor(rand() * rotations.length)]

    if (type === 0) {
      shapes.push(
        <circle
          key={i}
          cx={x + s/2}
          cy={y + s/2}
          r={s/2}
          fill={color}
          opacity="0.9"
        />
      )
    }

    if (type === 1) {
      shapes.push(
        <rect
          key={i}
          x={x}
          y={y}
          width={s}
          height={s}
          fill={color}
          transform={`rotate(${rotation} ${x + s/2} ${y + s/2})`}
        />
      )
    }

    if (type === 2) {
      const x1 = x + s / 2
      const y1 = y
      const x2 = x + s
      const y2 = y + s
      const x3 = x
      const y3 = y + s

      shapes.push(
        <polygon
          key={i}
          points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
          fill={color}
        />
      )
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill={colors[0]} />
      {shapes}
    </svg>
  )
}

export default DefaultAvatar
