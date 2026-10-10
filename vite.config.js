import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://geojear2026.github.io/jhonariasucm/,
// así que todas las rutas de archivos cuelgan del nombre del repositorio.
// Si algún día renombra el repositorio a geoJEAR2026.github.io, cambie
// este valor a '/'.
export default defineConfig({
  plugins: [react()],
  base: '/jhonariasucm/',
})
