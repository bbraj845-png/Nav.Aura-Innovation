import { useId } from 'react'
import { motion } from 'framer-motion'

/**
 * Premium N — crisp stems, beveled forward facets (left bottom, right top).
 */
function BrandN({ grad, gradBright, gradFacet, glow, strokeWidth }) {
  const sw = strokeWidth
  const lx = 37
  const rx = 63
  const top = 31.5
  const bottom = 68.5

  return (
    <g className="nav-aura-mark-n-premium">
      <circle
        className="nav-aura-mark-ring"
        cx="50"
        cy="50"
        r="42"
        stroke={`url(#${grad})`}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeDasharray="218 48"
        strokeDashoffset="22"
        opacity="0.9"
      />

      {/* Main letterform */}
      <path
        className="nav-aura-mark-n"
        d={`M ${lx} ${top} L ${lx} 64.2 M ${rx} 34.8 L ${rx} ${bottom} M ${lx} ${top} L ${rx} ${bottom}`}
        stroke={`url(#${grad})`}
        strokeWidth={sw}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        filter={`url(#${glow})`}
      />

      {/* Left stem — thick facet at bottom, sweeps opposite to right (down-left) */}
      <g className="nav-aura-mark-facet nav-aura-mark-facet--left">
        <path
          d={`M ${lx} 64.2 L 21.5 77.5 L 32.2 69.2 Z`}
          fill={`url(#${gradFacet})`}
          stroke={`url(#${grad})`}
          strokeWidth="1.05"
          strokeLinejoin="miter"
        />
        <path
          className="nav-aura-mark-facet-shine"
          d={`M ${lx} 64.2 L 21.5 77.5`}
          stroke={`url(#${gradBright})`}
          strokeWidth={sw * 0.5}
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.9"
        />
      </g>

      {/* Right stem — thick facet at top, sweeps up-right */}
      <g className="nav-aura-mark-facet nav-aura-mark-facet--right">
        <path
          d={`M ${rx} 34.8 L 78.5 21.5 L 67.8 30.8 Z`}
          fill={`url(#${gradFacet})`}
          stroke={`url(#${grad})`}
          strokeWidth="1.05"
          strokeLinejoin="miter"
        />
        <path
          className="nav-aura-mark-facet-shine"
          d={`M ${rx} 34.8 L 78.5 21.5`}
          stroke={`url(#${gradBright})`}
          strokeWidth={sw * 0.5}
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.9"
        />
      </g>

      {/* Stem terminals — crisp end caps where facets don't cover */}
      <path
        d={`M ${lx} ${top} L 33.2 ${top}`}
        stroke={`url(#${grad})`}
        strokeWidth={sw * 0.55}
        strokeLinecap="square"
        opacity="0.9"
      />
      <path
        d={`M ${rx} ${bottom} L 66.8 ${bottom}`}
        stroke={`url(#${grad})`}
        strokeWidth={sw * 0.55}
        strokeLinecap="square"
        opacity="0.9"
      />

      {/* Diagonal light catch */}
      <path
        className="nav-aura-mark-diagonal-shine"
        d={`M ${lx + 2} ${top + 2} L ${rx - 2} ${bottom - 2}`}
        stroke={`url(#${gradBright})`}
        strokeWidth={sw * 0.18}
        strokeLinecap="round"
        opacity="0.45"
      />
    </g>
  )
}

export default function NavAuraMark({
  size = 48,
  className = '',
  animated = false,
  strokeWidth = 4.2,
}) {
  const uid = useId().replace(/:/g, '')
  const grad = `brandGrad-${uid}`
  const gradBright = `brandGradBright-${uid}`
  const gradFacet = `brandGradFacet-${uid}`
  const glow = `brandGlow-${uid}`

  const mark = (
    <motion.div
      className={`nav-aura-mark ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <svg
        className="nav-aura-mark-svg"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={grad} x1="18%" y1="10%" x2="82%" y2="92%">
            <stop offset="0%" stopColor="#faf6ee" />
            <stop offset="32%" stopColor="#e8c98f" />
            <stop offset="68%" stopColor="#d6b37a" />
            <stop offset="100%" stopColor="#8f7040" />
          </linearGradient>
          <linearGradient id={gradBright} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#fff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={gradFacet} x1="20%" y1="15%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#fff9f0" />
            <stop offset="40%" stopColor="#e2c992" />
            <stop offset="100%" stopColor="#a8844f" />
          </linearGradient>
          <filter id={glow} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <BrandN
          grad={grad}
          gradBright={gradBright}
          gradFacet={gradFacet}
          glow={glow}
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  )

  if (!animated) return mark

  return (
    <motion.div
      className="nav-aura-mark-animated"
      animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      {mark}
    </motion.div>
  )
}
