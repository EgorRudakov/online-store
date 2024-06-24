import babel from '@rollup/plugin-babel'
import { resolve } from 'path' // Импортируем resolve из модуля path
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
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled', // Или 'runtime' если используете @babel/runtime
          presets: ['@babel/preset-env'],
          plugins: [
            // Добавьте сюда дополнительные Babel плагины, если необходимо
          ],
        }),
      ],
    },
  },
})
