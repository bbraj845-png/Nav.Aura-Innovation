import { motion } from 'framer-motion'
import { PROCESS_CYCLE } from '../data/content'

const ARROW_PATHS = [
  'M 200 72 A 128 128 0 0 1 328 200',
  'M 328 200 A 128 128 0 0 1 200 328',
  'M 200 328 A 128 128 0 0 1 72 200',
  'M 72 200 A 128 128 0 0 1 200 72',
]

const NODE_POSITIONS = {
  top: { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },
  right: { top: '50%', right: '0%', transform: 'translate(0, -50%)' },
  bottom: { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' },
  left: { top: '50%', left: '0%', transform: 'translate(0, -50%)' },
}

export default function ProcessCycle() {
  return (
    <motion.div
      className="process-cycle"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <svg
        className="process-cycle-svg"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <defs>
          <linearGradient id="cycle-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6b37a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#d6b37a" stopOpacity="1" />
            <stop offset="100%" stopColor="#ead4a0" stopOpacity="0.5" />
          </linearGradient>
          <marker
            id="cycle-arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#d6b37a" />
          </marker>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="128"
          fill="none"
          stroke="rgba(214, 179, 122, 0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {ARROW_PATHS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#cycle-arrow-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            markerEnd="url(#cycle-arrowhead)"
            initial={{ pathLength: 0, opacity: 0.25 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              pathLength: { duration: 1.1, delay: 0.2 + i * 0.15, ease: 'easeInOut' },
              opacity: { duration: 0.5, delay: 0.2 + i * 0.15 },
            }}
          />
        ))}
        {ARROW_PATHS.map((d, i) => (
          <motion.path
            key={`flow-${i}`}
            className="process-cycle-flow"
            d={d}
            fill="none"
            stroke="#ead4a0"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength: 0.22 }}
            animate={{
              strokeDashoffset: [0, -280],
            }}
            transition={{
              duration: 2.8,
              delay: i * 0.7,
              repeat: Infinity,
              ease: 'linear',
            }}
            strokeDasharray="28 252"
          />
        ))}
      </svg>

      <div className="process-cycle-center" aria-hidden>
        <span className="process-cycle-center-label">Continuous</span>
        <span className="process-cycle-center-title">Cycle</span>
      </div>

      {PROCESS_CYCLE.map((step, i) => (
        <motion.div
          key={step.id}
          className={`process-cycle-node process-cycle-node--${step.position}`}
          style={NODE_POSITIONS[step.position]}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 220, damping: 20 }}
        >
          <span className="process-cycle-node-num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{step.label}</h3>
          <p>{step.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
