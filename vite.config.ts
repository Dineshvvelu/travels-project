import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
      '@components': fileURLToPath(new URL('./components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./hooks', import.meta.url)),
      '@lib': fileURLToPath(new URL('./lib', import.meta.url)),
      '@assets': fileURLToPath(new URL('./assets', import.meta.url))
    }
  }
})
