# Página web personal — Jhon Arias

Hoja de vida digital, portafolio tecnológico y perfil de investigación.
Sitio **100 % frontend** (sin código de servidor), pensado para GitHub Pages.

## Tecnologías

- **React 18** — componentes e interfaz.
- **Vite 5** — servidor de desarrollo y empaquetado.
- **Node.js** — gestión de módulos y librerías con npm.
- **CSS propio** con variables — dos colores base: azul cobalto (dominante) y blanco/gris claro (secundario).

## Estructura

```
Code/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── .nojekyll
│   ├── documents/          # CV en PDF (versión pública, sin datos sensibles)
│   └── img/                # favicon.svg y perfil.jpg
├── src/
│   ├── main.jsx            # punto de entrada
│   ├── App.jsx             # elige qué vista mostrar según la URL
│   ├── router.jsx          # enrutador propio basado en hash
│   ├── rutas.js            # catálogo de vistas (menú + tarjetas + enrutado)
│   ├── components/         # Navegacion, Seccion, Tarjeta, Fichas, EncabezadoVista, Pie
│   ├── pages/              # una vista por archivo
│   ├── i18n/               # es.js, en.js (todo el texto) y IdiomaContexto.jsx
│   ├── data/comun.js       # datos sin idioma: enlaces, imágenes, DOIs
│   └── styles/             # global.css (sistema de diseño) y componentes.css
└── .github/workflows/deploy.yml
```

El contenido está separado del diseño: para actualizar el sitio basta con editar
`src/i18n/es.js` y `src/i18n/en.js`, sin tocar componentes.

## Dos idiomas

El sitio está en español e inglés. Los dos archivos de `src/i18n/` tienen **la misma
estructura**: si agrega un campo en uno, agréguelo también en el otro.

- `src/i18n/es.js` y `src/i18n/en.js` — todo el texto visible.
- `src/data/comun.js` — lo que no cambia con el idioma (correo, redes, imágenes,
  DOIs, sitios de las empresas). Los dos archivos de idioma lo importan, así una
  dirección se corrige en un solo lugar.
- `src/i18n/IdiomaContexto.jsx` — guarda el idioma elegido y lo reparte a los
  componentes mediante el hook `useIdioma()`, que devuelve `{ idioma, setIdioma, c }`.
  Los componentes leen sus textos de `c`.

La elección se recuerda en `localStorage`. En la primera visita se usa el idioma del
navegador: inglés si empieza por `en`, español en cualquier otro caso.

## Navegación

El sitio es una SPA con una vista por sección:

| URL | Vista |
|---|---|
| `#/` | Inicio: portada y tarjetas de resumen hacia cada vista |
| `#/hoja-de-vida` | Formación, experiencia y competencias |
| `#/portafolio` | Proyectos con filtro por categoría |
| `#/investigacion` | Líneas de trabajo y publicaciones |
| `#/eventos` | Ponencias y congresos |
| `#/sobre-mi` | Intereses y contacto |

Se usa `hash` (`#/portafolio`) y no rutas limpias porque GitHub Pages no tiene servidor
que resuelva `/portafolio`: al recargar devolvería 404.

**Para agregar una vista nueva:** cree el componente en `src/pages/` y añada un objeto
a la lista de `src/rutas.js`. El menú, la tarjeta de resumen del inicio y el enrutado
se actualizan solos.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # revisa el build
```

## Antes de publicar

1. En `src/data/perfil.js`, reemplace `TU-USUARIO` y `TU-ORCID` por sus enlaces reales.
2. Agregue su fotografía en `public/img/perfil.jpg` (cuadrada, ~600×600 px).
3. Agregue en `public/documents/CV-Jhon-Arias.pdf` una versión del CV **sin teléfono ni documento de identidad**.
4. Complete los enlaces `repo` y `demo` de `src/data/proyectos.js` cuando los tenga.

## Publicación en GitHub Pages

1. Cree el repositorio `TU-USUARIO.github.io` (sitio personal) y suba el contenido de esta carpeta.
2. En **Settings → Pages**, en *Source*, elija **GitHub Actions**.
3. Cada `push` a `main` dispara `.github/workflows/deploy.yml`, que compila y despliega `dist/`.

Si usa un repositorio de proyecto (por ejemplo `portfolio`), cambie en `vite.config.js`:

```js
base: '/portfolio/',
```

## Privacidad

El sitio publica únicamente nombres, instituciones, empresas, fechas y enlaces.
No incluye número de documento ni teléfono personal.
