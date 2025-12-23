import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This prevents Vite from trying to resolve Next.js modules
      external: ['next/navigation', 'next/api-utils'],
    },
  },
})