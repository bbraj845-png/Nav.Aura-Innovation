import { sendEnquiryEmail, validateEnquiry } from './_lib/sendEnquiry.js'

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
      if (data.length > 1e6) {
        reject(new Error('Payload too large'))
        req.destroy()
      }
    })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch {
        reject(new Error('Invalid JSON'))
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return json(res, 204, {})
  }

  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' })
  }

  let body
  try {
    body = await readBody(req)
  } catch {
    return json(res, 400, { error: 'Invalid request body' })
  }

  const validation = validateEnquiry(body)
  if (!validation.ok) {
    return json(res, validation.status, { error: validation.error })
  }
  if (validation.skipped) {
    return json(res, 200, { success: true })
  }

  try {
    const result = await sendEnquiryEmail(validation.data)
    if (!result.ok) {
      return json(res, result.status, { error: result.error })
    }
    return json(res, 200, { success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return json(res, 500, { error: 'Server error. Please try again shortly.' })
  }
}
