export default function getRelativeTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffInSeconds = Math.round((date - now) / 1000)
  const absSeconds = Math.abs(diffInSeconds)

  // 1. If more than 30 days, return a standard date (e.g., "Oct 12, 2023")
  if (absSeconds > 2592000) {
    return new Intl.DateTimeFormat(navigator.language, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date)
  }

  // 2. Otherwise, find the best relative unit
  const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: 'auto' })
  
  const units = [
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ]

  for (const { unit, seconds } of units) {
    if (absSeconds >= seconds || unit === 'second') {
      return rtf.format(Math.floor(diffInSeconds / seconds), unit)
    }
  }
}

// Clean usage in your feed:
// <span>{getRelativeTime(post.createdAt)}</span>
