import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/content'

export default function ThankYou() {
  return (
    <main className="thank-you-page">
      <motion.div
        className="container thank-you-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle size={52} className="thank-you-icon" />
        <h1>Thank You</h1>
        <p>Your enquiry has been received. Our team will review it and get back to you within 24 hours.</p>
        <span className="gold">Expect a call from us shortly.</span>
        <motion.div className="thank-you-actions">
          <Link to="/" className="btn-outline">
            Back to Home
          </Link>
          <a href={WHATSAPP_LINK} className="btn-gold" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </motion.div>
    </main>
  )
}
