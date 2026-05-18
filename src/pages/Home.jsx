import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Quote,
  Star,
  Target,
  Layers,
  Zap,
  TrendingUp,
  UserCircle,
  Network,
  AlertTriangle,
  TrendingDown,
  Clock,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProcessCycle from '../components/ProcessCycle'
import {
  VALUE_PROPS,
  PROBLEM_CARDS,
  FRAMEWORK_PILLARS,
  JOURNEY_STEPS,
  BEFORE_ITEMS,
  AFTER_ITEMS,
  PROCESS_STEPS,
  TESTIMONIALS,
  HOME_STATS,
} from '../data/content'

const HERO_IMAGE = '/images/hero-crystal.jpeg'
const problemIcons = [UserCircle, Network, AlertTriangle, TrendingDown, Clock]
const pillarIcons = [Target, Layers, Zap, TrendingUp]

function HeroOrbits() {
  return (
    <svg className="hero-orbits" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <circle cx="720" cy="440" r="190" fill="none" stroke="rgba(214,179,122,0.10)" strokeWidth="0.6" />
      <circle cx="720" cy="440" r="280" fill="none" stroke="rgba(140,165,205,0.08)" strokeWidth="0.6" />
      <circle cx="720" cy="440" r="380" fill="none" stroke="rgba(214,179,122,0.07)" strokeWidth="0.5" />
      <circle cx="720" cy="440" r="490" fill="none" stroke="rgba(140,165,205,0.05)" strokeWidth="0.5" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <img src={HERO_IMAGE} alt="" className="hero-bg-img" aria-hidden />
        <div className="hero-overlay" aria-hidden />
        <HeroOrbits />
        <div className="hero-stars" aria-hidden />

        <div className="hero-side-nav side-hidden-mobile" aria-hidden>
          <span>01</span>
          <div className="side-line" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`side-dot ${i === 0 ? 'active' : ''}`} />
          ))}
          <div className="side-line" />
          <span>06</span>
        </div>

        <div className="hero-content">
          <motion.p className="hero-label" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            Nav.Aura Innovation
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span>From chaos to clarity —</span>
            <br />
            <span>we build systems that help</span>
            <br />
            <span className="hero-gold">businesses scale effortlessly.</span>
          </motion.h1>
          <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Strategy · Systems · Automation · Growth
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <Link to="/ecosystem" className="btn-outline hero-btn">
              EXPLORE OUR PROCESS
              <ArrowRight size={13} />
            </Link>
          </motion.div>
          <motion.div className="scroll-hint-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <div className="scroll-indicator" />
            <span>SCROLL TO EXPLORE</span>
          </motion.div>
        </div>

        <div className="hero-value-strip">
          {VALUE_PROPS.map((item, i) => {
            const Icon = pillarIcons[i]
            return (
              <motion.div
                key={item.title}
                className="hero-value-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
              >
                <Icon size={17} className="value-icon" />
                <div>
                  <p className="value-title">{item.title}</p>
                  <p className="value-desc">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="The Real Problem"
            title="Your business has more potential than your systems allow."
            subtitle="Most founders work harder and harder — but the business doesn't scale, because scaling requires systems, not just effort."
          />
          <motion.div
            className="quote-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <blockquote>
              &ldquo;Your business is a direct reflection of the systems — or lack thereof — inside it.&rdquo;
            </blockquote>
            <cite>— Nav.Aura Philosophy</cite>
          </motion.div>
          <div className="problem-grid">
            {PROBLEM_CARDS.map((card, i) => {
              const Icon = problemIcons[i]
              return (
                <motion.article
                  key={card.title}
                  className="problem-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ borderColor: 'rgba(214,179,122,0.22)' }}
                >
                  <Icon size={20} className="icon-gold" />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section process-cycle-section">
        <div className="container">
          <SectionHeader
            eyebrow="How It Connects"
            title="One Interdependent Cycle"
            subtitle="Analysis, system design, implementation, and optimization feed each other — continuously."
          />
          <ProcessCycle />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="The Nav.Aura Framework"
            title="Four Pillars of a Scalable Business"
            subtitle="Every engagement is built on this integrated framework — not isolated deliverables, but a connected ecosystem."
          />
          <div className="framework-grid">
            {FRAMEWORK_PILLARS.map((pillar, i) => {
              const Icon = pillarIcons[i]
              return (
                <motion.article
                  key={pillar.title}
                  className="framework-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="framework-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Your Journey" title="Chaos to Scale — The Path Forward" />
          <div className="journey-timeline">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                className="journey-node"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="journey-circle" style={{ borderColor: step.color }}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={i === 4 ? 'gold' : ''}>{step.label}</h3>
                <p>{step.desc}</p>
                {i < JOURNEY_STEPS.length - 1 && <div className="journey-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Transformation" title="The Business You Have vs. The Business You Deserve" />
          <div className="comparison">
            <motion.div className="comparison-col before" initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3>BEFORE NAV.AURA</h3>
              <ul>
                {BEFORE_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="dash-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="comparison-col after" initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3>AFTER NAV.AURA</h3>
              <ul>
                {AFTER_ITEMS.map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="How We Work"
            title="Our 4-Step Engagement Process"
            subtitle="From first call to full transformation — a structured, results-driven methodology."
          />
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <motion.article
                key={step.title}
                className="process-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="step-label">STEP {step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container founder-inner">
          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="founder-avatar">N</div>
            <Quote size={22} className="quote-icon" />
            <p className="founder-quote">
              &ldquo;Most businesses in India are not failing because the founders aren&apos;t working hard.
              They&apos;re failing because no one ever taught them how to build a system. Nav.Aura exists to change that.&rdquo;
            </p>
            <p className="founder-name">Founder, Nav.Aura Innovation</p>
            <p className="founder-mission">On a mission to systemize 10,000 businesses across India</p>
            <Link to="/about" className="btn-outline">
              Read Our Story
              <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader eyebrow="Client Results" title="What Happens When Systems Meet Ambition" />
          <div className="testimonials-grid testimonials-grid--two">
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" />
                  ))}
                </div>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <p className="author">{t.name}</p>
                  <p className="role">{t.company}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-glow" />
        <div className="container cta-inner">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="eyebrow">Ready to Scale?</span>
            <h2>
              Build a business that scales
              <br />
              <span className="hero-gold">beyond dependency.</span>
            </h2>
            <p className="section-subtitle">
              One strategy call. We diagnose your business, identify every gap, and show you exactly what needs to be built.
            </p>
            <Link to="/contact" className="btn-gold">
              Book Your Strategy Call
              <ArrowRight size={13} />
            </Link>
            <div className="stats-grid">
              {HOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
