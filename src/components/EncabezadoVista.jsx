import { href } from '../router.jsx'

/**
 * Cabecera azul que abre cada vista interna.
 * `children` son acciones propias de la vista (por ejemplo, descargar
 * el CV) y se alinean a la derecha, en la misma fila del título.
 */
export default function EncabezadoVista({ titulo, subtitulo, children }) {
  return (
    <header className="vista__encabezado">
      <div className="contenedor">
        <a className="vista__volver" href={href('/')}>
          ← Volver al inicio
        </a>

        <div className="vista__fila">
          <h1>{titulo}</h1>
          {children && <div className="vista__acciones">{children}</div>}
        </div>

        {subtitulo && <p className="vista__subtitulo">{subtitulo}</p>}
      </div>
    </header>
  )
}
