import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { INDUSTRIES } from '../data/content'
import SeoProse from '../components/SeoProse'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

export default function Industries() {
  return (
    <main>
      <PageHero
        badge="Industries We Serve"
        title="Systems Work in"
        titleAccent="Every Industry"
        subtitle="The problems may look different. The solutions follow the same proven framework. Nav.Aura has built operational systems for 8 industries — and counting."
      />

      <section className="section">
        <div className="container industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.article
              key={ind.title}
              className="industry-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <div className="industry-block">
                <h4>Common Challenges</h4>
                {ind.challenges.map((c) => (
                  <p key={c} className="challenge-item">
                    <span className="dash-red" />
                    {c}
                  </p>
                ))}
              </div>
              <div className="industry-block">
                <h4>What We Build</h4>
                {ind.solutions.map((s) => (
                  <p key={s} className="solution-item">
                    <Check size={12} />
                    {s}
                  </p>
                ))}
              </div>
              <p className="industry-stat">📈 {ind.stat}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.industries} links={INTERNAL_LINKS.industries} />

      <section className="cta-block">
        <div className="container cta-block-inner">
          <h2>Don&apos;t See Your Industry Listed?</h2>
          <p>Systems thinking applies to every business. If you have a business, we can build the systems that help it scale.</p>
          <Link to="/contact" className="btn-gold">
            Enquire for Your Industry
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
