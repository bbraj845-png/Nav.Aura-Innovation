const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s+\-()]{8,18}$/
const DEFAULT_TO = 'bbraj845@gmail.com'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function validateEnquiry(body) {
  if (body['bot-field']?.trim()) {
    return { ok: true, skipped: true }
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const phone = (body.phone || '').trim()
  const business = (body.business || '').trim()
  const revenue = (body.revenue || '').trim()
  const message = (body.message || '').trim()
  const industry = (body.industry || '').trim()
  const goal = (body.goal || '').trim()

  if (!name || name.length < 2) {
    return { ok: false, status: 400, error: 'Please enter your full name.' }
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, status: 400, error: 'Please enter a valid email address.' }
  }
  if (!phone || !PHONE_RE.test(phone)) {
    return { ok: false, status: 400, error: 'Please enter a valid phone number.' }
  }
  if (!message || message.length < 10) {
    return { ok: false, status: 400, error: 'Please describe your requirement (at least 10 characters).' }
  }

  return {
    ok: true,
    data: { name, email, phone, business, revenue, message, industry, goal },
  }
}

export async function sendEnquiryEmail(fields, env = process.env) {
  const apiKey = env.RESEND_API_KEY
  const toEmail = env.CONTACT_TO_EMAIL || DEFAULT_TO
  const fromEmail = env.CONTACT_FROM_EMAIL || 'Nav.Aura Website <onboarding@resend.dev>'

  if (!apiKey) {
    return {
      ok: false,
      status: 503,
      error:
        'Email service is not configured. Add RESEND_API_KEY to Vercel or .env.local — get a free key at resend.com',
    }
  }

  const { name, email, phone, business, revenue, message, industry, goal } = fields
  const subject = `New enquiry: ${name}${business ? ` — ${business}` : ''}`
  const html = `
    <h2>New website enquiry — Nav.Aura</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Business:</strong> ${escapeHtml(business || '—')}</p>
    <p><strong>Industry:</strong> ${escapeHtml(industry || '—')}</p>
    <p><strong>Monthly revenue:</strong> ${escapeHtml(revenue || '—')}</p>
    <p><strong>12-month goal:</strong> ${escapeHtml(goal || '—')}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    <hr />
    <p style="color:#666;font-size:12px">Reply directly to this email to reach the lead.</p>
  `

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    }),
  })

  if (!sendRes.ok) {
    const errText = await sendRes.text()
    console.error('Resend error:', sendRes.status, errText)
    return {
      ok: false,
      status: 502,
      error: 'We could not send your enquiry. Please try WhatsApp or email us directly.',
    }
  }

  return { ok: true, status: 200, to: toEmail }
}
