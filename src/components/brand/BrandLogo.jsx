import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import NavAuraMark from './NavAuraMark'

const EASE = [0.22, 1, 0.36, 1]

const MARK_SIZE = { header: 38, 'header-compact': 32, footer: 36, icon: 48 }
const MARK_STROKE = { header: 4.2, 'header-compact': 3.8, footer: 4.2, icon: 4.4 }

function BrandName({ footer = false }) {
  return (
    <span className={`brand-name ${footer ? 'brand-name--footer' : ''}`.trim()}>
      <span className="brand-letter-n">N</span>av<span className="brand-dot">.</span>Aura
    </span>
  )
}

function BrandWordmark({ footer = false }) {
  return (
    <span className={`brand-wordmark brand-wordmark--stacked ${footer ? 'brand-wordmark--footer' : ''}`.trim()}>
      <BrandName footer={footer} />
      <span className={`brand-tagline brand-tagline--gold ${footer ? 'brand-tagline--footer' : ''}`.trim()}>
        Innovation
      </span>
    </span>
  )
}

/**
 * Premium integrated brand lockup.
 * @param {'header' | 'header-compact' | 'footer' | 'icon'} variant
 */
export default function BrandLogo({ variant = 'header', className = '' }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 24 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 24 })

  const isIcon = variant === 'icon'
  const isFooter = variant === 'footer'
  const enableTilt = variant === 'header' || isIcon
  const markSize = MARK_SIZE[variant] ?? 38
  const markStroke = MARK_STROKE[variant] ?? 4.2

  const onMove = (e) => {
    if (!enableTilt) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      style={enableTilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <motion.div className="brand-logo-mark">
        <NavAuraMark size={markSize} strokeWidth={markStroke} />
      </motion.div>
      {!isIcon && <BrandWordmark footer={isFooter} />}
    </motion.div>
  )
}
