import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le site fonctionne sur GitHub Pages, Netlify, Vercel...
export default defineConfig({
  plugins: [react()],
  base: './',
})
