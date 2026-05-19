import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import SeoProse from '../components/SeoProse'
import CTABlock from '../components/CTABlock'
import { SEO_CONTENT } from '../data/seoContent'
import { INTERNAL_LINKS } from '../data/seo'

const CITIES = [
  { name: 'Delhi NCR', focus: 'Schools, institutes, professional services' },
  { name: 'Mumbai', focus: 'F&B groups, retail, real estate' },
  { name: 'Bangalore', focus: 'Tech SMEs, coaching & startup ecosystems' },
  { name: 'Hyderabad', focus: 'Education chains, healthcare clinics' },
  { name: 'Pune', focus: 'Manufacturing SMEs, institutes' },
  { name: 'Pan-India', focus: 'Remote delivery with on-site kickoffs when required' },
]

export default function LocalServices() {
  return (
    <main>
      <PageHero
        badge="India"
        title="AI Automation &"
        titleAccent="Business Systems Nationwide"
        subtitle="SOP consulting, AI integration, and growth infrastructure for schools, institutes, and SMEs — delivered across India's major business hubs."
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title center">Where we work</h2>
          <p className="section-subtitle center">
            Local demand capture through Google Business Profile, city landing pages, and
            operations built for your market — not generic templates.
          </p>
          <div className="local-cities-grid">
            {CITIES.map((city) => (
              <article key={city.name} className="local-city-card">
                <MapPin size={18} className="icon-gold" aria-hidden />
                <h3>{city.name}</h3>
                <p>{city.focus}</p>
              </article>
            ))}
          </div>
          <p className="body-text center local-gbp-note">
            <strong>Google Business Profile:</strong> Use your verified listing with consistent NAP
            (name, address, phone), service categories, weekly posts, and review responses. Link
            directly to this page and your <Link to="/contact">contact form</Link> for local
            conversions.
          </p>
        </div>
      </section>

      <SeoProse sections={SEO_CONTENT.local} links={INTERNAL_LINKS.local} />

      <CTABlock
        title="Get a city-specific growth plan"
        subtitle="Tell us your location, industry, and revenue band — we will map systems for your market."
        ctaLabel="Book strategy call"
        ctaHref="/contact"
      />
    </main>
  )
}
