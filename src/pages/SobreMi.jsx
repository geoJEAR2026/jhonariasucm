import { comun } from '../data/comun.js'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function SobreMi({ titulo, subtitulo }) {
  const { c } = useIdioma()

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo} />

      <Seccion titulo={c.secciones.interesesTitulo} descripcion={c.secciones.interesesTexto}>
        <div className="rejilla rejilla--2">
          {c.intereses.map((interes) => (
            <Tarjeta key={interes.titulo} titulo={interes.titulo}>
              <p>{interes.texto}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>

      <Seccion alterna titulo={c.secciones.contactoTitulo}>
        <Tarjeta
          titulo={c.secciones.contactoTarjeta}
          etiqueta={c.perfil.ubicacion}
          interactiva={false}
        >
          <p>{c.secciones.contactoTexto}</p>
          <div className="tarjeta__pie">
            <a className="boton boton--primario" href={`mailto:${comun.email}`}>
              {comun.email}
            </a>
            {comun.enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                className="boton boton--secundario"
                href={enlace.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {enlace.nombre}
              </a>
            ))}
          </div>
        </Tarjeta>
      </Seccion>
    </>
  )
}
