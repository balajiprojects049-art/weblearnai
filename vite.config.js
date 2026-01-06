import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Development server configuration
  server: {
    proxy: {
      // Proxy API requests to a mock handler during development
      '/api': {
        target: 'http://localhost:5173',
        configure: (proxy, options) => {
          // Mock API response for local development
          proxy.on('proxyReq', (proxyReq, req, res) => {
            if (req.url === '/api/submit-contact') {
              // Intercept and return mock success response
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: true,
                message: 'Submission saved successfully! (Local Dev Mode)',
                id: Math.floor(Math.random() * 1000),
                whatsappSent: false
              }));
            }
          });
        }
      }
    }
  }

  // NOTE: /api routes only work on Vercel deployment
  // For local testing, we're using a mock proxy above
  // For production, the /api folder contains Vercel Edge Functions
})
