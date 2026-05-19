/** Canonical site URL — set VITE_SITE_URL in Vercel env for production */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://www.navaurainnovation.com'
).replace(/\/$/, '')

export const SITE_NAME = 'Nav.Aura Innovation'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const BUSINESS = {
  name: SITE_NAME,
  legalName: 'Nav.Aura Innovation',
  description:
    'AI-driven business systems, SOP architecture, automation, and growth consulting for Indian schools, institutes, and SMEs.',
  email: 'navaurainnovation@gmail.com',
  phone: '+91-9953149283',
  areaServed: 'India',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India',
  },
}

/** Primary keyword + meta per route (pathname without trailing slash) */
export const PAGE_SEO = {
  '/': {
    title: 'AI Business Systems & SOP Consulting India | Nav.Aura Innovation',
    description:
      'Nav.Aura helps Indian schools, institutes & SMEs scale with SOPs, AI automation, branding & lead systems. Book a free strategy call.',
    keywords:
      'business systems consulting India, AI automation for SMEs, SOP consulting, scale business without founder dependency',
    h1: 'Business systems & AI automation for Indian companies that want to scale',
    index: true,
  },
  '/about': {
    title: 'About Nav.Aura — Business Growth Ecosystem for India',
    description:
      'Meet the team behind Nav.Aura Innovation. We combine agency, systems, tech & growth to systemize Indian businesses for long-term scale.',
    keywords:
      'about Nav.Aura Innovation, business systems company India, growth ecosystem consulting',
    h1: 'About Nav.Aura Innovation',
    index: true,
  },
  '/services': {
    title: 'SOP, AI Integration & Automation Services India | Nav.Aura',
    description:
      'Branding, web, SOP architecture, AI integration, CRM automation & lead generation — integrated services for Indian businesses ready to scale.',
    keywords:
      'SOP architecture services, AI integration for business India, business automation consulting, lead generation systems',
    h1: 'Services engineered for scalable growth',
    index: true,
  },
  '/ecosystem': {
    title: 'Nav.Aura Ecosystem — Agency, Systems, Tech & Growth',
    description:
      'Four interconnected arms: brand & web, operational SOPs, AI automation, and revenue growth — one ecosystem for complete transformation.',
    keywords:
      'business growth ecosystem, operational systems framework, AI automation layer',
    h1: 'The Nav.Aura growth ecosystem',
    index: true,
  },
  '/case-studies': {
    title: 'Case Studies — Schools, Gyms & Clinics Scaled | Nav.Aura',
    description:
      'Real results: 2.4x–4.2x revenue growth, higher retention, multi-location expansion. See how Indian businesses transformed with Nav.Aura systems.',
    keywords:
      'business transformation case studies India, school systems case study, gym operations SOP',
    h1: 'Client transformation case studies',
    index: true,
  },
  '/industries': {
    title: 'Industries We Serve — Schools, F&B, Healthcare & More',
    description:
      'Proven systems for restaurants, gyms, institutes, startups, retail, real estate, clinics & salons across India.',
    keywords:
      'business automation for schools India, gym SOP systems, restaurant operations consulting',
    h1: 'Industry-specific business systems',
    index: true,
  },
  '/insights': {
    title: 'Business Systems & AI Insights | Nav.Aura Blog',
    description:
      'Expert guides on SOPs, AI for Indian SMEs, scaling strategy, hiring systems & operational growth — from the Nav.Aura team.',
    keywords:
      'business systems blog, AI for Indian business, SOP frameworks, scaling without chaos',
    h1: 'Insights on systems, AI & scale',
    index: true,
  },
  '/contact': {
    title: 'Contact Nav.Aura — Book a Strategy Call',
    description:
      'Tell us about your business. Get a 60-minute strategy call, custom proposal & roadmap for SOPs, automation & growth systems.',
    keywords:
      'book business consulting call India, contact Nav.Aura Innovation, business systems enquiry',
    h1: 'Book your growth infrastructure strategy call',
    index: true,
  },
  '/ai-business-systems-india': {
    title: 'AI Automation & Business Systems in India | Nav.Aura',
    description:
      'AI automation, SOPs & consulting for schools, institutes & SMEs in Delhi NCR, Mumbai, Bangalore & pan-India. Free strategy call.',
    keywords:
      'AI automation services in India, business systems for schools, SME consulting India, SOP automation Delhi Mumbai Bangalore',
    h1: 'AI automation & business systems for Indian enterprises',
    index: true,
  },
  '/thank-you': {
    title: 'Thank You — Nav.Aura Innovation',
    description: 'Your enquiry has been received. We will respond shortly.',
    keywords: '',
    h1: 'Thank you',
    index: false,
  },
}

export const SITEMAP_ROUTES = Object.entries(PAGE_SEO)
  .filter(([, meta]) => meta.index !== false)
  .map(([path]) => path)

export function getPageSeo(pathname) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/'
  return PAGE_SEO[path] || PAGE_SEO['/']
}

export const INTERNAL_LINKS = {
  home: [
    { href: '/services', label: 'Explore our services' },
    { href: '/ecosystem', label: 'See the Nav.Aura ecosystem' },
    { href: '/case-studies', label: 'Read client case studies' },
    { href: '/ai-business-systems-india', label: 'AI systems for India' },
    { href: '/contact', label: 'Book a strategy call' },
  ],
  services: [
    { href: '/ecosystem', label: 'How services connect in our ecosystem' },
    { href: '/industries', label: 'Solutions by industry' },
    { href: '/case-studies', label: 'Proof: case studies' },
    { href: '/contact', label: 'Discuss your scope' },
  ],
  about: [
    { href: '/services', label: 'What we build' },
    { href: '/ecosystem', label: 'Our four-arm ecosystem' },
    { href: '/insights', label: 'Read our insights' },
    { href: '/contact', label: 'Work with us' },
  ],
  industries: [
    { href: '/services', label: 'Core services' },
    { href: '/case-studies', label: 'Results we have delivered' },
    { href: '/ai-business-systems-india', label: 'Local AI & systems expertise' },
    { href: '/contact', label: 'Get an industry-specific plan' },
  ],
  ecosystem: [
    { href: '/services', label: 'Service catalog' },
    { href: '/about', label: 'Our story' },
    { href: '/contact', label: 'Start your transformation' },
  ],
  caseStudies: [
    { href: '/services', label: 'Services behind these results' },
    { href: '/industries', label: 'Your industry' },
    { href: '/contact', label: 'Build your case study next' },
  ],
  insights: [
    { href: '/services', label: 'Turn insights into implementation' },
    { href: '/ecosystem', label: 'Full ecosystem approach' },
    { href: '/contact', label: 'Ask our team directly' },
  ],
  contact: [
    { href: '/services', label: 'Review services before your call' },
    { href: '/case-studies', label: 'See what is possible' },
    { href: '/insights', label: 'Read FAQs in our insights' },
  ],
  local: [
    { href: '/services', label: 'Services for Indian SMEs' },
    { href: '/industries', label: 'Schools, institutes & more' },
    { href: '/contact', label: 'Book a local strategy call' },
  ],
}
