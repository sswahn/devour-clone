
export const convertMedia = async (mediaElement, {
  caption = '',
  fontWeight = 'normal',
  fontStyle = 'normal',
  textDecoration = 'none',
  fontSize = 14,
  textAlign = 'left',
  fontColor = '#ffffff',
  stroke = 0,
  strokeColor = '#000000',
  borderTop = 'none',
  borderRight = 'none',
  borderBottom = 'none',
  borderLeft = 'none',
  filter = 'none'
} = {}) => {
  

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  const isVideo = mediaElement instanceof HTMLVideoElement
  const mediaWidth = isVideo ? mediaElement.videoWidth : mediaElement.naturalWidth
  const mediaHeight = isVideo ? mediaElement.videoHeight : mediaElement.naturalHeight

  canvas.width = mediaWidth // rect.width
  canvas.height = mediaHeight // rect.height

  // Apply CSS filters
  ctx.filter = filter

  const canvasWidth = canvas.width
  const canvasHeight = canvas.height

  // Draw media at full native size (no cropping/scaling)
  ctx.drawImage(mediaElement, 0, 0)

  // Draw border
  const borderSize = 4 // customizable

  if (borderTop !== 'none') {
    ctx.fillStyle = borderTop
    ctx.fillRect(0, 0, canvasWidth, borderSize)
  }
  
  if (borderRight !== 'none') {
    ctx.fillStyle = borderRight
    ctx.fillRect(canvasWidth - borderSize, 0, borderSize, canvasHeight)
  }
  
  if (borderBottom !== 'none') {
    ctx.fillStyle = borderBottom
    ctx.fillRect(0, canvasHeight - borderSize, canvasWidth, borderSize)
  }
  
  if (borderLeft !== 'none') {
    ctx.fillStyle = borderLeft
    ctx.fillRect(0, 0, borderSize, canvasHeight)
  }

  // Get text alignment
  const padding = 10 // consistent margin from edge
  let x
  if (textAlign === 'left') {
    x = padding
  } else if (textAlign === 'right') {
    x = canvasWidth - padding
  } else {
    x = canvasWidth / 2
  }
  
  // Draw text
  ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px sans-serif`
  ctx.textAlign = textAlign 
  ctx.textBaseline = 'bottom'
 // ctx.shadowColor = 'black'
 // ctx.shadowBlur = 6

  // Auto wrap + \n support
  const maxTextWidth = canvasWidth - 2 * padding
  const lines = []

  const paragraphs = caption.split('\n')
  paragraphs.forEach(paragraph => {
    const words = paragraph.split(/\s+/)
    let currentLine = ''
    for (let word of words) {
      const testLine = currentLine ? currentLine + ' ' + word : word
      const { width: testWidth } = ctx.measureText(testLine)
      if (testWidth <= maxTextWidth) {
        currentLine = testLine
      } else {
        if (currentLine) lines.push(currentLine)
        currentLine = word
      }
    }
    if (currentLine) lines.push(currentLine)
  })

  const lineSpacing = 4
  const captionPadding = 20
  const totalHeight = lines.length * (fontSize + lineSpacing) - lineSpacing
  const baseY = canvasHeight - captionPadding // - totalHeight + fontSize

  lines.forEach((line, i) => {
    const y = baseY + i * (fontSize + lineSpacing)
    if (stroke > 0) {
      ctx.lineWidth = stroke
      ctx.strokeStyle = strokeColor
      ctx.strokeText(line, x, y)
    }
    ctx.fillStyle = fontColor
    ctx.fillText(line, x, y)
  })

  console.log({ mediaWidth, mediaHeight, canvasWidth: canvas.width, canvasHeight: canvas.height }) // debug log in convertMedia
  
  // Output as Blob
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 1.0))
  return blob
}
