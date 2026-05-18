import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTABlock from '../components/CTABlock'
import { CASE_STUDIES } from '../data/content'

export default function CaseStudies() {
  const [active, setActive] = useState(CASE_STUDIES[0].id)
  const study = CASE_STUDIES.find((s) => s.id === active)

  return (
    <main>
      <PageHero
        badge="Transformation Stories"
        title="Real Businesses."
        titleAccent="Real Results."
        subtitle="Every case study represents a founder who chose systems over chaos — and built a business that scales."
      />

      <section className="section">
        <div className="container">
          <div className="case-tabs">
            {CASE_STUDIES.map((s) => (
              <button key={s.id} type="button" className={active === s.id ? 'active' : ''} onClick={() => setActive(s.id)}>
                <span>{s.client}</span>
                <small>{s.industry}</small>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {study && (
              <motion.article
                key={study.id}
                className="case-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <header className="case-header">
                  <span className="case-industry">{study.industry} · {study.type}</span>
                  <h2>{study.client}</h2>
                  <p className="case-tagline">{study.tagline}</p>
                  <span className="case-duration">Duration: {study.duration}</span>
                </header>

                <div className="case-grid">
                  <div className="case-before">
                    <h3>The Chaos</h3>
                    <ul>
                      {study.before.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-systems">
                    <h3>What We Built</h3>
                    <ul>
                      {study.systems.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-results">
                  {study.results.map((r) => (
                    <div key={r.label} className="case-result-card">
                      <span className="result-value">{r.value}</span>
                      <span className="result-label">{r.label}</span>
                      <span className="result-sub">{r.sub}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="case-quote">
                  <p>&ldquo;{study.quote}&rdquo;</p>
                  <cite>— {study.quotePerson}</cite>
                </blockquote>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTABlock
        title="Your Transformation Story Starts Here"
        text="Every case study above started with one conversation. Let's start yours."
        button="Book Strategy Call"
      />
    </main>
  )
}
