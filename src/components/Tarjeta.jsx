import Fichas from './Fichas.jsx'

/**
 * Tarjeta genérica reutilizada por proyectos, competencias, intereses y eventos.
 */
export default function Tarjeta({ etiqueta, titulo, children, fichas, enlaces = [], interactiva = true, className = '' }) {
  const clases = ['tarjeta', interactiva ? 'tarjeta--interactiva' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={clases}>
      {etiqueta && <span className="tarjeta__etiqueta">{etiqueta}</span>}
      {titulo && <h3>{titulo}</h3>}
      {children}
      {fichas?.length > 0 && <Fichas items={fichas} />}
      {enlaces.length > 0 && (
        <div className="tarjeta__pie">
          {enlaces.map((enlace) => (
            <a key={enlace.url} href={enlace.url} target="_blank" rel="noreferrer noopener">
              {enlace.texto} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
