const FORM_NAME = 'enquiry'

/**
 * Submit a form to Netlify Forms from the React app.
 * Requires a matching static form in public/enquiry.html at deploy time.
 */
export async function submitEnquiryForm(fields) {
  const body = new URLSearchParams({
    'form-name': FORM_NAME,
    ...fields,
  })

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })

  if (!response.ok) {
    throw new Error('Unable to submit enquiry. Please try again or contact us on WhatsApp.')
  }
}

export { FORM_NAME }
