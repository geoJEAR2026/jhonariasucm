/**
 * Datos que NO cambian con el idioma: direcciones, imágenes e
 * identificadores. Los archivos de texto (src/i18n/es.js y en.js) los
 * importan, así una URL se corrige en un solo lugar.
 *
 * No incluye documento de identidad ni teléfono.
 */
/**
 * Antepone la ruta base del sitio a un archivo de /public.
 *
 * En GitHub Pages el sitio vive en /jhonariasucm/, no en la raíz del
 * dominio: una ruta como '/img/perfil.jpg' apuntaría fuera del sitio.
 * BASE_URL lo resuelve Vite al compilar, según `base` en vite.config.js.
 */
const archivo = (ruta) => `${import.meta.env.BASE_URL}${ruta}`.replace(/\/{2,}/g, '/')

export const comun = {
  nombre: 'Jhon Eduin Arias Reyes',
  nombreCorto: 'Jhon Arias',
  email: 'jhon.arias2@ucm.edu.co',
  foto: archivo('img/perfil.jpg'),
  fotoVertical: archivo('img/perfil-vertical.jpg'),
  cv: archivo('documents/CV-Jhon-Arias.pdf'),

  enlaces: [
    {
      nombre: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jhon-edwin-arias-reyes-5a98932ab',
      icono: 'linkedin',
    },
    { nombre: 'ORCID', url: 'https://orcid.org/TU-ORCID', icono: 'orcid' },
    { nombre: 'GitHub', url: 'https://github.com/geoJEAR2026', icono: 'github' },
  ],

  logos: {
    ucm: archivo('img/ucm.jpg'),
    uq: archivo('img/uq.jpg'),
    sena: null,
  },

  sitios: {
    sextante: 'https://sextantedrones.com/',
    gema: 'https://gemaconstructorasas.com/',
  },

  publicaciones: {
    manglares: 'https://doi.org/10.3390/computers15070414',
    alphaearth: 'https://doi.org/10.48550/arXiv.2603.16911',
  },
}
