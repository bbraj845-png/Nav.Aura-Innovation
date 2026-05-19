/**
 * Submit enquiry to Vercel serverless /api/contact (Resend).
 */
export async function submitEnquiryForm(fields) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields),
  })

  let data = {}
  try {
    data = await response.json()
  } catch {
    /* non-JSON error body */
  }

  if (!response.ok) {
    throw new Error(data.error || 'Unable to submit enquiry. Please try again or contact us on WhatsApp.')
  }

  return data
}
