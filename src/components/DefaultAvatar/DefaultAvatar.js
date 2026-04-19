function DefaultAvatar({ seed = "user", size = 48 }) {

  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }

  const hue = hash % 360
  const color = `hsl(${hue}, 60%, 55%)`

  const cells = []
  const grid = 5
  const cell = size / grid

  for (let x = 0; x < Math.ceil(grid / 2); x++) {
    for (let y = 0; y < grid; y++) {
      const bit = (hash >> (x * y)) & 1

      if (bit) {
        cells.push(
          <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={color} />,
          <rect key={`${x}-${y}-m`} x={(grid - x - 1) * cell} y={y * cell} width={cell} height={cell} fill={color} />
        )
      }
    }
  }

  return (
    <svg width={size} height={size}>
      <rect width="100%" height="100%" fill="#eee" />
      {cells}
    </svg>
  )
}

export default DefaultAvatar
