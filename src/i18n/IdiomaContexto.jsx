import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import es from './es.js'
import en from './en.js'

const CONTENIDOS = { es, en }
const CLAVE = 'idioma'

const IdiomaContexto = createContext(null)

/** Idioma guardado, o el del navegador, o español. */
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (guardado && CONTENIDOS[guardado]) return guardado
  } catch {
    // Modo privado o almacenamiento bloqueado: se usa el valor por defecto.
  }
  return navigator.language?.startsWith('en') ? 'en' : 'es'
}

export function ProveedorIdioma({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = idioma
    try {
      localStorage.setItem(CLAVE, idioma)
    } catch {
      // Si no se puede guardar, la elección dura solo esta visita.
    }
  }, [idioma])

  const valor = useMemo(
    () => ({ idioma, setIdioma, c: CONTENIDOS[idioma] }),
    [idioma]
  )

  return <IdiomaContexto.Provider value={valor}>{children}</IdiomaContexto.Provider>
}

/**
 * Devuelve { idioma, setIdioma, c }, donde `c` es todo el contenido
 * del idioma activo. Los componentes leen de `c` en vez de importar
 * los textos directamente.
 */
export function useIdioma() {
  const valor = useContext(IdiomaContexto)
  if (!valor) throw new Error('useIdioma debe usarse dentro de ProveedorIdioma')
  return valor
}
