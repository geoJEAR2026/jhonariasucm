import { comun } from '../data/comun.js'

/** Todo el contenido del sitio en español. */
export default {
  codigo: 'es',

  // Textos de interfaz, repetidos en varias vistas.
  ui: {
    marca: 'Portafolio',
    menuAbrir: 'Abrir menú',
    navegacion: 'Navegación principal',
    idioma: 'Idioma',
    estado: 'Estado',
    estadoValor: 'En desarrollo',
    volver: '← Volver al inicio',
    verSeccion: 'Ver sección →',
    descargarCV: 'Descargar CV en PDF',
    verTodos: 'Ver todos los proyectos',
    repositorio: 'Repositorio',
    verMas: 'Ver más',
    filtroTodos: 'Todos',
    filtrarPor: 'Filtrar por categoría',
    hechoCon: 'Hecho con React y Vite, publicado en GitHub Pages.',
    noEncontrada: 'Esta página no existe',
    noEncontradaTexto: 'La dirección que abrió no corresponde a ninguna sección del sitio.',
    volverInicio: 'Volver al inicio',
  },

  perfil: {
    credenciales: [
      'Ingeniero Topográfico y Geomático',
      'Magíster en Teledetección',
      'Desarrollador GIS',
    ],
    ubicacion: 'Armenia, Quindío, Colombia',
    saludo: 'Hola, bienvenido a mi sitio web personal.',
    bienvenida:
      'En este sitio encontrará información acerca de mi experiencia profesional, formación académica, experiencia investigativa y mis pasatiempos favoritos.',
    acercaDeMi:
      'Soy ingeniero topográfico y geomático, especializado en programación de sistemas de información geográfica, con Maestría en Teledetección de la Universidad Católica de Manizales. Desde 2018 trabajo en proyectos de ingeniería, construcción y planificación urbana, y desde 2022 me dedico a teledetección, desarrollo y automatización, con énfasis en mapeo de coberturas, agricultura de precisión e inteligencia artificial aplicada a datos geoespaciales.',
    fotoAlt: 'Fotografía de Jhon Eduin Arias Reyes',
    fotoVerticalAlt: 'Jhon Arias de pie',
  },

  // Rótulos de cada vista: menú, tarjeta de inicio y encabezado.
  rutas: {
    inicio: { nombre: 'Inicio', titulo: 'Inicio' },
    hojaDeVida: {
      nombre: 'Hoja de vida',
      titulo: 'Hoja de vida',
      subtitulo: 'Formación académica, experiencia profesional y competencias técnicas.',
      resumen:
        'Mi recorrido académico y profesional: títulos obtenidos, cursos complementarios, cargos desempeñados y competencias técnicas. Incluye el CV en PDF.',
    },
    portafolio: {
      nombre: 'Proyectos',
      titulo: 'Proyectos',
      subtitulo: 'Proyectos de software, teledetección, cartografía web y automatización.',
      resumen:
        'Esta sección describe de forma breve los problemas abordados, las tecnologías implementadas y los resultados obtenidos.',
    },
    investigacion: {
      nombre: 'Investigación',
      titulo: 'Investigación',
      subtitulo: 'Líneas de trabajo y producción científica.',
      resumen:
        'Aquí reúno mis líneas de trabajo, los artículos publicados y los manuscritos en curso, con enlace al documento original.',
    },
    eventos: {
      nombre: 'Eventos',
      titulo: 'Eventos y actividades',
      subtitulo: 'Ponencias, congresos y participación académica.',
      resumen:
        'Esta sección recoge mi participación en espacios académicos: ponencias presentadas, congresos y encuentros a los que he asistido.',
    },
    sobreMi: {
      nombre: 'Sobre mí',
      titulo: 'Sobre mí',
      subtitulo: 'Intereses personales y canales de contacto.',
      resumen:
        'Un vistazo a lo que hago fuera del trabajo y la vida académica: mis intereses y pasatiempos.',
    },
  },

  // Encabezados de las secciones dentro de cada vista.
  secciones: {
    acercaIndice: 'Acerca de mí',
    acercaTitulo: 'Quién soy',
    explorarIndice: 'Explorar',
    explorarTitulo: 'Qué encontrará en este sitio',
    explorarTexto: 'Puede explorar las diferentes secciones y conocer más detalles.',
    perfilIndice: 'Perfil',
    perfilTitulo: 'Áreas de trabajo',
    perfilTexto:
      'Cuatro frentes que resumen mi experiencia profesional, académica y técnica.',
    destacadosIndice: 'Destacados',
    destacadosTitulo: 'Proyectos destacados',
    destacadosTexto:
      'Una selección de los trabajos que mejor representan mi perfil técnico.',
    formacionTitulo: 'Formación académica',
    formacionTexto: 'Títulos obtenidos, del más reciente al más antiguo.',
    cursosTitulo: 'Cursos complementarios',
    experienciaTitulo: 'Experiencia profesional',
    experienciaTexto: 'Cargos desempeñados, entidades y actividades principales.',
    competenciasTitulo: 'Competencias técnicas',
    proyectosTitulo: 'Proyectos',
    proyectosTexto:
      'Cada ficha describe el problema abordado, lo que desarrollé y las tecnologías utilizadas.',
    lineasTitulo: 'Líneas de investigación',
    lineasTexto: 'Temas en los que trabajo actualmente y que orientan mis proyectos.',
    publicacionesTitulo: 'Publicaciones científicas',
    publicacionesTexto: 'Artículos publicados, preprints y manuscritos en preparación.',
    ponenciasTitulo: 'Ponencias y presentaciones',
    ponenciasTexto: 'Participación como ponente en espacios académicos.',
    congresosTitulo: 'Congresos y asistencia',
    congresosTexto: 'Eventos académicos y profesionales a los que he asistido.',
    interesesTitulo: 'Intereses',
    interesesTexto: 'Fuera del trabajo técnico, estos son los intereses que mantengo.',
    contactoTitulo: 'Contacto',
    contactoTarjeta: 'Escríbame',
    contactoTexto:
      'Para consultas profesionales, colaboraciones académicas o propuestas de proyecto, el correo es el canal más directo.',
  },

  fortalezas: [
    {
      titulo: 'Investigación científica',
      anios: '+2 años',
      texto:
        'Proyectos de investigación en IA geoespacial y modelamiento, desde el inicio de la maestría en teledetección.',
    },
    {
      titulo: 'Programación y software',
      anios: '+7 años',
      texto:
        'Diseño, despliegue y creación de herramientas con C#, Python, R, JavaScript, SQL y frameworks como .NET, React, Node y Docker sobre Linux y Windows.',
    },
    {
      titulo: 'Liderazgo técnico',
      anios: '+5 años',
      texto:
        'Creación de plataformas para resolver problemas de captura y análisis de datos espaciales, automatización de tareas repetitivas y diseño de algoritmos.',
    },
    {
      titulo: 'Divulgación del conocimiento',
      anios: '+2 años',
      texto:
        'Socialización de experiencias y proyectos con estudiantes y colegas, incluida una ponencia internacional sobre embeddings y modelos fundacionales geoespaciales.',
    },
  ],

  educacion: [
    {
      titulo: 'Maestría en Teledetección',
      institucion: 'Universidad Católica de Manizales',
      logo: comun.logos.ucm,
      lugar: 'Manizales, Caldas, Colombia',
      anio: '2026',
      nivel: 'Posgrado',
    },
    {
      titulo: 'Ingeniero en Geomática',
      institucion: 'Universidad del Quindío',
      logo: comun.logos.uq,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2023',
      nivel: 'Pregrado',
    },
    {
      titulo: 'Tecnólogo en Topografía',
      institucion: 'Universidad del Quindío',
      logo: comun.logos.uq,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2020',
      nivel: 'Pregrado',
    },
    {
      titulo: 'Técnico en Asistencia Administrativa',
      institucion: 'Servicio Nacional de Aprendizaje (SENA)',
      logo: comun.logos.sena,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2016',
      nivel: 'Técnico',
    },
  ],

  cursos: [
    {
      nombre:
        'Administración y configuración de servicios de Infraestructura de Datos Espaciales (IDE)',
      institucion: 'Centro de Estudios Avanzados en Geomática',
      anio: '2023',
    },
    {
      nombre: 'Fundamentos de cartografía web y geoportales',
      institucion: 'Mapping GIS Academy',
      anio: '2022',
    },
    {
      nombre: 'English Dot Works (nivel básico)',
      institucion: 'Servicio Nacional de Aprendizaje (SENA)',
      anio: '2021',
    },
  ],

  experiencia: [
    {
      cargo: 'Desarrollador SIG y experto en teledetección',
      empresa: 'Sextante Drones S.A.S',
      url: comun.sitios.sextante,
      lugar: 'Armenia, Quindío, Colombia',
      periodo: '2022 — 2026',
      actividades: [
        'Implementación de un modelo U-Net para el mapeo de cultivos de arroz en Colombia.',
        'Procesamiento de imágenes satelitales para agricultura y mapeo de coberturas.',
        'Desarrollo de una plataforma satelital para usuarios web y móviles.',
        'Desarrollo de un visor geográfico web interactivo para tareas agrícolas.',
        'Administración de bases de datos geográficas y relacionales.',
        'Análisis espacial multicriterio y desarrollo de plugins para QGIS.',
        'Investigación y levantamiento de datos en campo.',
      ],
    },
    {
      cargo: 'Ingeniero en Geomática y topógrafo',
      empresa: 'GEMA Constructora',
      url: comun.sitios.gema,
      lugar: 'Calarcá, Quindío, Colombia',
      periodo: '2021 — 2026',
      actividades: [
        'Levantamientos topográficos para proyectos urbanos.',
        'Diseño y elaboración de planos de propiedad horizontal y urbanismo.',
        'Informes técnicos de topografía y actividades de geodesia.',
        'Modelado 3D a partir de datos fotogramétricos.',
        'Control y modelado de movimiento de tierras.',
      ],
    },
    {
      cargo: 'Ingeniero en Geomática independiente',
      empresa: 'Ejercicio independiente',
      url: null,
      lugar: 'Colombia',
      periodo: '2018 — 2026',
      actividades: [
        'Diseño y elaboración de planos de propiedad horizontal y urbanismo.',
        'Actividades de topografía e informes técnicos.',
        'Actividades de geodesia.',
      ],
    },
    {
      cargo: 'Técnico en topografía',
      empresa: 'Engineering and Surveying Services',
      url: null,
      lugar: 'Pereira, Risaralda, Colombia',
      periodo: '2018 — 2020',
      actividades: [
        'Programación y automatización de informes topográficos en Visual Basic.',
        'Levantamientos topográficos para proyectos urbanos.',
        'Diseño y elaboración de planos de propiedad horizontal.',
        'Control y modelado de movimiento de tierras.',
      ],
    },
  ],

  competencias: [
    {
      grupo: 'Lenguajes de programación',
      items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'HTML', 'CSS'],
    },
    {
      grupo: 'Frameworks y plataformas',
      items: ['.NET', 'React', 'Node.js', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Docker'],
    },
    {
      grupo: 'Software SIG y geoespacial',
      items: ['ArcGIS Pro', 'QGIS', 'GeoServer', 'SNAP', 'Autodesk Civil 3D', 'AutoCAD'],
    },
    {
      grupo: 'Sistemas y datos',
      items: ['Ubuntu', 'Windows', 'PostgreSQL / PostGIS', 'Google Earth Engine'],
    },
  ],

  lineas: [
    'Modelamiento geoespacial',
    'Inteligencia artificial aplicada a datos espaciales',
    'Agricultura de precisión',
    'Ciudades inteligentes y gemelos digitales',
    'Clima y diseño experimental',
    'Ciencia de datos',
  ],

  publicaciones: [
    {
      estado: 'Publicado',
      fecha: 'Junio 2026',
      titulo:
        'Advancing Mangrove Classification and Biomass Estimation in the Colombian Pacific Through Google AlphaEarth Foundations and Machine Learning',
      autores:
        'Garcés-Gómez, Y. A., Arias-Reyes, J. E., Guzmán-Alvis, Á. I., Benavides-Martínez, I. F., & Guthrie, J.',
      medio: 'Computers, 15(7), 414',
      url: comun.publicaciones.manglares,
      etiqueta: 'Ver artículo publicado',
    },
    {
      estado: 'Preprint',
      fecha: 'Marzo 2026',
      titulo:
        'What on Earth is AlphaEarth? Hierarchical structure and functional interpretability for global land cover',
      autores:
        'Benavides-Martínez, I. F., Guthrie, J., Arias, J. E., Garcés-Gómez, Y. A., Guzmán-Alvis, Á. I., Portilla-Cabrera, C. V., … & Ganguly, A. R.',
      medio: 'arXiv:2603.16911v1 [cs.LG]',
      url: comun.publicaciones.alphaearth,
      etiqueta: 'Ver preprint en arXiv',
    },
    {
      estado: 'En preparación',
      fecha: '2026',
      titulo:
        'Identificación de cultivos de arroz mediante embeddings geoespaciales de Google AlphaEarth Foundations: selección de dimensiones latentes por selección secuencial hacia adelante y validación cruzada espacial en los Llanos Orientales de Colombia',
      autores: 'Arias-Reyes, J. E. y colaboradores',
      medio: 'Manuscrito en preparación',
      url: null,
      etiqueta: null,
    },
  ],

  ponencias: [
    {
      anio: '2026',
      titulo:
        'What on Earth Is AlphaEarth? Opening the Black Box of Foundation Models for Public Understanding and Use',
      tipo: 'Ponencia oral',
      lugar: 'Gante, Bélgica (presencial)',
    },
  ],

  eventos: [
    {
      anio: '2026',
      nombre:
        '1er Congreso Internacional de Inteligencia Artificial Geoespacial (GeoAI 2026)',
      participacion: 'Asistente',
      lugar: 'Internacional',
    },
    {
      anio: '2019',
      nombre:
        '9º Congreso Internacional y 12º Nacional de Topografía, Geomática y Geodesia, y 1er Encuentro Internacional de Estudiantes de Topografía',
      participacion: 'Asistente',
      lugar: 'Colombia',
    },
  ],

  proyectos: [
    {
      id: 'unet-arroz',
      categoria: 'Teledetección e IA',
      titulo: 'Mapeo de cultivos de arroz con U-Net',
      descripcion:
        'Implementación de una red neuronal convolucional U-Net para la identificación de cultivos de arroz en Colombia a partir de series de imágenes satelitales.',
      tecnologias: ['Python', 'PyTorch', 'Google Earth Engine', 'PostGIS'],
      repo: null,
      demo: null,
      destacado: true,
    },
    {
      id: 'embeddings-alphaearth',
      categoria: 'Investigación aplicada',
      titulo: 'Embeddings geoespaciales AlphaEarth Foundations',
      descripcion:
        'Selección de dimensiones latentes mediante selección secuencial hacia adelante y validación cruzada espacial para clasificación de coberturas y cultivos.',
      tecnologias: ['Python', 'scikit-learn', 'R', 'Google Earth Engine'],
      repo: null,
      demo: comun.publicaciones.alphaearth,
      destacado: true,
    },
    {
      id: 'visor-agricola',
      categoria: 'Cartografía web',
      titulo: 'Visor geográfico interactivo para agricultura',
      descripcion:
        'Visor web para el seguimiento de predios agrícolas: publicación de capas, servicios geográficos, generación de teselas y consultas espaciales en tiempo real.',
      tecnologias: ['React', 'Node.js', 'GeoServer', 'PostgreSQL / PostGIS', 'Docker'],
      repo: null,
      demo: null,
      destacado: true,
    },
    {
      id: 'plataforma-satelital',
      categoria: 'Desarrollo de plataformas',
      titulo: 'Plataforma satelital web y móvil',
      descripcion:
        'Plataforma para la entrega de productos satelitales a usuarios finales, con procesamiento programado de imágenes y entrega de índices por predio.',
      tecnologias: ['C#', '.NET', 'React', 'SQL', 'Docker'],
      repo: null,
      demo: null,
      destacado: false,
    },
    {
      id: 'plugins-qgis',
      categoria: 'Automatización',
      titulo: 'Plugins y automatizaciones para QGIS',
      descripcion:
        'Complementos para QGIS y scripts de automatización que reducen tareas repetitivas en flujos de trabajo cartográficos y de control de calidad de datos.',
      tecnologias: ['Python', 'PyQGIS', 'Qt'],
      repo: null,
      demo: null,
      destacado: false,
    },
    {
      id: 'topografia-vba',
      categoria: 'Automatización',
      titulo: 'Automatización de informes topográficos',
      descripcion:
        'Generación automática de informes y carteras de campo a partir de datos crudos de estación total, reduciendo el tiempo de entrega de cada proyecto.',
      tecnologias: ['Visual Basic', 'Excel', 'AutoCAD'],
      repo: null,
      demo: null,
      destacado: false,
    },
  ],

  intereses: [
    {
      titulo: 'Programación',
      texto: 'Proyectos propios, automatizaciones y exploración de nuevas herramientas.',
    },
    { titulo: 'Lectura', texto: 'Libros de ciencia y literatura.' },
    {
      titulo: 'Guitarra acústica',
      texto: 'Práctica y aprendizaje constante en el tiempo libre.',
    },
    {
      titulo: 'Gimnasio y naturaleza',
      texto: 'Entrenamiento, caminatas y recorridos al aire libre.',
    },
  ],
}
