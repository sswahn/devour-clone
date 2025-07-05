
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
  const rect = mediaElement.getBoundingClientRect()
  const style = getComputedStyle(mediaElement)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = rect.width
  canvas.height = rect.height

  // Apply CSS filters
  ctx.filter = filter

  const fit = style.objectFit || 'fill'
  const isVideo = mediaElement instanceof HTMLVideoElement

  const mediaWidth = isVideo ? mediaElement.videoWidth : mediaElement.naturalWidth
  const mediaHeight = isVideo ? mediaElement.videoHeight : mediaElement.naturalHeight
  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  const mediaRatio = mediaWidth / mediaHeight
  const canvasRatio = canvasWidth / canvasHeight

  // Draw media based on object-fit
  if (fit === 'contain') {
    const scale = Math.min(canvasWidth / mediaWidth, canvasHeight / mediaHeight)
    const drawWidth = mediaWidth * scale
    const drawHeight = mediaHeight * scale
    const dx = (canvasWidth - drawWidth) / 2
    const dy = (canvasHeight - drawHeight) / 2
    ctx.drawImage(mediaElement, 0, 0, mediaWidth, mediaHeight, dx, dy, drawWidth, drawHeight)
  } else {
    // Default to "cover"
    let sx = 0, sy = 0, sw = mediaWidth, sh = mediaHeight

    if (canvasRatio > mediaRatio) {
      sh = mediaWidth / canvasRatio
      sy = (mediaHeight - sh) / 2
    } else {
      sw = mediaHeight * canvasRatio
      sx = (mediaWidth - sw) / 2
    }

    ctx.drawImage(mediaElement, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight)
  }

  // Draw border
  const borderThickness = 10
  ctx.lineWidth = borderThickness
  ctx.strokeStyle =  'red' //borderColor
  ctx.strokeRect(
    borderThickness / 2,
    borderThickness / 2,
    canvasWidth - borderThickness,
    canvasHeight - borderThickness
  )

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
  const baseY = canvasHeight - captionPadding - totalHeight + fontSize

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

  // Output as Blob
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.92))
  return blob
}
