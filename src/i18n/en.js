import { comun } from '../data/comun.js'

/** Site content in English. Mirrors the shape of es.js. */
export default {
  codigo: 'en',

  ui: {
    sitioTitulo: 'Jhon Arias Page',
    marca: 'Portfolio',
    menuAbrir: 'Open menu',
    navegacion: 'Main navigation',
    idioma: 'Language',
    estado: 'Status',
    estadoValor: 'In progress',
    volver: '← Back to home',
    verSeccion: 'View section →',
    descargarCV: 'Download CV (PDF)',
    verTodos: 'View all projects',
    repositorio: 'Repository',
    verMas: 'Learn more',
    filtroTodos: 'All',
    filtrarPor: 'Filter by category',
    hechoCon: 'Built with React and Vite, hosted on GitHub Pages.',
    noEncontrada: 'This page does not exist',
    noEncontradaTexto: 'The address you opened does not match any section of this site.',
    volverInicio: 'Back to home',
  },

  perfil: {
    credenciales: [
      'Surveying and Geomatics Engineer',
      'MSc in Remote Sensing',
      'GIS Developer',
    ],
    ubicacion: 'Armenia, Quindío, Colombia',
    saludo: 'Hello, and welcome to my personal website.',
    bienvenida:
      'Here you will find information about my professional experience, academic background, research work and favourite hobbies.',
    acercaDeMi:
      'I am a surveying and geomatics engineer specialising in geographic information systems programming, with a Master’s Degree in Remote Sensing from the Catholic University of Manizales. Since 2018 I have worked on engineering, construction and urban planning projects, and since 2022 I have focused full-time on remote sensing, development and automation, with an emphasis on land cover mapping, precision agriculture and artificial intelligence applied to geospatial data.',
    fotoAlt: 'Photograph of Jhon Eduin Arias Reyes',
    fotoVerticalAlt: 'Jhon Arias standing',
  },

  rutas: {
    inicio: { nombre: 'Home', titulo: 'Home' },
    hojaDeVida: {
      nombre: 'CV',
      titulo: 'Curriculum vitae',
      subtitulo: 'Academic background, professional experience and technical skills.',
      resumen:
        'My academic and professional path: degrees, complementary courses, roles held and technical skills. Includes the CV in PDF.',
    },
    portafolio: {
      nombre: 'Projects',
      titulo: 'Projects',
      subtitulo: 'Software, remote sensing, web mapping and automation projects.',
      resumen:
        'This section briefly describes the problems addressed, the technologies used and the results obtained.',
    },
    investigacion: {
      nombre: 'Research',
      titulo: 'Research',
      subtitulo: 'Research lines and scientific output.',
      resumen:
        'Here I bring together my research lines, published articles and ongoing manuscripts, each linked to the original document.',
    },
    eventos: {
      nombre: 'Events',
      titulo: 'Events and activities',
      subtitulo: 'Talks, conferences and academic participation.',
      resumen:
        'This section gathers my participation in academic settings: talks given, conferences and meetings attended.',
    },
    noticias: {
      nombre: 'News',
      titulo: 'News and press',
      subtitulo: 'Institutional coverage of my work.',
      resumen:
        'University coverage of my graduation and of my participation in international academic settings.',
    },
    sobreMi: {
      nombre: 'About me',
      titulo: 'About me',
      subtitulo: 'Personal interests and contact channels.',
      resumen:
        'A glimpse of what I do outside work and academic life: my interests and hobbies.',
    },
  },

  secciones: {
    acercaIndice: 'About me',
    acercaTitulo: 'Who I am',
    explorarIndice: 'Explore',
    explorarTitulo: 'What you will find here',
    explorarTexto: 'You can browse the different sections to learn more.',
    perfilIndice: 'Profile',
    perfilTitulo: 'Areas of work',
    perfilTexto:
      'Four areas that summarise my professional, academic and technical experience.',
    destacadosIndice: 'Highlights',
    destacadosTitulo: 'Featured projects',
    destacadosTexto: 'A selection of the work that best represents my technical profile.',
    formacionTitulo: 'Education',
    formacionTexto: 'Degrees obtained, from most to least recent.',
    cursosTitulo: 'Complementary courses',
    experienciaTitulo: 'Professional experience',
    experienciaTexto: 'Roles held, organisations and main activities.',
    competenciasTitulo: 'Technical skills',
    proyectosTitulo: 'Projects',
    proyectosTexto:
      'Each card describes the problem addressed, what I developed and the technologies used.',
    lineasTitulo: 'Research lines',
    lineasTexto: 'Topics I currently work on and that guide my projects.',
    publicacionesTitulo: 'Scientific publications',
    publicacionesTexto: 'Published articles, preprints and manuscripts in preparation.',
    ponenciasTitulo: 'Talks and presentations',
    ponenciasTexto: 'Participation as a speaker in academic settings.',
    congresosTitulo: 'Conferences attended',
    congresosTexto: 'Academic and professional events I have taken part in.',
    prensaTitulo: 'In the media',
    prensaTexto:
      'Articles published by the institutions. Each one links to the original piece.',
    leerNota: 'Read the full article',
    interesesTitulo: 'Interests',
    interesesTexto: 'Beyond technical work, these are the interests I keep up with.',
    contactoTitulo: 'Contact',
    contactoTarjeta: 'Get in touch',
    contactoTexto:
      'For professional enquiries, academic collaborations or project proposals, email is the most direct channel.',
  },

  noticias: [
    {
      fecha: '5 June 2026',
      medio: 'Catholic University of Manizales',
      titulo: 'UCM research in high-level international settings',
      resumen:
        'The university covers the presentation of our work on the interpretability of Google AlphaEarth at GeoAI 2026, held at the GeoAI Research Center of Ghent University, alongside Justin Guthrie of Northeastern University.',
      url: comun.noticias.geoai,
    },
    {
      fecha: '24 April 2023',
      medio: 'University of Quindío',
      titulo:
        'The first two Surveying and Geomatics Engineers of Uniquindío, the region and the country, graduate',
      resumen:
        'Coverage of the first graduating class of the Surveying and Geomatics Engineering programme, created in 2020. The programme trains professionals who provide geospatial information for land-use planning and risk management in the region.',
      url: comun.noticias.graduacion,
    },
  ],

  fortalezas: [
    {
      titulo: 'Scientific research',
      anios: '+2 years',
      texto:
        'Research projects on geospatial AI and modelling, since the beginning of my master’s degree in remote sensing.',
    },
    {
      titulo: 'Programming and software',
      anios: '+7 years',
      texto:
        'Design, deployment and creation of tools using C#, Python, R, JavaScript and SQL, with frameworks such as .NET, React, Node and Docker on Linux and Windows.',
    },
    {
      titulo: 'Technical leadership',
      anios: '+5 years',
      texto:
        'Built platforms to solve spatial data collection and analysis problems, automated repetitive tasks and designed algorithms to do more with less effort.',
    },
    {
      titulo: 'Knowledge dissemination',
      anios: '+2 years',
      texto:
        'Shared experience and research projects with students and colleagues, including an international oral presentation on embeddings and geospatial foundation models.',
    },
  ],

  educacion: [
    {
      titulo: 'Master’s Degree in Remote Sensing',
      institucion: 'Catholic University of Manizales',
      logo: comun.logos.ucm,
      lugar: 'Manizales, Caldas, Colombia',
      anio: '2026',
      nivel: 'Graduate',
    },
    {
      titulo: 'Geomatics Engineer',
      institucion: 'University of Quindío',
      logo: comun.logos.uq,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2023',
      nivel: 'Undergraduate',
    },
    {
      titulo: 'Surveyor (Technologist in Topography)',
      institucion: 'University of Quindío',
      logo: comun.logos.uq,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2020',
      nivel: 'Undergraduate',
    },
    {
      titulo: 'Technician in Administrative Assistance',
      institucion: 'National Learning Service (SENA)',
      logo: comun.logos.sena,
      lugar: 'Armenia, Quindío, Colombia',
      anio: '2016',
      nivel: 'Technical',
    },
  ],

  cursos: [
    {
      nombre:
        'Administration and Configuration of Spatial Data Infrastructure (SDI) Services',
      institucion: 'Center for Advanced Studies in Geomatics',
      anio: '2023',
    },
    {
      nombre: 'Fundamentals of Web Mapping and Geoportals',
      institucion: 'Mapping GIS Academy',
      anio: '2022',
    },
    {
      nombre: 'English Dot Works (beginner level)',
      institucion: 'National Learning Service (SENA)',
      anio: '2021',
    },
  ],

  experiencia: [
    {
      cargo: 'GIS Developer and Remote Sensing Expert',
      empresa: 'Sextante Drones S.A.S',
      url: comun.sitios.sextante,
      lugar: 'Armenia, Quindío, Colombia',
      periodo: '2022 — 2026',
      actividades: [
        'Implementation of a U-Net model for rice crop mapping in Colombia.',
        'Satellite image processing for agriculture and land cover mapping.',
        'Development of a satellite platform for web and mobile users.',
        'Development of an interactive web-based geographic viewer for agricultural tasks.',
        'Administration of geographic and relational databases.',
        'Multicriteria spatial analysis and development of QGIS plugins.',
        'Research and in situ data collection.',
      ],
    },
    {
      cargo: 'Geomatics Engineer and Surveyor',
      empresa: 'GEMA Constructora',
      url: comun.sitios.gema,
      lugar: 'Calarcá, Quindío, Colombia',
      periodo: '2021 — 2026',
      actividades: [
        'Topographic surveys for urban projects.',
        'Design and preparation of horizontal property and urban development maps.',
        'Technical surveying reports and geodesy tasks.',
        '3D modelling from photogrammetric data.',
        'Earthwork control and modelling.',
      ],
    },
    {
      cargo: 'Independent Geomatics Engineer',
      empresa: 'Independent practice',
      url: null,
      lugar: 'Colombia',
      periodo: '2018 — 2026',
      actividades: [
        'Design and preparation of horizontal property and urban development maps.',
        'Surveying activities and technical reports.',
        'Geodesy activities.',
      ],
    },
    {
      cargo: 'Surveying Technician',
      empresa: 'Engineering and Surveying Services',
      url: null,
      lugar: 'Pereira, Risaralda, Colombia',
      periodo: '2018 — 2020',
      actividades: [
        'Programming and automation of surveying reports in Visual Basic.',
        'Topographic surveys for urban projects.',
        'Design and preparation of horizontal property maps.',
        'Earthwork control and modelling.',
      ],
    },
  ],

  competencias: [
    {
      grupo: 'Programming languages',
      items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'HTML', 'CSS'],
    },
    {
      grupo: 'Frameworks and platforms',
      items: ['.NET', 'React', 'Node.js', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Docker'],
    },
    {
      grupo: 'GIS and geospatial software',
      items: ['ArcGIS Pro', 'QGIS', 'GeoServer', 'SNAP', 'Autodesk Civil 3D', 'AutoCAD'],
    },
    {
      grupo: 'Systems and data',
      items: ['Ubuntu', 'Windows', 'PostgreSQL / PostGIS', 'Google Earth Engine'],
    },
  ],

  lineas: [
    'Geospatial modelling',
    'Artificial intelligence applied to spatial data',
    'Precision agriculture',
    'Smart cities and digital twins',
    'Weather and experimental design',
    'Data science',
  ],

  publicaciones: [
    {
      estado: 'Published',
      fecha: 'June 2026',
      titulo:
        'Advancing Mangrove Classification and Biomass Estimation in the Colombian Pacific Through Google AlphaEarth Foundations and Machine Learning',
      autores:
        'Garcés-Gómez, Y. A., Arias-Reyes, J. E., Guzmán-Alvis, Á. I., Benavides-Martínez, I. F., & Guthrie, J.',
      medio: 'Computers, 15(7), 414',
      url: comun.publicaciones.manglares,
      etiqueta: 'View published article',
    },
    {
      estado: 'Preprint',
      fecha: 'March 2026',
      titulo:
        'What on Earth is AlphaEarth? Hierarchical structure and functional interpretability for global land cover',
      autores:
        'Benavides-Martínez, I. F., Guthrie, J., Arias, J. E., Garcés-Gómez, Y. A., Guzmán-Alvis, Á. I., Portilla-Cabrera, C. V., … & Ganguly, A. R.',
      medio: 'arXiv:2603.16911v1 [cs.LG]',
      url: comun.publicaciones.alphaearth,
      etiqueta: 'View preprint on arXiv',
    },
    {
      estado: 'In preparation',
      fecha: '2026',
      titulo:
        'Identification of rice crops using Google AlphaEarth Foundations geospatial embeddings: selection of latent dimensions via sequential forward selection and spatial cross-validation in the Eastern Plains of Colombia',
      autores: 'Arias-Reyes, J. E. and collaborators',
      medio: 'Manuscript in preparation',
      url: null,
      etiqueta: null,
    },
  ],

  ponencias: [
    {
      anio: '2026',
      titulo:
        'What on Earth Is AlphaEarth? Opening the Black Box of Foundation Models for Public Understanding and Use',
      tipo: 'Oral presentation',
      lugar: 'Ghent, Belgium (in person)',
    },
  ],

  eventos: [
    {
      anio: '2026',
      nombre:
        '1st International Conference on Geospatial Artificial Intelligence (GeoAI 2026)',
      participacion: 'Attendee',
      lugar: 'International',
    },
    {
      anio: '2019',
      nombre:
        '9th International and 12th National Congress on Topography, Geomatics and Geodesy, and 1st International Meeting of Topography Students',
      participacion: 'Attendee',
      lugar: 'Colombia',
    },
  ],

  proyectos: [
    {
      id: 'unet-arroz',
      categoria: 'Remote sensing and AI',
      titulo: 'Rice crop mapping with U-Net',
      descripcion:
        'Implementation of a U-Net convolutional neural network to identify rice crops in Colombia from satellite image time series.',
      tecnologias: ['Python', 'PyTorch', 'Google Earth Engine', 'PostGIS'],
      repo: null,
      demo: null,
      destacado: true,
    },
    {
      id: 'embeddings-alphaearth',
      categoria: 'Applied research',
      titulo: 'AlphaEarth Foundations geospatial embeddings',
      descripcion:
        'Selection of latent dimensions through sequential forward selection and spatial cross-validation for land cover and crop classification.',
      tecnologias: ['Python', 'scikit-learn', 'R', 'Google Earth Engine'],
      repo: null,
      demo: comun.publicaciones.alphaearth,
      destacado: true,
    },
    {
      id: 'visor-agricola',
      categoria: 'Web mapping',
      titulo: 'Interactive geographic viewer for agriculture',
      descripcion:
        'Web viewer for monitoring agricultural parcels: layer publishing, geographic services, tile generation and real-time spatial queries.',
      tecnologias: ['React', 'Node.js', 'GeoServer', 'PostgreSQL / PostGIS', 'Docker'],
      repo: null,
      demo: null,
      destacado: true,
    },
    {
      id: 'plataforma-satelital',
      categoria: 'Platform development',
      titulo: 'Web and mobile satellite platform',
      descripcion:
        'Platform delivering satellite products to end users, with scheduled image processing and per-parcel index delivery.',
      tecnologias: ['C#', '.NET', 'React', 'SQL', 'Docker'],
      repo: null,
      demo: null,
      destacado: false,
    },
    {
      id: 'plugins-qgis',
      categoria: 'Automation',
      titulo: 'QGIS plugins and automation',
      descripcion:
        'QGIS plugins and automation scripts that cut down repetitive tasks in cartographic workflows and data quality control.',
      tecnologias: ['Python', 'PyQGIS', 'Qt'],
      repo: null,
      demo: null,
      destacado: false,
    },
    {
      id: 'topografia-vba',
      categoria: 'Automation',
      titulo: 'Automation of surveying reports',
      descripcion:
        'Automatic generation of reports and field books from raw total station data, reducing delivery time on every project.',
      tecnologias: ['Visual Basic', 'Excel', 'AutoCAD'],
      repo: null,
      demo: null,
      destacado: false,
    },
  ],

  intereses: [
    {
      titulo: 'Programming',
      texto: 'Personal projects, automation and exploring new tools.',
    },
    { titulo: 'Reading', texto: 'Books on science and literature.' },
    {
      titulo: 'Acoustic guitar',
      texto: 'Steady practice and learning in my free time.',
    },
    {
      titulo: 'Gym and nature',
      texto: 'Training, hiking and walks outdoors.',
    },
  ],
}
