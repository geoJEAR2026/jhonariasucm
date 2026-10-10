import Inicio from './pages/Inicio.jsx'
import HojaDeVida from './pages/HojaDeVida.jsx'
import Portafolio from './pages/Portafolio.jsx'
import Investigacion from './pages/Investigacion.jsx'
import Eventos from './pages/Eventos.jsx'
import SobreMi from './pages/SobreMi.jsx'

/**
 * Catálogo de vistas. Aquí solo va lo que no depende del idioma:
 * la dirección, el número y el componente. Los rótulos (nombre,
 * título, subtítulo y resumen) salen de src/i18n/<idioma>.js, de la
 * entrada que indica `clave`.
 */
export const rutas = [
  {
    ruta: '/',
    clave: 'inicio',
    indice: '',
    componente: Inicio,
    enMenu: true,
    enResumen: false,
  },
  {
    ruta: '/hoja-de-vida',
    clave: 'hojaDeVida',
    indice: '01',
    componente: HojaDeVida,
    enMenu: true,
    enResumen: true,
  },
  {
    ruta: '/portafolio',
    clave: 'portafolio',
    indice: '02',
    componente: Portafolio,
    enMenu: true,
    enResumen: true,
  },
  {
    ruta: '/investigacion',
    clave: 'investigacion',
    indice: '03',
    componente: Investigacion,
    enMenu: true,
    enResumen: true,
  },
  {
    ruta: '/eventos',
    clave: 'eventos',
    indice: '04',
    componente: Eventos,
    enMenu: true,
    enResumen: true,
  },
  {
    ruta: '/sobre-mi',
    clave: 'sobreMi',
    indice: '05',
    componente: SobreMi,
    enMenu: true,
    enResumen: true,
  },
]

export const rutaPorDefecto = rutas[0]

export function buscarRuta(ruta) {
  return rutas.find((entrada) => entrada.ruta === ruta)
}
