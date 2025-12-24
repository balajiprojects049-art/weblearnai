import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // NOTE: /api routes only work on Vercel deployment
  // For local testing, either:
  // 1. Test on your deployed Vercel site
  // 2. Use a local database connection string in .env.local
  // 3. Mock the API responses for development

  // The /api folder contains Vercel Edge Functions
  // which are NOT executed by Vite dev server
})
