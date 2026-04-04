import { useRef, useCallback } from 'react'

export default function useSpeechChime() {
  const ctxRef = useRef(null)

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }

  const playTone = useCallback((freq, start = 0) => {
    const ctx = getCtx()
    const now = ctx.currentTime + start

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()

    osc1.type = 'sine'
    osc2.type = 'sine'

    // slight detune for richer UI sound
    osc1.frequency.setValueAtTime(freq * 0.98, now)
    osc2.frequency.setValueAtTime(freq * 1.02, now)

    // tiny pitch glide (Google-like polish)
    osc1.frequency.linearRampToValueAtTime(freq, now + 0.03)
    osc2.frequency.linearRampToValueAtTime(freq, now + 0.03)

    // envelope
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.linearRampToValueAtTime(0.35, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09)

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    osc1.start(now)
    osc2.start(now)

    osc1.stop(now + 0.1)
    osc2.stop(now + 0.1)
  }, [])

  const playStart = useCallback(() => {
    playTone(880, 0)
  }, [playTone])

  const playStop = useCallback(() => {
    playTone(880, 0)
    playTone(660, 0.12)
  }, [playTone])

  return { playStart, playStop }
}
