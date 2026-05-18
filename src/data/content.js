export const CONTACT_INFO = {
  phone: '9953149283',
  phoneDisplay: '+91 99531 49283',
  email: 'navaurainnovation@gmail.com',
  whatsappUrl: 'https://wa.me/919953149283',
  whatsappMessage: "Hi Nav.Aura Innovation, I'd like to discuss growing my business.",
}

export const WHATSAPP_LINK = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`

export const REVENUE_OPTIONS = [
  { value: '', label: 'Select monthly revenue' },
  { value: '0-50k', label: 'Under ₹50k' },
  { value: '50k-2L', label: '₹50k – ₹2L' },
  { value: '2L-10L', label: '₹2L – ₹10L' },
  { value: '10L-50L', label: '₹10L – ₹50L' },
  { value: '50L-1Cr', label: '₹50L – ₹1 Cr' },
  { value: '1Cr+', label: '₹1 Cr+' },
]

export const SOCIAL_LINKS = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Nav.AuraInnovation',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nav.aura_innovation/',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1B8LsezFZM/',
  },
  {
    label: 'LinkedIn',
    href: 'https://share.google/qfQWCmtSqMVr0fBn3',
  },
  {
    label: 'X',
    href: 'https://x.com/NavauraI8701',
  },
]

/** Build WhatsApp deep link with optional custom message */
export function getWhatsAppLink(message = CONTACT_INFO.whatsappMessage) {
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PROCESS', href: '/ecosystem' },
  { label: 'WORK', href: '/case-studies' },
  { label: 'INSIGHTS', href: '/insights' },
]

export const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Ecosystem', href: '/ecosystem' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
  ],
  Services: [
    { label: 'Branding', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'AI Integration', href: '/services' },
    { label: 'SOP Building', href: '/services' },
  ],
  Industries: [
    { label: 'Restaurants', href: '/industries' },
    { label: 'Gyms & Wellness', href: '/industries' },
    { label: 'Startups', href: '/industries' },
    { label: 'Real Estate', href: '/industries' },
  ],
  Connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Strategy Call', href: '/contact' },
    { label: 'WhatsApp Us', href: WHATSAPP_LINK, external: true },
    { label: 'Client Portal', href: '#' },
  ],
}

export const VALUE_PROPS = [
  { title: 'STRATEGIC THINKING', desc: 'We align every move with long-term impact.' },
  { title: 'SYSTEMS THAT SCALE', desc: 'Built to run without chaos or dependency.' },
  { title: 'AUTOMATION THAT WORKS', desc: 'Smart systems. Seamless operations.' },
  { title: 'GROWTH THAT LASTS', desc: 'Predictable growth through proven models.' },
]

export const PROBLEM_CARDS = [
  { title: 'Founder Dependency', desc: 'Everything runs through you. When you stop, the business stops.' },
  { title: 'No Systems', desc: 'No SOPs, no playbooks. Every task requires your personal attention.' },
  { title: 'Scaling Chaos', desc: 'Growth exposes every gap. More clients means more problems.' },
  { title: 'Inconsistent Revenue', desc: 'Unpredictable income with no repeatable sales engine.' },
  { title: 'Survival Mode', desc: 'Constantly firefighting with no space to think, plan, or lead.' },
]

export const FRAMEWORK_PILLARS = [
  { num: '01', title: 'Strategy', desc: 'Align every decision with your long-term vision and market positioning.' },
  { num: '02', title: 'Systems', desc: 'Build the operational infrastructure that makes your business self-sustaining.' },
  { num: '03', title: 'Automation', desc: 'Eliminate repetitive work and unlock exponential productivity gains.' },
  { num: '04', title: 'Growth', desc: 'Scale revenue predictably through proven frameworks and pipelines.' },
]

export const JOURNEY_STEPS = [
  { label: 'Chaos', desc: 'Reactive. Dependent. Stagnant.', color: 'rgba(200,80,80,0.5)' },
  { label: 'Clarity', desc: 'Vision. Direction. Focus.', color: 'rgba(214,179,122,0.35)' },
  { label: 'Structure', desc: 'SOPs. Playbooks. Processes.', color: 'rgba(214,179,122,0.45)' },
  { label: 'Automation', desc: 'Systems run without you.', color: 'rgba(214,179,122,0.55)' },
  { label: 'Scale', desc: 'Growth without ceiling.', color: '#D6B37A' },
]

export const BEFORE_ITEMS = [
  'Founder doing everything alone',
  'No documented processes or SOPs',
  'Chaotic, inconsistent operations',
  'Unpredictable revenue and sales',
  'Brand looks amateur and generic',
  'New hires take months to onboard',
  'Scaling = more stress, not more profit',
]

export const AFTER_ITEMS = [
  'Business runs without founder dependency',
  'Full SOP library for every process',
  'Smooth, predictable daily operations',
  'Systematic sales pipeline — consistent revenue',
  'Premium brand that commands attention',
  'New hires productive in days, not months',
  'Scaling brings profit, not chaos',
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Diagnose', desc: 'Deep audit of your operations, bottlenecks, and opportunities across all business functions.' },
  { step: '02', title: 'Architect', desc: 'Design a custom growth infrastructure — brand, operations, and technology aligned.' },
  { step: '03', title: 'Systemize', desc: 'Build, document, and implement all systems, SOPs, automations, and workflows.' },
  { step: '04', title: 'Scale', desc: 'Launch, optimize, and scale. Measure results. Iterate for compounding growth.' },
]

export const TESTIMONIALS = [
  { name: 'Rohan Mehta', company: 'Founder, FitLife Studios', text: "Nav.Aura didn't just redesign our brand — they rebuilt how our entire gym chain operates. Revenue up 3x in 8 months.", rating: 5 },
  { name: 'Priya Sharma', company: 'Director, Maariya Gold Public School', text: 'We had multiple branches and zero systems. Nav.Aura built our SOP library, hiring process, and automation stack in 90 days.', rating: 5 },
]

export const PROCESS_CYCLE = [
  { id: 'optimization', label: 'Optimization', desc: 'Refine, measure, and compound what works.', position: 'top' },
  { id: 'analysis', label: 'Analysis', desc: 'Audit operations, bottlenecks, and opportunities.', position: 'right' },
  { id: 'design', label: 'System Design', desc: 'Architect brand, ops, and tech as one system.', position: 'bottom' },
  { id: 'implementation', label: 'Implementation', desc: 'Build SOPs, automations, and workflows.', position: 'left' },
]

export const HOME_STATS = [
  { value: '12+', label: 'Businesses Transformed' },
  { value: '9', label: 'Core Systems Built' },
  { value: '3×', label: 'Average Revenue Growth' },
]

export const TIMELINE = [
  { year: '2019', title: 'The Breaking Point', desc: 'Watching countless businesses fail not for lack of passion, but for lack of systems. The seed of Nav.Aura was planted.' },
  { year: '2020', title: 'First Systems Built', desc: 'Began documenting and building operational frameworks for local businesses during a pivotal time. Results were immediate.' },
  { year: '2021', title: 'Agency Launched', desc: 'Nav.Aura Agency officially launched, combining branding, web, and systems consulting under one roof.' },
  { year: '2022', title: 'Tech Integration', desc: 'Added AI and automation capabilities. Clients began seeing 3x efficiency gains within 90 days.' },
  { year: '2023', title: 'Ecosystem Expansion', desc: 'Scaled to serve 50+ businesses. Ecosystem model proven across restaurants, gyms, clinics and institutes.' },
  { year: '2024', title: '100 Businesses', desc: "Crossed 100 business transformations. Built a reputation as India's premier business systems partner." },
  { year: '2026', title: '10,000 Mission', desc: 'On a clear mission to systemize 10,000 Indian businesses. Building the infrastructure to make that possible.' },
]

export const PHILOSOPHY = [
  { title: 'Systems First', desc: 'Every solution begins with documenting, measuring, and systematizing before automating or scaling.' },
  { title: 'Vision Beyond Today', desc: "We don't solve immediate problems — we build infrastructure for the next 5 years of growth." },
  { title: 'Human-Centered', desc: 'Technology and systems serve people, not the other way around. We keep businesses human while making them scalable.' },
  { title: 'Radical Clarity', desc: 'We cut through noise and complexity to deliver clear, actionable, transformative systems.' },
]

export const SERVICE_FILTERS = ['All', 'NavAura Agency', 'Tech', 'Systems', 'Growth', 'Scale']

export const SERVICES = [
  { id: 'branding', tag: 'NavAura Agency', title: 'Brand Identity & Strategy', tagline: 'Build a brand that commands premium prices and instant trust.', desc: "We don't just design logos. We architect entire brand systems — from visual identity to messaging architecture, tone of voice, and market positioning. Your brand becomes a growth asset.", deliverables: ['Logo & Visual Identity System', 'Brand Guidelines Document', 'Messaging Architecture & Tone', 'Market Positioning Strategy', 'Brand Collateral Design', 'Social Media Brand Templates'], outcome: 'Clients report 40-80% increase in perceived value after brand work.' },
  { id: 'web', tag: 'NavAura Agency', title: 'Web Development', tagline: 'High-converting digital experiences engineered for growth.', desc: "We build websites and digital platforms that are not just beautiful — they're built to convert. Every element is strategically designed to drive enquiries, build trust, and support scale.", deliverables: ['Custom Website Design & Development', 'Landing Pages & Sales Funnels', 'CRM & Lead Capture Integration', 'Mobile-First Responsive Design', 'Speed & Performance Optimization', 'Analytics & Conversion Tracking'], outcome: 'Average 3x improvement in website conversion rates within 60 days.' },
  { id: 'ai', tag: 'Tech', title: 'AI Integration', tagline: 'Embed intelligence into your operations and customer experience.', desc: 'We integrate AI tools and workflows directly into your business — from customer service chatbots to AI-powered sales systems, content automation, and intelligent reporting dashboards.', deliverables: ['AI Customer Service Systems', 'Intelligent Lead Qualification', 'Content Automation Workflows', 'AI-Powered Analytics Dashboards', 'Staff Productivity AI Tools', 'Custom GPT Solutions'], outcome: 'Clients save 15-30 hours per week with our AI integration packages.' },
  { id: 'sop', tag: 'Systems', title: 'SOP Architecture', tagline: 'Document your entire business so it runs without you.', desc: 'We map every process in your business, identify inefficiencies, and build a comprehensive SOP library. Your team knows exactly what to do, when, and how — without constant management.', deliverables: ['Full Business Process Mapping', 'Department SOP Documentation', 'Employee Handbook & Guides', 'Training Frameworks & Checklists', 'Quality Control Systems', 'Process Improvement Recommendations'], outcome: '80% reduction in founder time spent on daily operational decisions.' },
  { id: 'automation', tag: 'Tech', title: 'Business Automation', tagline: 'Eliminate repetitive tasks. Focus on what matters.', desc: 'We analyze your workflows and build end-to-end automation using the best-fit tools for your business. Sales follow-ups, onboarding, billing, reporting — all automated and connected.', deliverables: ['Sales & CRM Automation', 'Customer Onboarding Workflows', 'Invoice & Payment Automation', 'Email & WhatsApp Sequences', 'Reporting & Alert Systems', 'Integration Between All Tools'], outcome: 'Average 10x ROI on automation investment within the first 6 months.' },
  { id: 'leadgen', tag: 'Growth', title: 'Lead Generation Systems', tagline: 'Build a predictable pipeline. Never rely on referrals alone.', desc: 'We build multi-channel lead generation infrastructure — paid advertising, content, SEO, and outbound — tied into a CRM system that tracks, nurtures, and converts every lead.', deliverables: ['Lead Generation Strategy', 'Paid Ads Setup & Management', 'Content Marketing Framework', 'SEO & Local Search Optimization', 'Lead Nurturing Sequences', 'Pipeline Tracking Dashboard'], outcome: 'Clients see 2-5x increase in qualified leads within 90 days.' },
  { id: 'ops', tag: 'Systems', title: 'Operational Optimization', tagline: 'Fix the leaks. Optimize the engine. Scale confidently.', desc: 'We conduct a full operational audit — identifying bottlenecks, inefficiencies, and gaps. Then we rebuild your operations for maximum efficiency and scalability.', deliverables: ['Business Operations Audit', 'Bottleneck Identification Report', 'Operational Restructuring Plan', 'KPI & Metrics Framework', 'Team Accountability Systems', 'Monthly Optimization Reviews'], outcome: 'Average 35% operational cost reduction after our optimization work.' },
  { id: 'hiring', tag: 'Systems', title: 'Hiring & Training Systems', tagline: 'Build a team that performs. Every time.', desc: 'We create end-to-end hiring systems — from job descriptions and interview frameworks to onboarding SOPs and performance management structures that retain great people.', deliverables: ['Ideal Candidate Profiles', 'Job Description Templates', 'Interview & Assessment Frameworks', 'Onboarding SOP & Checklists', 'Performance Review Systems', 'Culture & Values Documentation'], outcome: 'Clients reduce time-to-productivity for new hires from 3 months to 3 weeks.' },
  { id: 'expansion', tag: 'Scale', title: 'Expansion Systems', tagline: 'Build the infrastructure to open your next location or market.', desc: 'For businesses ready to expand — we build the complete playbook for replication. Operations, hiring, marketing, and brand guidelines for opening your next branch, city, or franchise.', deliverables: ['Expansion Readiness Assessment', 'Location/Market Entry Strategy', 'Replication Playbook', 'Franchise or Branch Framework', 'Multi-Location Operations Manual', 'Growth Roadmap & Timeline'], outcome: 'Businesses using our expansion system open new locations 3x faster.' },
]

export const ECOSYSTEM_ARMS = [
  { id: 'agency', title: 'NavAura Agency', subtitle: 'The Brand & Digital Arm', color: '#D4AF37', services: ['Branding & Visual Identity', 'Web Development', 'Digital Marketing', 'Creative Consulting'], desc: 'The public-facing growth engine. NavAura Agency handles everything your customers see and experience — from your brand identity to your website to your marketing campaigns.', flow: 'ENTRY POINT — Most clients begin here. We make your business look and communicate like the premium brand it deserves to be.', impact: 'Creates the external perception and digital infrastructure for scale.' },
  { id: 'systems', title: 'NavAura Systems', subtitle: 'The Operations & SOPs Arm', color: '#7EC8A0', services: ['SOP Documentation', 'Process Mapping', 'Training Frameworks', 'Quality Control Systems'], desc: 'The operational backbone. NavAura Systems builds the documentation, processes, and frameworks that allow your business to run predictably — without founder dependency.', flow: 'FOUNDATION LAYER — Without systems, every other growth effort breaks down. We build the layer that holds everything together.', impact: 'Eliminates founder dependency. Enables consistent delivery at scale.' },
  { id: 'tech', title: 'NavAura Tech', subtitle: 'The AI & Automation Arm', color: '#8A9FD4', services: ['AI Integration', 'Business Automation', 'Tech Stack Consulting', 'Custom Software Solutions'], desc: 'The intelligence layer. NavAura Tech integrates AI and automation into your business to multiply efficiency, eliminate repetitive work, and create competitive advantage through technology.', flow: 'MULTIPLIER LAYER — Once systems are documented, we automate and enhance them with AI — turning manual processes into automated engines.', impact: 'Saves 15-30 hours weekly. Creates competitive moats through technology.' },
  { id: 'growth', title: 'NavAura Growth', subtitle: 'The Expansion & Scale Arm', color: '#C87DAC', services: ['Lead Generation', 'Sales Pipeline Systems', 'Hiring Frameworks', 'Expansion Playbooks'], desc: 'The scale engine. NavAura Growth builds the commercial infrastructure — lead generation, sales systems, hiring frameworks, and expansion playbooks that enable rapid, sustainable growth.', flow: 'SCALE LAYER — With brand, systems, and tech in place, Growth adds the fuel. We build the revenue engine that compounds month over month.', impact: '2-5x lead growth. Predictable revenue. Scalable team and operations.' },
]

export const ECOSYSTEM_FLOW = [
  { step: '01', title: 'Brand & Web', arm: 'Agency', desc: 'Premium brand identity and high-converting digital presence' },
  { step: '02', title: 'Systems & SOPs', arm: 'Systems', desc: 'Documented processes, training, and quality frameworks' },
  { step: '03', title: 'AI & Automation', arm: 'Tech', desc: 'Intelligent automation and AI integration across operations' },
  { step: '04', title: 'Scale & Expand', arm: 'Growth', desc: 'Lead generation, sales systems, and expansion infrastructure' },
]

export const CASE_STUDIES = [
  { id: 'fitlife', industry: 'Fitness & Wellness', client: 'FitLife Studios', type: 'Gym Chain', tagline: 'From 1 location to 4 with full operational control.', duration: '8 months', quote: 'Nav.Aura transformed how we operate. I used to be in the gym 14 hours a day. Now I focus on growth strategy.', quotePerson: 'Rohan Mehta, Founder — FitLife Studios', before: ['Owner managing every class schedule, trainer, and member issue personally', 'No SOP for staff. Every trainer did things their own way', 'Brand was generic — competing on price with local gyms', 'No member retention system. Churn was 40% monthly', 'Revenue: ₹2.8L/month from single location'], systems: ['Built complete SOP library for trainers, front desk, and management', 'Redesigned brand identity — premium positioning', 'Automated member onboarding and retention sequences', 'Created expansion playbook for new locations', 'Implemented AI-powered class scheduling and feedback system'], results: [{ label: 'Revenue Growth', value: '4.2x', sub: '₹2.8L → ₹11.8L/month' }, { label: 'Member Retention', value: '78%', sub: 'Up from 60%' }, { label: 'New Locations', value: '3', sub: 'Opened within 12 months' }, { label: 'Owner Time', value: '-60%', sub: 'Time in operations' }] },
  { id: 'maariya', industry: 'Education', client: 'Maariya Gold Public School', type: 'School', tagline: 'Turned multi-branch chaos into a structured, scalable education brand.', duration: '6 months', quote: 'We had no idea what was holding us back. Nav.Aura showed us exactly what was missing and built it all.', quotePerson: 'Priya Sharma, Director — Maariya Gold Public School', before: ['Multiple branches with no standardized curriculum or delivery', 'Hiring was ad hoc. No training framework for new faculty', 'Parents reported inconsistent quality across branches', 'No digital presence. All admissions through word of mouth only', 'Revenue stagnant across branches'], systems: ['Built standardized curriculum delivery SOPs for all faculty', 'Created faculty hiring and onboarding system', 'Developed premium brand identity and website', 'Built digital admissions funnel with CRM integration', 'Automated fee collection, reminders and parent communication'], results: [{ label: 'Revenue Growth', value: '2.8x', sub: 'Significant monthly uplift' }, { label: 'Admissions', value: '3x', sub: 'Digital-led increase' }, { label: 'New Branches', value: '2', sub: 'Opened using our playbook' }, { label: 'Onboarding Time', value: '-70%', sub: 'New faculty onboarding' }] },
  { id: 'meditrust', industry: 'Healthcare', client: 'MediTrust Clinics', type: 'Multi-Specialty Clinic', tagline: 'Systemized patient experience across 3 clinic locations.', duration: '5 months', quote: 'Our patient experience transformed completely. The team now runs clinics like professionals.', quotePerson: 'Dr. Anand Patel, Founder — MediTrust Clinics', before: ['Patient scheduling was manual — calls, WhatsApp, walk-ins mixed', 'Staff turnover high due to unclear roles and training', 'No patient retention or follow-up system in place', 'Online presence non-existent. No reviews or digital visibility', 'Revenue per clinic capped at ₹4L/month'], systems: ['Implemented online appointment booking with automated reminders', 'Built staff roles, SOPs, and 2-week onboarding program', 'Created patient follow-up and health check reminder sequences', 'Built medical brand identity and optimized Google presence', 'Developed patient feedback loop and reputation management system'], results: [{ label: 'Revenue Growth', value: '2.4x', sub: '₹4L → ₹9.6L/clinic' }, { label: 'Patient Retention', value: '+85%', sub: 'Return patient rate' }, { label: 'Online Reviews', value: '4.8★', sub: 'Average Google rating' }, { label: 'No-shows', value: '-55%', sub: 'Through automation' }] },
]

export const INDUSTRIES = [
  { title: 'Restaurants & F&B', desc: 'From single outlets to multi-chain restaurant groups. We build operations, branding, and staff systems that maintain quality at scale.', challenges: ['Inconsistent food quality across outlets', 'High staff turnover', 'No training system', 'Manual billing and inventory'], solutions: ['F&B SOP Library', 'Staff Training System', 'Brand & Menu Design', 'POS & Automation Integration'], stat: 'Average 2.5x revenue growth in 6 months' },
  { title: 'Gyms & Wellness', desc: 'Premium fitness brands and wellness centers that retain members, train great staff, and open new locations with ease.', challenges: ['High member churn', 'Founder as head trainer', 'No retention system', 'Generic branding'], solutions: ['Member Retention Automation', 'Trainer SOPs', 'Premium Brand Identity', 'Expansion Playbook'], stat: 'Clients retain 40% more members within 90 days' },
  { title: 'Institutes & Coaching', desc: 'Education businesses that deliver consistent quality, fill batches predictably, and expand to new centers systematically.', challenges: ['Inconsistent teaching quality', 'Manual admissions', 'No digital presence', 'Poor faculty training'], solutions: ['Curriculum Delivery SOPs', 'Digital Admissions Funnel', 'Brand & Website', 'Faculty Training System'], stat: '3x increase in admissions within 4 months' },
  { title: 'Startups', desc: 'Early-stage and growth-stage startups that need to build their operational foundation before scaling their team or investment.', challenges: ['No documented processes', 'Founder doing everything', 'Weak brand presence', 'No hiring framework'], solutions: ['Startup SOP Foundation', 'Brand & Positioning', 'AI-Powered Operations', 'Hiring & Culture Framework'], stat: '80% of clients raise their first significant round within 12 months' },
  { title: 'Retail', desc: 'Retail businesses that want to move from survival to a structured, multi-location growth model with loyal customers.', challenges: ['Inventory chaos', 'No customer data or retention', 'Brand seen as commodity', 'Staff inconsistency'], solutions: ['Retail Operations System', 'Customer Retention CRM', 'Premium Brand Refresh', 'Staff Training SOPs'], stat: 'Average 60% increase in repeat customer rate' },
  { title: 'Real Estate', desc: 'Real estate developers and agencies with a predictable lead pipeline, trained sales teams, and professional brand presence.', challenges: ['Unstructured sales team', 'Lead tracking in Excel/WhatsApp', 'No brand differentiation', 'Low conversion rates'], solutions: ['Sales Pipeline System', 'CRM & Lead Automation', 'Premium Brand & Collateral', 'Sales Playbook & Scripts'], stat: 'Clients see 3x increase in lead-to-deal conversion' },
  { title: 'Clinics & Healthcare', desc: 'Medical practices that provide consistent patient experiences, reduce no-shows, and build a trusted digital reputation.', challenges: ['Manual appointment booking', 'High no-show rate', 'Poor online reviews', 'Staff role confusion'], solutions: ['Online Booking System', 'Patient Reminder Automation', 'Reputation Management', 'Staff SOPs & Training'], stat: '55% reduction in no-shows through automation' },
  { title: 'Salons & Beauty', desc: 'Beauty businesses that build a loyal clientele, premium brand positioning, and seamless operations across chairs and stylists.', challenges: ['Inconsistent service quality', 'No rebooking system', 'Generic brand', 'Staff dependency'], solutions: ['Service Delivery SOPs', 'Rebooking Automation', 'Premium Salon Branding', 'Staff Training System'], stat: 'Average 70% increase in client rebooking rate' },
]

export const INSIGHT_CATEGORIES = ['All', 'Business Systems', 'AI for Business', 'Scaling Strategy', 'SOP Frameworks', 'Branding Psychology', 'Hiring Systems', 'Operational Growth']

export const INSIGHTS = [
  { category: 'Business Systems', title: "Why Your Business Can't Scale Without SOPs: The Complete Framework", excerpt: 'Most founders mistake busyness for productivity. The real leverage in any business comes from one thing: documented systems that work without your constant attention.', readTime: '8 min read', date: 'May 10, 2026', featured: true },
  { category: 'AI for Business', title: '5 AI Tools Every Indian Business Should Be Using in 2026', excerpt: 'Artificial intelligence is no longer a luxury for large corporations. Here are the five tools transforming how small and medium businesses operate — and how to implement each one.', readTime: '6 min read', date: 'May 7, 2026', featured: false },
  { category: 'Scaling Strategy', title: 'The 3 Stages of Business Scale — And Which Systems You Need at Each One', excerpt: "Scaling isn't a single event. It's a progression through three distinct stages, each requiring a different set of systems. Are you building the right foundation for where you want to go?", readTime: '10 min read', date: 'May 4, 2026', featured: false },
  { category: 'SOP Frameworks', title: 'How to Build an SOP Your Team Will Actually Follow', excerpt: "Most SOPs sit in folders, unread and unused. Here's how to create living, breathing operational documents that become the backbone of your business.", readTime: '7 min read', date: 'April 28, 2026', featured: false },
  { category: 'Branding Psychology', title: 'Why Your Brand Feels Generic (And How to Fix It in 30 Days)', excerpt: "Branding is not about logos. It's about how your business makes people feel — and whether that feeling translates into trust, premium pricing, and loyalty.", readTime: '9 min read', date: 'April 22, 2026', featured: false },
  { category: 'Hiring Systems', title: 'The Complete Hiring Framework That Builds Self-Managing Teams', excerpt: "The biggest bottleneck in most growing businesses isn't capital or customers — it's having the right people doing the right things, consistently. Here's the system that changes that.", readTime: '11 min read', date: 'April 15, 2026', featured: false },
  { category: 'Operational Growth', title: 'Killing Founder Dependency: A Step-by-Step Liberation Plan', excerpt: "If your business would stop functioning without you for two weeks, you don't have a business — you have a job. Here's how to systematically remove yourself from daily operations.", readTime: '12 min read', date: 'April 8, 2026', featured: false },
  { category: 'Business Systems', title: 'The Revenue Ceiling: Why Most Businesses Get Stuck at the Same Number', excerpt: "Every business has a revenue ceiling. It's not market-driven. It's system-driven. Here's how to identify and break through the invisible barriers limiting your growth.", readTime: '8 min read', date: 'April 1, 2026', featured: false },
  { category: 'AI for Business', title: "Automation vs AI: What's the Difference and Which Does Your Business Need?", excerpt: 'Many founders conflate automation and AI — but they serve different purposes and require different strategies. Here\'s how to think about both for your business.', readTime: '7 min read', date: 'March 25, 2026', featured: false },
]

export const FAQ = [
  { q: 'How long does the entire process take?', a: "It depends on the scope. A branding project takes 3–6 weeks. A full operational system build takes 60–90 days. An end-to-end ecosystem transformation runs 4–6 months. We'll give you a precise timeline during our strategy call." },
  { q: 'Do you work with businesses outside India?', a: 'Yes. While our primary focus is Indian businesses, we work with founders and companies globally — especially those with an India market presence or South Asian roots.' },
  { q: 'What is the minimum engagement size?', a: "Our entry point is a focused project (branding or SOP build). However, we're most effective — and deliver the best outcomes — when engaged as an end-to-end ecosystem partner. We'll recommend the right scope during the strategy call." },
  { q: 'How do I know if my business is ready for Nav.Aura?', a: "If you're doing more than ₹5L/month in revenue and feeling like your business has hit a ceiling — you're ready. We work with businesses at the cusp of serious growth who need the infrastructure to support it." },
  { q: 'Do you offer ongoing support after the systems are built?', a: 'Yes. Most clients move to a monthly retainer after the initial build phase, where we manage optimization, updates, and new initiatives as your business evolves.' },
  { q: 'Can I start with just one service?', a: 'Absolutely. Many clients start with branding or a website and then expand. We always design our work to integrate with future phases, so nothing is ever a dead end.' },
]

export const CONTACT_PROCESS = [
  { step: '01', title: 'Strategy Call', desc: '60-minute deep-dive. We understand your business, diagnose problems, and assess fit.', duration: '60 mins' },
  { step: '02', title: 'Proposal', desc: 'We send a custom proposal with scope, systems, timeline, and investment within 48 hours.', duration: '48 hrs' },
  { step: '03', title: 'Onboarding', desc: 'Sign off, dedicated team assigned, kickoff call, and full project initiation.', duration: 'Week 1' },
  { step: '04', title: 'Build Phase', desc: 'We build every system, asset, and infrastructure — with bi-weekly check-ins.', duration: '4–12 weeks' },
  { step: '05', title: 'Handover & Launch', desc: 'Full training, documentation handover, and launch support.', duration: 'Week N' },
  { step: '06', title: 'Ongoing Growth', desc: 'Optional retainer for continuous optimization and ecosystem expansion.', duration: 'Monthly' },
]
