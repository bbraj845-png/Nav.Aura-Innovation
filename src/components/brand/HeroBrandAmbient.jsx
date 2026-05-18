import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import NavAuraMark from './NavAuraMark'

const EASE = [0.22, 1, 0.36, 1]

export default function HeroBrandAmbient() {
  const ref = useRef(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const x = useSpring(px, { stiffness: 40, damping: 18 })
  const y = useSpring(py, { stiffness: 40, damping: 18 })

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current?.closest('.hero')
      if (!el) return
      const r = el.getBoundingClientRect()
      px.set(((e.clientX - r.left) / r.width - 0.5) * 28)
      py.set(((e.clientY - r.top) / r.height - 0.5) * 20)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [px, py])

  return (
    <motion.div
      ref={ref}
      className="hero-brand-ambient"
      aria-hidden
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
      style={{ x, y }}
    >
      <motion.div
        className="hero-brand-ambient-glow"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-brand-ambient-glass"
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        <NavAuraMark size={200} strokeWidth={3.2} />
      </motion.div>
    </motion.div>
  )
}
