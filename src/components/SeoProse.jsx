import { Link } from 'react-router-dom'

/**
 * Long-form SEO section: semantic headings, paragraphs, and internal links.
 */
export default function SeoProse({ sections, links = [], className = '' }) {
  return (
    <section className={`seo-prose section section-alt ${className}`.trim()} aria-label="In-depth overview">
      <div className="container seo-prose-inner">
        {sections.map((block) => (
          <article key={block.id} className="seo-prose-block">
            {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
            {block.h2 ? <h2 className="section-title left">{block.h2}</h2> : null}
            {block.paragraphs?.map((para) => (
              <p key={para.slice(0, 48)} className="body-text seo-prose-p">
                {para}
              </p>
            ))}
            {block.h3 ? <h3 className="seo-prose-h3">{block.h3}</h3> : null}
            {block.list ? (
              <ul className="seo-prose-list">
                {block.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
        {links.length > 0 && (
          <nav className="seo-internal-links" aria-label="Related pages">
            <h2 className="seo-prose-h3">Explore next</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  )
}
