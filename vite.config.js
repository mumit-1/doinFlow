import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['https://request-opposition-themes-fact.trycloudflare.com/']
  }
})
