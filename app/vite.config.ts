import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:3000/users',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace('/users', ''),
      },
    },
  }

})
