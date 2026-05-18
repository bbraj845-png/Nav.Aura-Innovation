import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Loader2, MessageCircle, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { CONTACT_INFO, FAQ, CONTACT_PROCESS, REVENUE_OPTIONS, WHATSAPP_LINK } from '../data/content'
import { submitEnquiryForm } from '../utils/netlifyForm'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  business: '',
  revenue: '',
  message: '',
  industry: '',
  goal: '',
}

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const messageParts = [form.message.trim()]
    if (form.industry) messageParts.push(`Industry: ${form.industry}`)
    if (form.goal) messageParts.push(`Growth goal: ${form.goal}`)

    try {
      await submitEnquiryForm({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        business: form.business.trim(),
        revenue: form.revenue,
        message: messageParts.filter(Boolean).join('\n\n'),
        industry: form.industry,
        goal: form.goal,
      })
      navigate('/thank-you')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <PageHero
        badge="Get In Touch"
        title="Let's Build Your"
        titleAccent="Growth Infrastructure"
        subtitle="One conversation changes everything. Tell us about your business — we'll show you exactly what needs to be built."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-sidebar">
            <h3>Contact</h3>
            <a href={WHATSAPP_LINK} className="contact-item contact-item--link" target="_blank" rel="noopener noreferrer">
              <Phone size={16} />
              <div>
                <span>Phone / WhatsApp</span>
                <p>{CONTACT_INFO.phoneDisplay}</p>
              </div>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="contact-item contact-item--link">
              <Mail size={16} />
              <div>
                <span>Email</span>
                <p>{CONTACT_INFO.email}</p>
              </div>
            </a>
            <div className="contact-item">
              <MapPin size={16} />
              <div>
                <span>Location</span>
                <p>India — Serving Globally</p>
              </div>
            </div>
            <a href={WHATSAPP_LINK} className="whatsapp-card" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Fastest response</span>
              </div>
              <ArrowRight size={14} />
            </a>
            <h3>Our Process</h3>
            {CONTACT_PROCESS.slice(0, 3).map((step) => (
              <div key={step.step} className="process-mini">
                <span>{step.step}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </aside>

          <motion.form
            name="enquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <input type="hidden" name="form-name" value="enquiry" />
            <p className="netlify-honeypot" aria-hidden="true">
              <label>
                Don&apos;t fill this out:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <h2>Enquiry Form</h2>
            <p>Fill this out completely. The more detail you give us, the more value we can bring.</p>

            <div className="form-row">
              <label>
                <span>Full Name *</span>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </label>
              <label>
                <span>Email Address *</span>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Phone Number *</span>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </label>
              <label>
                <span>Business Name</span>
                <input
                  name="business"
                  type="text"
                  placeholder="Your business name"
                  value={form.business}
                  onChange={(e) => update('business', e.target.value)}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Industry</span>
                <select name="industry" value={form.industry} onChange={(e) => update('industry', e.target.value)}>
                  <option value="">Select industry</option>
                  <option>Restaurant / F&B</option>
                  <option>Gym / Wellness</option>
                  <option>Education / Institute</option>
                  <option>Startup</option>
                  <option>Real Estate</option>
                  <option>Healthcare / Clinic</option>
                  <option>Retail</option>
                  <option>Salon / Beauty</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span>Monthly Revenue</span>
                <select name="revenue" value={form.revenue} onChange={(e) => update('revenue', e.target.value)}>
                  {REVENUE_OPTIONS.map((opt) => (
                    <option key={opt.value || 'default'} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              <span>Tell us your requirement *</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What's the #1 thing holding your business back?"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
              />
            </label>

            <label>
              <span>Growth Goal (12 months)</span>
              <input
                name="goal"
                type="text"
                placeholder="e.g. Double revenue, open 2 more branches..."
                value={form.goal}
                onChange={(e) => update('goal', e.target.value)}
              />
            </label>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn-gold full-width" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 size={16} className="spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Enquiry
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container faq-section">
          <h2 className="section-title center">Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <article key={item.q} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  <span>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p>{item.a}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
