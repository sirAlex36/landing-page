import { defineConfig } from 'vite';

export default defineConfig({
  // ... your other config
  build: {
    rollupOptions: {
      // This tells the bundler to ignore these imports instead of failing
      external: ['next/navigation', 'next/headers', 'next/constants'],
    },
  },
});