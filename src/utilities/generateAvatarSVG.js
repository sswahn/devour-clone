export default function generateAvatarSVG(seed, size = 200) {

  const rand = createSeededRandom(seed)

  const colors = [
    `hsl(${rand()*360},70%,60%)`,
    `hsl(${rand()*360},70%,55%)`,
    `hsl(${rand()*360},70%,50%)`,
    `hsl(${rand()*360},70%,45%)`
  ]

  const shapes = []

  for (let i = 0; i < 6; i++) {

    const x = rand() * size
    const y = rand() * size
    const s = rand() * size * .5
    const color = colors[Math.floor(rand()*colors.length)]

    const type = Math.floor(rand()*3)

    if (type === 0) {
      shapes.push(
        `<circle cx="${x}" cy="${y}" r="${s/2}" fill="${color}" opacity=".9"/>`
      )
    }

    if (type === 1) {
      shapes.push(
        `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${color}" transform="rotate(${rand()*360} ${x} ${y})"/>`
      )
    }

    if (type === 2) {
      const x2 = x + rand()*s
      const y2 = y + rand()*s
      const x3 = x - rand()*s
      const y3 = y + rand()*s

      shapes.push(
        `<polygon points="${x},${y} ${x2},${y2} ${x3},${y3}" fill="${color}" />`
      )
    }
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="100%" height="100%" fill="${colors[0]}" />
    ${shapes.join("")}
  </svg>`
}
