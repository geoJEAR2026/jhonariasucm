import { useMemo, useState } from 'react'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'
import Seccion from '../components/Seccion.jsx'
import Tarjeta from '../components/Tarjeta.jsx'
import EncabezadoVista from '../components/EncabezadoVista.jsx'

export default function Portafolio({ titulo, subtitulo }) {
  const { c } = useIdioma()
  const [filtro, setFiltro] = useState(null)

  const categorias = useMemo(
    () => [...new Set(c.proyectos.map((proyecto) => proyecto.categoria))],
    [c.proyectos]
  )

  // filtro en null significa "todas": así la selección no se pierde al
  // cambiar de idioma, porque los nombres de categoría también cambian.
  const visibles = filtro
    ? c.proyectos.filter((proyecto) => proyecto.categoria === filtro)
    : c.proyectos

  return (
    <>
      <EncabezadoVista titulo={titulo} subtitulo={subtitulo} />

      <Seccion
        titulo={c.secciones.proyectosTitulo}
        descripcion={c.secciones.proyectosTexto}
      >
        <div
          className="fichas"
          style={{ marginBottom: '2rem' }}
          role="group"
          aria-label={c.ui.filtrarPor}
        >
          <button
            type="button"
            className={`boton ${filtro === null ? 'boton--primario' : 'boton--secundario'}`}
            onClick={() => setFiltro(null)}
            aria-pressed={filtro === null}
          >
            {c.ui.filtroTodos}
          </button>

          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={`boton ${filtro === categoria ? 'boton--primario' : 'boton--secundario'}`}
              onClick={() => setFiltro(categoria)}
              aria-pressed={filtro === categoria}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="rejilla rejilla--3">
          {visibles.map((proyecto) => (
            <Tarjeta
              key={proyecto.id}
              etiqueta={proyecto.categoria}
              titulo={proyecto.titulo}
              fichas={proyecto.tecnologias}
              enlaces={[
                proyecto.repo && { url: proyecto.repo, texto: c.ui.repositorio },
                proyecto.demo && { url: proyecto.demo, texto: c.ui.verMas },
              ].filter(Boolean)}
            >
              <p>{proyecto.descripcion}</p>
            </Tarjeta>
          ))}
        </div>
      </Seccion>
    </>
  )
}
