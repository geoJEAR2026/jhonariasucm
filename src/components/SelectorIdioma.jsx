import { useEffect, useRef, useState } from 'react'

// Cada idioma se nombra en su propia lengua: así se reconoce sin
// importar cuál esté activo.
const IDIOMAS = [
  { codigo: 'es', nombre: 'Español' },
  { codigo: 'en', nombre: 'English' },
]

/**
 * Desplegable propio en lugar de un <select>.
 *
 * La lista de opciones de un <select> la dibuja el sistema operativo:
 * su resaltado azul y su borde de foco no se pueden cambiar con CSS.
 * Con botones y una lista normal, el estilo es del sitio.
 */
export default function SelectorIdioma({ idioma, alCambiar, etiqueta }) {
  const [abierto, setAbierto] = useState(false)
  const contenedor = useRef(null)

  const actual = IDIOMAS.find((item) => item.codigo === idioma) ?? IDIOMAS[0]

  // Cierra al hacer clic fuera o al pulsar Escape.
  useEffect(() => {
    if (!abierto) return

    function alClicFuera(evento) {
      if (!contenedor.current?.contains(evento.target)) setAbierto(false)
    }
    function alTeclear(evento) {
      if (evento.key === 'Escape') setAbierto(false)
    }

    document.addEventListener('mousedown', alClicFuera)
    document.addEventListener('keydown', alTeclear)
    return () => {
      document.removeEventListener('mousedown', alClicFuera)
      document.removeEventListener('keydown', alTeclear)
    }
  }, [abierto])

  return (
    <div className="idioma" ref={contenedor}>
      <span className="nav__etiqueta" id="etiqueta-idioma">
        {etiqueta}
      </span>

      <button
        type="button"
        className="idioma__boton"
        aria-haspopup="listbox"
        aria-expanded={abierto}
        aria-labelledby="etiqueta-idioma"
        onClick={() => setAbierto((valor) => !valor)}
      >
        {actual.nombre}
        <span className="idioma__flecha" aria-hidden="true">
          ▾
        </span>
      </button>

      {abierto && (
        <ul className="idioma__lista" role="listbox" aria-labelledby="etiqueta-idioma">
          {IDIOMAS.map((item) => (
            <li key={item.codigo}>
              <button
                type="button"
                role="option"
                aria-selected={item.codigo === idioma}
                className={item.codigo === idioma ? 'esta-activo' : undefined}
                onClick={() => {
                  alCambiar(item.codigo)
                  setAbierto(false)
                }}
              >
                {item.nombre}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
