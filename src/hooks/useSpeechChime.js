import { useRef, useCallback } from 'react'

export default function useSpeechChime() {
  const ctxRef = useRef(null)

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }

  const tone = useCallback((freq, delay = 0) => {
    const ctx = getCtx()
    const start = ctx.currentTime + delay

    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()

    osc1.type = 'sine'
    osc2.type = 'sine'

    osc1.frequency.setValueAtTime(freq * 0.99, start)
    osc2.frequency.setValueAtTime(freq * 1.01, start)

    osc1.frequency.linearRampToValueAtTime(freq, start + 0.02)
    osc2.frequency.linearRampToValueAtTime(freq, start + 0.02)

    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.linearRampToValueAtTime(0.35, start + 0.008)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.085)

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    osc1.start(start)
    osc2.start(start)

    osc1.stop(start + 0.09)
    osc2.stop(start + 0.09)
  }, [])

  const playStart = useCallback(() => {
    tone(1046)
  }, [tone])

  const playStop = useCallback(() => {
    tone(1046)
    tone(784, 0.12)
  }, [tone])

  return { playStart, playStop }
}
