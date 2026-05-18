import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavAuraMark from './NavAuraMark'

const EASE = [0.22, 1, 0.36, 1]
const MIN_MS = 900

export default function BrandLoader({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    let frame

    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(1, elapsed / MIN_MS)
      setProgress(p)
      if (p < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)

    const done = () => {
      const wait = Math.max(0, MIN_MS - (Date.now() - start))
      setTimeout(() => {
        setVisible(false)
        onComplete?.()
      }, wait)
    }

    if (document.readyState === 'complete') done()
    else window.addEventListener('load', done)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('load', done)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="brand-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          aria-live="polite"
          aria-label="Loading"
        >
          <motion.div
            className="brand-loader-ambient"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <motion.div
            className="brand-loader-core"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="brand-loader-glass">
              <NavAuraMark size={72} animated strokeWidth={4.5} />
            </div>
            <p className="brand-loader-label">Nav.Aura</p>
            <p className="brand-loader-sub brand-tagline--gold">Innovation</p>
          </motion.div>
          <motion.div
            className="brand-loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress }}
            style={{ transformOrigin: 'left center' }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
