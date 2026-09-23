import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitePages } from '@kingironman2011/vite-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePages()],
  base: '/routing-state/',
})
