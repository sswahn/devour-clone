
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
  ctx.filter = style.filter || 'none'

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

  // Reset filter for overlays
  ctx.filter = 'none'

  // Draw border
  const borderThickness = 10
  ctx.lineWidth = borderThickness
  ctx.strokeStyle = borderColor
  ctx.strokeRect(
    borderThickness / 2,
    borderThickness / 2,
    canvasWidth - borderThickness,
    canvasHeight - borderThickness
  )

  // Draw text
  ctx.font = `bold ${fontSize}px sans-serif`
  ctx.fillStyle = 'white'
  ctx.shadowColor = 'black'
  ctx.shadowBlur = 6
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText(caption, canvasWidth / 2, canvasHeight - 20)

  // Output as Blob
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.92))
  return blob
}
