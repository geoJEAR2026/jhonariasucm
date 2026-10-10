export default function Seccion({ id, indice, titulo, descripcion, alterna = false, children }) {
  return (
    <section id={id} className={`seccion${alterna ? ' seccion--alterna' : ''}`}>
      <div className="contenedor">
        <header className="encabezado">
          {indice && <span className="encabezado__indice">{indice}</span>}
          <h2>{titulo}</h2>
          {descripcion && <p>{descripcion}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
