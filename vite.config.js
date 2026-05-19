import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendEnquiryEmail, validateEnquiry } from './api/_lib/sendEnquiry.js'

/** Dev-only: handle POST /api/contact when using `npm run dev` */
function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/contact' && !req.url?.startsWith('/api/contact?')) {
          return next()
        }

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const env = loadEnv('development', process.cwd(), '')
        const mergedEnv = { ...process.env, ...env }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', async () => {
          try {
            const parsed = body ? JSON.parse(body) : {}
            const validation = validateEnquiry(parsed)

            if (!validation.ok) {
              res.statusCode = validation.status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: validation.error }))
              return
            }
            if (validation.skipped) {
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true }))
              return
            }

            const result = await sendEnquiryEmail(validation.data, mergedEnv)
            res.statusCode = result.status
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result.ok ? { success: true } : { error: result.error }))
          } catch (err) {
            console.error('[dev] contact API:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Server error' }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === 'development' ? contactApiDevPlugin() : null].filter(Boolean),
}))
