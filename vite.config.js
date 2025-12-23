export default defineConfig({
  build: {
    rollupOptions: {
      external: ['next/navigation', 'next/api-utils'],
    },
  },
});