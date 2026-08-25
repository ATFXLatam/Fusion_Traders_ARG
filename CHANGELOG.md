# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).
Versionado: el CI de release etiqueta `vX.Y.Z` por push a `main` (cuando se conecte el repo).

## [Unreleased]

### Added
- Bootstrap del proyecto: duplicado 1:1 de `ATOM_Academy` como punto de partida (stack
  vanilla TS + esbuild + GSAP, Mount Point Pattern para Elementor).
- `PORT` configurable en `esbuild.config.mjs` (default `8766`) para coexistir con otros
  proyectos del mismo stack en local.
- Plan de traslado de SparkSummit2026 documentado en `CLAUDE.md` (mapeo de tokens,
  secciones, componentes y fases).
- Este `CHANGELOG.md`.
- Fotos reales de los aliados en la sección Speakers: Álvaro Matos (columna izquierda) y
  Josué Flores (strip inferior, columna derecha), reemplazando los placeholders.
- Foto real de Alex Fernández en la sección Speakers (`public/alex-fernandez.webp`),
  reemplazando el placeholder dashed.

### Changed
- Video de fondo del hero al 60% de opacidad, para que el texto respire sobre el loop.
- Botones (`renderButton`): icono de Telegram a la izquierda del label. El `__inner`
  pasa a fila flex y las dos copias del texto se apilan en un `.aa-button__label`,
  para no meter el icono dentro de lo que splitea `initButton004`.
- Footer centrado (logo y legal); el legal conserva ancho completo para que el
  separador siga cruzando el footer.
- Pin del loader de `at_forms` a `@v1.0.12` (incluye preselección de país/prefijo por geo-IP
  y el fix de envío a Salesforce).
- Fotos de aliados corregidas (cruce de identidad) y media en proporción 1:1 (antes 3:4
  desktop / 4:3 mobile).
- Rol unificado de Álvaro y Josué: "Fundador y CEO de Blue Makers. Cofundador de Skillyfund."
- Fotos de aliados en proporción 4:5 (ligeramente vertical).
- Countdown: squares en grid de columnas iguales (`minmax(0,1fr)`) con `aspect-ratio` 1:1,
  para que los 4 midan lo mismo; 2 columnas en mobile.

### Fixed
- Imágenes que respondían 200 pero no pintaban. Los archivos de `public/` tenían la
  extensión mentida: `curva-equity.png`, `heatmap-mensual.png` y
  `fusion-traders-logo.webp` eran JPEG. jsDelivr los servía con el content-type de
  la extensión y `x-content-type-options: nosniff`, así que el navegador no podía
  corregir el tipo y el decode fallaba. `curva-equity`, `heatmap-mensual` y
  `alex-fernandez` pasan a R2 (donde el content-type coincide con los bytes) y el
  logo, que no está en el bucket, se renombró a `.jpg`.
- Sobrescrituras del tema de WordPress sobre los elementos de texto del embed.
  Nuevo `src/styles/reset.css` (importado antes de `typography.css`) que repone
  `inherit` en h1..h6/p/listas/a. El tema los estila con selectores de tipo, y un
  valor directo gana siempre a uno heredado: por eso el color de la sección no
  llegaba a los headings. No era especificidad, era herencia contra regla directa.
  El `:where(h1..p){margin:0}` (especificidad cero, perdía contra cualquier cosa)
  y el reset de `box-sizing` se mudaron ahí.
- La raíz `.aa-landing` declara `font-weight`, `font-style`, `line-height` y
  `letter-spacing`: sin eso, el `inherit` del reset resolvía a los valores del host.
- Imágenes de `public/` servidas desde el mismo tag de jsDelivr que el bundle
  (`new URL('../public/', import.meta.url)`). Antes eran rutas absolutas `/public/...`
  que resolvían contra el dominio del host de WordPress, no contra el CDN: 404 en
  producción, y en el preview local pasaban desapercibidas porque el dev server
  sirve la raíz del repo. Obliga a `target: es2020` en esbuild (import.meta es ES2020).
- Identidad del CDN apuntada a `ATFXLatam/Fusion_Traders_ARG` en `loader.js`,
  `release.yml`, `src/index.ts` y `README.md` (venían de `karenrebecag/Peru_atLP`).
- Desborde horizontal en todas las strips: se restauró el reset `box-sizing: border-box`
  (perdido en el duplicado). Sin él, `width:100%` + `padding-inline` del `.aa-container`
  desbordaba y el `overflow-x: clip` del root recortaba el contenido por la derecha
  (más visible en la sección del form embebido).

### Changed
- Beneficios ("Por qué asistir"): se reemplazó el slider draggable por el efecto MWG 087
  (pin + scroll horizontal con inercia por card según la velocidad de scroll). Header sin
  cambios. Nuevos `ui/benefits-scroll.ts` y `styles/benefits.css`; `ui/slider.ts` +
  `styles/slider.css` quedan sin uso.
- FAQ accordion: portado el estilo de ATOM Academy (filas underline + icono +/−) en lugar
  del de Spark (pills rellenos), que se estiraban a lo ancho de la card navy.
- Git desconectado del duplicado (sin historial ni remote del proyecto origen).

### Removed
- Badge "Resultados de Copytrade en vivo" del hero, y con él las reglas ya muertas
  `.aa-hero__detail(s)` y la animación `aa-dot-blink`.

### Pending
- Rebrand de identidad: `package.json` (`name`), refs `Academy_LP` en `loader.js` /
  `src/index.ts`, definir repo/remote/CDN destino.
- Traslado de las 9 secciones + navbar de SparkSummit (ver fases en `CLAUDE.md`).
- Reemplazo de contenido/copy/imagery por el de ATFX Perú.
