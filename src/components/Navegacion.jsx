import { useEffect, useState } from 'react'
import { comun } from '../data/comun.js'
import { rutas } from '../rutas.js'
import { href } from '../router.jsx'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import SelectorIdioma from './SelectorIdioma.jsx'

export default function Navegacion({ rutaActual }) {
  const [abierto, setAbierto] = useState(false)
  const { idioma, setIdioma, c } = useIdioma()
  const enlaces = rutas.filter((entrada) => entrada.enMenu)

  // Al cambiar de vista se cierra el menú móvil.
  useEffect(() => {
    setAbierto(false)
  }, [rutaActual])

  return (
    <nav className="nav" aria-label={c.ui.navegacion}>
      <div className="contenedor nav__interior">
        <a className="nav__marca" href={href('/')} style={{ textDecoration: 'none' }}>
          <strong>{comun.nombreCorto}</strong>
          <span>{c.ui.marca}</span>
        </a>

        <button
          className="nav__boton"
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto((valor) => !valor)}
        >
          {abierto ? '✕' : '☰'} <span className="sr-only">{c.ui.menuAbrir}</span>
        </button>

        <ul id="menu-principal" className={`nav__enlaces${abierto ? '' : ' esta-cerrado'}`}>
          {enlaces.map((entrada) => {
            const activa = entrada.ruta === rutaActual
            return (
              <li key={entrada.ruta}>
                <a
                  href={href(entrada.ruta)}
                  className={activa ? 'esta-activo' : undefined}
                  aria-current={activa ? 'page' : undefined}
                >
                  {c.rutas[entrada.clave].nombre}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav__extras">
          <SelectorIdioma idioma={idioma} alCambiar={setIdioma} etiqueta={c.ui.idioma} />

          <p className="nav__estado">
            <span className="nav__etiqueta">{c.ui.estado}</span>
            <span className="nav__estado-valor">
              <span className="nav__punto" aria-hidden="true" />
              {c.ui.estadoValor}
            </span>
          </p>
        </div>
      </div>
    </nav>
  )
}
