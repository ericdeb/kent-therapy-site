import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'public/vite',
    rollupOptions: {
      input: {
        main: 'app/javascript/entrypoints/application.jsx'
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    port: 3036,
    host: true,
    cors: true
  },
  resolve: {
    alias: {
      '@': '/app/javascript'
    }
  }
})
