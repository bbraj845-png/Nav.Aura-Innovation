import { useEffect } from 'react'
import { BUSINESS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../data/seo'

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    areaServed: BUSINESS.areaServed,
    sameAs: [
      'https://www.youtube.com/@Nav.AuraInnovation',
      'https://www.instagram.com/nav.aura_innovation/',
      'https://www.facebook.com/share/1B8LsezFZM/',
      'https://x.com/NavauraI8701',
    ],
  }
}

function professionalServiceSchema(pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: `${SITE_URL}${pathname === '/' ? '' : pathname}`,
    image: DEFAULT_OG_IMAGE,
    description: BUSINESS.description,
    priceRange: '₹₹₹',
    areaServed: { '@type': 'Country', name: 'India' },
    serviceType: [
      'Business Systems Consulting',
      'SOP Architecture',
      'AI Integration',
      'Business Process Automation',
      'Branding and Web Development',
    ],
    provider: organizationSchema(),
  }
}

function breadcrumbSchema(pathname, title) {
  const items = [{ name: 'Home', item: SITE_URL }]
  if (pathname !== '/') {
    items.push({
      name: title?.split('|')[0]?.trim() || pathname.slice(1),
      item: `${SITE_URL}${pathname}`,
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function SeoHead({ title, description, keywords, pathname, index = true }) {
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`
  const robots = index ? 'index, follow, max-image-preview:large' : 'noindex, follow'

  useEffect(() => {
    document.title = title
    document.documentElement.lang = 'en-IN'

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)
    if (keywords) upsertMeta('name', 'keywords', keywords)

    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)

    upsertMeta('name', 'geo.region', 'IN')
    upsertMeta('name', 'geo.placename', 'India')

    const schemas = [
      organizationSchema(),
      professionalServiceSchema(pathname),
      breadcrumbSchema(pathname, title),
    ]
    schemas.forEach((schema, i) => upsertJsonLd(`seo-ld-${i}`, schema))
  }, [title, description, keywords, pathname, canonical, robots, index])

  return null
}
