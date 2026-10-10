import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Fichas from '../components/Fichas.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function Investigacion({ titulo, subtitulo }) {
  const { c } = useIdioma()

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo} />

      <Seccion titulo={c.secciones.lineasTitulo} descripcion={c.secciones.lineasTexto}>
        <Fichas items={c.lineas} />
      </Seccion>

      <Seccion
        alterna
        titulo={c.secciones.publicacionesTitulo}
        descripcion={c.secciones.publicacionesTexto}
      >
        <div className="rejilla">
          {c.publicaciones.map((publicacion) => (
            <article key={publicacion.titulo} className="tarjeta tarjeta--interactiva publicacion">
              <div className="publicacion__meta">
                <span className="estado">{publicacion.estado}</span>
                <span>{publicacion.fecha}</span>
              </div>
              <h3>{publicacion.titulo}</h3>
              <p className="publicacion__autores">{publicacion.autores}</p>
              <p>{publicacion.medio}</p>
              {publicacion.url && (
                <div className="tarjeta__pie">
                  <a href={publicacion.url} target="_blank" rel="noreferrer noopener">
                    {publicacion.etiqueta} ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </Seccion>
    </>
  )
}
