import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTABlock from '../components/CTABlock'
import { SERVICES, SERVICE_FILTERS } from '../data/content'
import SeoProse from '../components/SeoProse'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

export default function Services() {
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState(null)
  const filtered = filter === 'All' ? SERVICES : SERVICES.filter((s) => s.tag === filter)

  return (
    <main>
      <PageHero
        badge="What We Build"
        title="Services Engineered"
        titleAccent="for Scalable Growth"
        subtitle="Every service at Nav.Aura is part of an integrated growth ecosystem — not a one-off deliverable. We build systems that compound over time."
      />

      <section className="section filter-bar-section">
        <div className="container">
          <div className="filter-bar">
            {SERVICE_FILTERS.map((f) => (
              <button key={f} type="button" className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services-list">
          {filtered.map((service, i) => (
            <motion.article
              key={service.id}
              className={`service-accordion ${openId === service.id ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
            >
              <button type="button" className="service-accordion-header" onClick={() => setOpenId(openId === service.id ? null : service.id)}>
                <div className="service-accordion-meta">
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                </div>
                <ChevronDown size={20} className={`chevron ${openId === service.id ? 'rotated' : ''}`} />
              </button>
              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    className="service-accordion-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="service-accordion-grid">
                      <div>
                        <p>{service.desc}</p>
                        <p className="service-outcome">📈 {service.outcome}</p>
                      </div>
                      <div>
                        <h4>What You Get</h4>
                        <ul>
                          {service.deliverables.map((d) => (
                            <li key={d}>
                              <Check size={14} />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <Link to="/contact" className="btn-gold small">
                          Get This Service
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.services} links={INTERNAL_LINKS.services} />

      <CTABlock title="Not Sure Which Service You Need?" text="Book a strategy call. We'll diagnose your business and recommend the right systems." />
    </main>
  )
}
