/**
 * Formats a timestamp into a human-readable relative string.
 * Switches to absolute date after 30 days.
 * @param {number|Date} input - The date or timestamp to format
 * @param {string} locale - User's locale (defaults to navigator.language)
 */
export default function formatRelativeTime(input, locale = navigator?.language || 'en') {
  const date = input instanceof Date ? input : new Date(input)
  const now = new Date()
  const diffInSeconds = Math.floor((date - now) / 1000)
  const diffInDays = Math.abs(Math.floor(diffInSeconds / 86400))

  // Best practice: switch to absolute date after 30 days
  if (diffInDays > 30) {
    return new Intl.DateTimeFormat(locale, { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }).format(date)
  }

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  
  const units = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ]

  for (const { unit, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds || unit === 'second') {
      return rtf.format(Math.floor(diffInSeconds / seconds), unit)
    }
  }
}

// Examples:
console.log(formatRelativeTime(Date.now() - 300000)) // "5 minutes ago"
console.log(formatRelativeTime(Date.now() - 86400000)) // "yesterday"
console.log(formatRelativeTime(Date.now() - 35 * 86400000)) // "Mar 9, 2026" (Absolute date)
