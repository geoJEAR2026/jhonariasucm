import { comun } from '../data/comun.js'
import { useIdioma } from '../i18n/IdiomaContexto.jsx'

export default function Pie() {
  const { c } = useIdioma()

  return (
    <footer className="pie">
      <div className="contenedor pie__interior">
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} {comun.nombre}. {c.ui.hechoCon}
        </p>
        <p style={{ margin: 0 }}>
          <a href={`mailto:${comun.email}`}>{comun.email}</a>
        </p>
      </div>
    </footer>
  )
}
