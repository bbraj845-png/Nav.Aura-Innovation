import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { INSIGHTS, INSIGHT_CATEGORIES } from '../data/content'
import SeoProse from '../components/SeoProse'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

export default function Insights() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? INSIGHTS : INSIGHTS.filter((a) => a.category === category)
  const featured = filtered.find((a) => a.featured)
  const rest = filtered.filter((a) => !a.featured)

  return (
    <main>
      <PageHero
        badge="Insights"
        title="Systems Thinking"
        titleAccent="for Founders"
        subtitle="Practical frameworks, strategies, and lessons from building systems for 120+ businesses across India."
      />

      <section className="section filter-bar-section">
        <div className="container">
          <div className="filter-bar">
            {INSIGHT_CATEGORIES.map((c) => (
              <button key={c} type="button" className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {featured && (
            <motion.article className="insight-featured" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="insight-cat">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="insight-meta">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
            </motion.article>
          )}

          <div className="insights-grid">
            {rest.map((article, i) => (
              <motion.article
                key={article.title}
                className="insight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="insight-cat">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="insight-meta">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.insights} links={INTERNAL_LINKS.insights} />
    </main>
  )
}
