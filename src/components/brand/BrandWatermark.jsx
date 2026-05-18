import { motion } from 'framer-motion'
import NavAuraMark from './NavAuraMark'

export default function BrandWatermark({ className = '' }) {
  return (
    <motion.div
      className={`brand-watermark ${className}`.trim()}
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <NavAuraMark size={280} strokeWidth={3} />
    </motion.div>
  )
}
