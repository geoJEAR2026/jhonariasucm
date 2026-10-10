import { useEffect } from 'react'
import { useRuta, useSubirAlCambiar, href } from './router.jsx'
import { buscarRuta, rutaPorDefecto } from './rutas.js'
import { useIdioma } from './i18n/IdiomaContexto.jsx'
import Navegacion from './components/Navegacion.jsx'
import Pie from './components/Pie.jsx'

export default function App() {
  const ruta = useRuta()
  const { c } = useIdioma()
  const vista = buscarRuta(ruta)
  const textos = vista ? c.rutas[vista.clave] : null

  useSubirAlCambiar(ruta)

  // Título del navegador, en el idioma activo.
  useEffect(() => {
    document.title = c.ui.sitioTitulo
  }, [c])

  return (
    <>
      <Navegacion rutaActual={ruta} />
      <main>
        {vista ? (
          <vista.componente titulo={textos.titulo} subtitulo={textos.subtitulo} />
        ) : (
          <NoEncontrada />
        )}
      </main>
      <Pie />
    </>
  )
}

function NoEncontrada() {
  const { c } = useIdioma()

  return (
    <section className="seccion">
      <div className="contenedor">
        <span className="encabezado__indice">Error 404</span>
        <h1>{c.ui.noEncontrada}</h1>
        <p>{c.ui.noEncontradaTexto}</p>
        <a className="boton boton--primario" href={href(rutaPorDefecto.ruta)}>
          {c.ui.volverInicio}
        </a>
      </div>
    </section>
  )
}
