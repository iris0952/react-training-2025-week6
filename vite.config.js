import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react-training-2025-week6/' : '/',
  plugins: [react()],
  esbuild: {
    jsx: "automatic",
  }
})
