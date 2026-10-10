import { comun } from '../data/comun.js'
import { rutas } from '../rutas.js'
import { href } from '../router.jsx'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import Icono from '../components/Icono.jsx'

/**
 * Vista de inicio: solo resúmenes. El detalle de cada tema vive en su
 * propia vista, enlazada desde las tarjetas de navegación.
 */
export default function Inicio() {
  const { c } = useIdioma()
  const destacados = c.proyectos.filter((proyecto) => proyecto.destacado)
  const secciones = rutas.filter((entrada) => entrada.enResumen)

  return (
    <>
      <header className="portada">
        <div className="contenedor portada__rejilla">
          <div>
            <h1>{comun.nombre}</h1>
            <ul className="portada__credenciales">
              {c.perfil.credenciales.map((credencial) => (
                <li key={credencial}>{credencial}</li>
              ))}
            </ul>

            <p className="portada__saludo">{c.perfil.saludo}</p>
            <p className="portada__resumen">{c.perfil.bienvenida}</p>

            <div className="portada__redes">
              {comun.enlaces.map((enlace) => (
                <a
                  key={enlace.nombre}
                  href={enlace.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={enlace.nombre}
                >
                  <Icono nombre={enlace.icono} tamano={20} />
                  <span>{enlace.nombre}</span>
                </a>
              ))}
            </div>
          </div>

          <img
            className="portada__foto"
            src={comun.foto}
            alt={c.perfil.fotoAlt}
            loading="eager"
          />
        </div>
      </header>

      <section className="acerca">
        <div className="contenedor acerca__rejilla">
          <div className="acerca__texto">
            <span className="encabezado__indice">{c.secciones.acercaIndice}</span>
            <h2>{c.secciones.acercaTitulo}</h2>
            <p className="texto-destacado">{c.perfil.acercaDeMi}</p>
          </div>

          <img
            className="acerca__foto"
            src={comun.fotoVertical}
            alt={c.perfil.fotoVerticalAlt}
            loading="lazy"
          />
        </div>
      </section>

      <Seccion
        indice={c.secciones.explorarIndice}
        titulo={c.secciones.explorarTitulo}
        descripcion={c.secciones.explorarTexto}
      >
        <div className="rejilla rejilla--2">
          {secciones.map((seccion) => {
            const textos = c.rutas[seccion.clave]
            return (
              <a key={seccion.ruta} className="acceso" href={href(seccion.ruta)}>
                <span className="acceso__indice">{seccion.indice}</span>
                <h3>{textos.titulo}</h3>
                <p>{textos.resumen}</p>
                <span className="acceso__ir">{c.ui.verSeccion}</span>
              </a>
            )
          })}
        </div>
      </Seccion>

      <Seccion
        alterna
        indice={c.secciones.perfilIndice}
        titulo={c.secciones.perfilTitulo}
        descripcion={c.secciones.perfilTexto}
      >
        <div className="rejilla rejilla--2">
          {c.fortalezas.map((item) => (
            <Tarjeta key={item.titulo} etiqueta={item.anios} titulo={item.titulo}>
              <p>{item.texto}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>

      <Seccion
        indice={c.secciones.destacadosIndice}
        titulo={c.secciones.destacadosTitulo}
        descripcion={c.secciones.destacadosTexto}
      >
        <div className="rejilla rejilla--3">
          {destacados.map((proyecto) => (
            <Tarjeta
              key={proyecto.id}
              etiqueta={proyecto.categoria}
              titulo={proyecto.titulo}
              fichas={proyecto.tecnologias}
            >
              <p>{proyecto.descripcion}</p>
            </Tarjeta>
          ))}
        </div>
        <p style={{ marginTop: '2rem' }}>
          <a className="boton boton--primario" href={href('/portafolio')}>
            {c.ui.verTodos}
          </a>
        </p>
      </Seccion>
    </>
  )
}
