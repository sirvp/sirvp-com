import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
  const springX = useSpring(x, { stiffness: 60, damping: 22 })
  const springY = useSpring(y, { stiffness: 60, damping: 22 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: springX,
        top: springY,
        x: '-50%',
        y: '-50%',
        width: 640,
        height: 640,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,151,90,0.065) 0%, transparent 68%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
