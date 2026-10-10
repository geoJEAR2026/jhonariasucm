import { useLayoutEffect, useSyncExternalStore } from 'react'

/**
 * Enrutador mínimo basado en el hash de la URL (#/portafolio).
 *
 * Se usa hash y no rutas limpias porque GitHub Pages no tiene servidor
 * que resuelva /portafolio: al recargar devolvería 404. Con hash, el
 * navegador siempre pide index.html y React decide qué mostrar.
 */

function suscribir(avisar) {
  window.addEventListener('hashchange', avisar)
  return () => window.removeEventListener('hashchange', avisar)
}

function leerRuta() {
  return window.location.hash.replace(/^#/, '') || '/'
}

/** Devuelve la ruta actual y vuelve a renderizar cuando cambia. */
export function useRuta() {
  return useSyncExternalStore(suscribir, leerRuta, () => '/')
}

/**
 * Al cambiar de vista, salta al inicio de la página sin animación.
 *
 * Se usa behavior 'instant' porque el CSS global tiene scroll-behavior:
 * smooth; sin eso, el salto se vería como un recorrido de abajo hacia
 * arriba. useLayoutEffect lo hace antes de pintar, así no hay parpadeo.
 */
export function useSubirAlCambiar(ruta) {
  // El navegador recuerda la posición de scroll de cada entrada del
  // historial y la restaura DESPUÉS de que React pinta, deshaciendo el
  // salto de abajo. En manual, esa restauración la controlamos aquí.
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [ruta])
}

/** Construye el href de una ruta interna. */
export function href(ruta) {
  return `#${ruta}`
}
