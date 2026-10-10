import { comun } from '../data/comun.js'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function HojaDeVida({ titulo, subtitulo }) {
  const { c } = useIdioma()

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo}>
        <a className="boton boton--secundario" href={comun.cv} download>
          {c.ui.descargarCV}
        </a>
      </EncabezadoVista>

      <Seccion
        titulo={c.secciones.formacionTitulo}
        descripcion={c.secciones.formacionTexto}
      >
        <ol className="tiempo">
          {c.educacion.map((item) => (
            <li key={`${item.titulo}-${item.anio}`} className="tiempo__item estudio">
              {item.logo ? (
                <img
                  className="estudio__logo"
                  src={item.logo}
                  alt={item.institucion}
                  loading="lazy"
                />
              ) : (
                <span className="estudio__logo estudio__logo--vacio" aria-hidden="true">
                  {item.institucion.charAt(0)}
                </span>
              )}

              <div className="estudio__texto">
                <span className="tarjeta__etiqueta estudio__periodo">
                  {item.anio} · {item.nivel}
                </span>
                <h3>{item.titulo}</h3>
                <p className="estudio__institucion">{item.institucion}</p>
                <p className="estudio__lugar">{item.lugar}</p>
              </div>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion alterna titulo={c.secciones.cursosTitulo}>
        <div className="rejilla rejilla--3">
          {c.cursos.map((curso) => (
            <Tarjeta key={curso.nombre} etiqueta={curso.anio} titulo={curso.nombre}>
              <p>{curso.institucion}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>

      <Seccion
        titulo={c.secciones.experienciaTitulo}
        descripcion={c.secciones.experienciaTexto}
      >
        <ol className="tiempo">
          {c.experiencia.map((puesto) => (
            <li key={`${puesto.empresa}-${puesto.periodo}`} className="tiempo__item">
              <span className="tiempo__periodo">{puesto.periodo}</span>
              <h3>{puesto.cargo}</h3>
              <p className="tiempo__lugar">
                {puesto.url ? (
                  <a href={puesto.url} target="_blank" rel="noreferrer noopener">
                    {puesto.empresa}
                  </a>
                ) : (
                  puesto.empresa
                )}{' '}
                — {puesto.lugar}
              </p>
              <ul className="tiempo__lista">
                {puesto.actividades.map((actividad) => (
                  <li key={actividad}>{actividad}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion alterna titulo={c.secciones.competenciasTitulo}>
        <div className="rejilla rejilla--2">
          {c.competencias.map((grupo) => (
            <Tarjeta
              key={grupo.grupo}
              titulo={grupo.grupo}
              fichas={grupo.items}
              interactiva={false}
            />
          ))}
        </div>
      </Seccion>
    </>
  )
}
