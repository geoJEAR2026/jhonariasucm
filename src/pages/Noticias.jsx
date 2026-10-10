import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function Noticias({ titulo, subtitulo }) {
  const { c } = useIdioma()

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo} />

      <Seccion titulo={c.secciones.prensaTitulo} descripcion={c.secciones.prensaTexto}>
        <div className="rejilla rejilla--2">
          {c.noticias.map((nota) => (
            <article key={nota.url} className="tarjeta tarjeta--interactiva nota">
              <div className="nota__meta">
                <span className="tarjeta__etiqueta">{nota.medio}</span>
                <span className="nota__fecha">{nota.fecha}</span>
              </div>
              <h3>{nota.titulo}</h3>
              <p>{nota.resumen}</p>
              <div className="tarjeta__pie">
                <a href={nota.url} target="_blank" rel="noreferrer noopener">
                  {c.secciones.leerNota} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </Seccion>
    </>
  )
}
