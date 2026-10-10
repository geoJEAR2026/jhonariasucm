/**
 * Datos que NO cambian con el idioma: direcciones, imágenes e
 * identificadores. Los archivos de texto (src/i18n/es.js y en.js) los
 * importan, así una URL se corrige en un solo lugar.
 *
 * No incluye documento de identidad ni teléfono.
 */
export const comun = {
  nombre: 'Jhon Eduin Arias Reyes',
  nombreCorto: 'Jhon Arias',
  email: 'jhon.arias2@ucm.edu.co',
  foto: '/img/perfil.jpg',
  fotoVertical: '/img/perfil-vertical.jpg',
  cv: '/documents/CV-Jhon-Arias.pdf',

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
    ucm: '/img/ucm.jpg',
    uq: '/img/uq.jpg',
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
