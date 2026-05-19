import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTABlock from '../components/CTABlock'
import { ECOSYSTEM_ARMS, ECOSYSTEM_FLOW } from '../data/content'
import SeoProse from '../components/SeoProse'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

export default function Ecosystem() {
  const [active, setActive] = useState('agency')
  const arm = ECOSYSTEM_ARMS.find((a) => a.id === active)

  return (
    <main>
      <PageHero
        badge="The Ecosystem"
        title="One Ecosystem."
        titleAccent="Complete Business Transformation."
        subtitle="Nav.Aura is not one service. It's four interconnected divisions working together to transform every dimension of your business — from brand to operations to technology to growth."
      />

      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">The Transformation Flow</h2>
            <p className="section-subtitle">Each arm builds on the previous one — compounding your growth at every stage.</p>
          </div>
          <div className="ecosystem-flow">
            {ECOSYSTEM_FLOW.map((step, i) => (
              <motion.div
                key={step.step}
                className="flow-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="flow-num">{step.step}</span>
                <span className="flow-arm">{step.arm}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < ECOSYSTEM_FLOW.length - 1 && <ChevronRight className="flow-arrow" size={20} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Four Arms. One Mission.</h2>
          </div>
          <div className="ecosystem-tabs">
            {ECOSYSTEM_ARMS.map((a) => (
              <button
                key={a.id}
                type="button"
                className={active === a.id ? 'active' : ''}
                style={{ '--arm-color': a.color }}
                onClick={() => setActive(a.id)}
              >
                {a.title}
              </button>
            ))}
          </div>
          {arm && (
            <motion.article
              key={arm.id}
              className="ecosystem-detail"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ borderColor: `${arm.color}40` }}
            >
              <span className="ecosystem-subtitle" style={{ color: arm.color }}>
                {arm.subtitle}
              </span>
              <h3>{arm.title}</h3>
              <p className="body-text">{arm.desc}</p>
              <div className="ecosystem-services">
                {arm.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="ecosystem-blocks">
                <div>
                  <h4>Flow</h4>
                  <p>{arm.flow}</p>
                </div>
                <div>
                  <h4>Impact</h4>
                  <p>{arm.impact}</p>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.ecosystem} links={INTERNAL_LINKS.ecosystem} />

      <section className="mission-banner">
        <div className="container center">
          <h2 className="section-title">Ready for the Full Ecosystem?</h2>
          <p className="section-subtitle">Most clients engage with all four arms over 4–6 months for complete transformation.</p>
          <Link to="/contact" className="btn-gold">
            Start My Ecosystem Journey
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
