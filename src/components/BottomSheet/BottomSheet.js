import { useEffect, useRef, useState } from 'react'

const SNAP_POINTS = {
  CLOSED: 0,
  PEEK: 0.25,
  HALF: 0.5,
  FULL: 0.9,
}

export default function BottomSheet({
  isOpen,
  onClose,
  initialSnap = 'PEEK',
  children,
}) {
  const sheetRef = useRef(null)
  const startY = useRef(0)
  const currentY = useRef(0)
  const [translateY, setTranslateY] = useState(0)
  const [dragging, setDragging] = useState(false)

  const vh = typeof window !== 'undefined' ? window.innerHeight : 0

  const getSnapHeight = (snap) => vh * (1 - SNAP_POINTS[snap])

  const snapTo = (snap) => {
    const target = getSnapHeight(snap)
    setTranslateY(target)
  }

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      snapTo(initialSnap)
    } else {
      document.body.style.overflow = ''
      setTranslateY(vh)
    }
    return () => (document.body.style.overflow = '')
  }, [isOpen])

  // Touch handlers
  const onTouchStart = (e) => {
    setDragging(true)
    startY.current = e.touches[0].clientY
  }

  const onTouchMove = (e) => {
    if (!dragging) return
    const delta = e.touches[0].clientY - startY.current
    currentY.current = Math.max(0, translateY + delta)
    setTranslateY(currentY.current)
    startY.current = e.touches[0].clientY
  }

  const onTouchEnd = () => {
    setDragging(false)

    const snapPoints = Object.entries(SNAP_POINTS).map(([key, val]) => ({
      key,
      value: vh * (1 - val),
    }))

    // Find closest snap
    const closest = snapPoints.reduce((prev, curr) =>
      Math.abs(curr.value - currentY.current) <
      Math.abs(prev.value - currentY.current)
        ? curr
        : prev
    )

    if (closest.key === 'CLOSED') {
      onClose()
    } else {
      snapTo(closest.key)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 999,
        }}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          height: '90vh',
          background: '#fff',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          transform: `translateY(${translateY}px)`,
          transition: dragging ? 'none' : 'transform 0.25s ease',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          touchAction: 'none',
        }}
      >
        {/* Handle */}
        <div
          style={{
            width: 40,
            height: 5,
            background: '#ccc',
            borderRadius: 999,
            alignSelf: 'center',
            margin: '10px 0',
          }}
        />

        {/* Content */}
        <div
          style={{
            overflowY: 'auto',
            flex: 1,
            padding: 16,
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
