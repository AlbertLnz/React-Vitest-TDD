import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // <------- Configuration of Vitest
    environment: 'happy-dom'
  }
})
