import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Rolldown needs to be told these don't exist in a React app
      external: [
        'next/navigation',
        'next/headers',
        'next/constants',
        'next/api-utils'
      ],
    },
  },
})