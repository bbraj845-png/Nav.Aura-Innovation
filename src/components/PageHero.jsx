import { motion } from 'framer-motion'

export default function PageHero({ badge, title, titleAccent, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />
      <div className="container page-hero-inner">
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="gold">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  )
}
