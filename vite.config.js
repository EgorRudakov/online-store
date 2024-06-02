import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/online-store',
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  css: {
    minify: false,
    sourcemap: true,
  },
  build: {
    outDir: 'dist',
  },
})