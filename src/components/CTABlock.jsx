import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTABlock({ title, text, button = 'Book Your Strategy Call', to = '/contact' }) {
  return (
    <section className="cta-block">
      <div className="container cta-block-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>{title}</h2>
          {text && <p>{text}</p>}
          <Link to={to} className="btn-gold">
            {button}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
