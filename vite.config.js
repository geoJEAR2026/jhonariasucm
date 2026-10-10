import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' sirve para un repo personal <usuario>.github.io
// Si publica en un repo de proyecto, cambie a '/nombre-del-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
