import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Heart, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTABlock from '../components/CTABlock'
import { PHILOSOPHY } from '../data/content'
import SeoProse from '../components/SeoProse'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

const philosophyIcons = [Target, Eye, Heart, Zap]

const FOUNDER_IMAGE = '/images/prince-pratap-singh.png'
const COFOUNDER_IMAGE = '/images/kaustuv-kumar-jha.png'

const FOUNDER_STORY = [
  'I grew up watching businesses around me — restaurants, shops, institutes — work incredibly hard but never truly scale. The founders were brilliant. Their ideas were solid. But their businesses were held together by sheer willpower and there was no system underneath.',
  "After years of working across branding, operations, and digital strategy, I realized the pattern. Businesses that thrived didn't have better founders — they had better systems. And most Indian businesses had none.",
  'Nav.Aura was born from that realization: that the gap between a struggling business and a scaling one is often just a set of well-built, well-documented operational systems.',
  'Today, Nav.Aura is not just a services company. It is a growth ecosystem — combining agency, technology, systems consulting, and AI integration — to become the most comprehensive business growth partner any founder could have.',
]

const COFOUNDER_STORY = [
  'My name is Kaustuv Kumar Jha, and my journey began with curiosity, observation, and a vision far bigger than myself.',
  'In 2020, while the world faced uncertainty, I found clarity. I became deeply focused on understanding innovation, leadership, business ecosystems, and the way ideas shape industries and people’s lives. I realized that countless individuals had talent and ambition, yet lacked the right guidance, opportunities, and systems to unlock their full potential.',
  'In 2022, I met my partner, Prince Pratap Singh. What began as powerful conversations about technology, entrepreneurship, and the future soon evolved into a shared mission—to build something meaningful, scalable, and driven by long-term impact.',
]

export default function About() {
  return (
    <main>
      <PageHero
        badge="Our Story"
        title="Built from the Pain of"
        titleAccent="Watching Businesses Fail"
        subtitle="Nav.Aura was not created to be another agency. It was created because there was a desperate need for a partner that builds the backbone of a business — not just its surface."
      />

      <section className="section">
        <motion.div className="container about-founder-grid">
          <motion.figure
            className="founder-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="founder-visual-inner" aria-label="Prince Pratap Singh">
              <img
                src={FOUNDER_IMAGE}
                alt="Prince Pratap Singh, Founder and CEO of Nav.Aura Innovation"
                className="founder-photo"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.figure>
          <motion.div
            className="founder-story"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Founder Journey</span>
            <h2 className="section-title left">From Watching Chaos to Building Systems</h2>
            <p className="founder-byline">
              <strong>Prince Pratap Singh</strong> — Founder &amp; CEO, Nav.Aura Innovation
            </p>
            {FOUNDER_STORY.map((para) => (
              <p key={para.slice(0, 40)} className="body-text">
                {para}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="section section--alt">
        <motion.div className="container about-founder-grid about-founder-grid--reverse">
          <motion.div
            className="founder-story"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Co-Founder Journey</span>
            <h2 className="section-title left">From Curiosity to a Shared Mission</h2>
            <p className="founder-byline">
              <strong>Kaustuv Kumar Jha</strong> — Co-Founder &amp; MD, Nav.Aura Innovation
            </p>
            {COFOUNDER_STORY.map((para) => (
              <p key={para.slice(0, 40)} className="body-text">
                {para}
              </p>
            ))}
            <blockquote className="founder-quote">
              <p>&ldquo;Failure is never final. But giving up on your fight is.&rdquo;</p>
              <cite>— A lesson from my father</cite>
            </blockquote>
            <p className="body-text">Every challenge strengthened discipline. Every setback sharpened vision.</p>
            <p className="body-text">
              In 2026, that vision became Nav.Aura Innovation—a growing community of innovators,
              creators, and entrepreneurs focused on building meaningful solutions, empowering ambitious
              minds, and shaping a smarter future together.
            </p>
            <p className="body-text founder-closing">
              We are not just building businesses.
              <br />
              <strong>We are building possibilities.</strong>
            </p>
          </motion.div>
          <motion.figure
            className="founder-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="founder-visual-inner" aria-label="Kaustuv Kumar Jha">
              <img
                src={COFOUNDER_IMAGE}
                alt="Kaustuv Kumar Jha, Co-Founder and MD of Nav.Aura Innovation"
                className="founder-photo founder-photo--cofounder"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.figure>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="section-title">What We Believe</h2>
          </div>
          <div className="philosophy-grid">
            {PHILOSOPHY.map((item, i) => {
              const Icon = philosophyIcons[i]
              return (
                <motion.article
                  key={item.title}
                  className="philosophy-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon size={24} className="icon-gold" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mission-banner">
        <div className="container center">
          <blockquote>
            &ldquo;By 2030, Nav.Aura will have systemized 10,000 Indian businesses — creating an ecosystem where every founder can scale without sacrificing their life, health, or freedom.&rdquo;
          </blockquote>
          <cite>— Long-term Mission</cite>
          <Link to="/contact" className="btn-gold">
            Join the Mission
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.about} links={INTERNAL_LINKS.about} />

      <CTABlock
        title="Ready to Build Your Systems?"
        text="Every transformation starts with one conversation."
      />
    </main>
  )
}
