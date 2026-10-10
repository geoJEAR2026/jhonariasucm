import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function Eventos({ titulo, subtitulo }) {
  const { c } = useIdioma()

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo} />

      <Seccion titulo={c.secciones.ponenciasTitulo} descripcion={c.secciones.ponenciasTexto}>
        <ol className="tiempo">
          {c.ponencias.map((ponencia) => (
            <li key={ponencia.titulo} className="tiempo__item">
              <span className="tiempo__periodo">
                {ponencia.anio} · {ponencia.tipo}
              </span>
              <h3>{ponencia.titulo}</h3>
              <p className="tiempo__lugar">{ponencia.lugar}</p>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion
        alterna
        titulo={c.secciones.congresosTitulo}
        descripcion={c.secciones.congresosTexto}
      >
        <div className="rejilla rejilla--2">
          {c.eventos.map((evento) => (
            <Tarjeta
              key={evento.nombre}
              etiqueta={`${evento.anio} · ${evento.participacion}`}
              titulo={evento.nombre}
            >
              <p>{evento.lugar}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>
    </>
  )
}
