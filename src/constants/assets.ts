// Assets externos (CDN).

const CDN = 'https://pub-62c41549a44642efbcd3f775bdb039b3.r2.dev';

// Imagenes propias del repo, servidas por el mismo tag de jsDelivr que el bundle.
// OJO: import.meta.url apunta al MODULO EMITIDO (dist/landing.js), no a este archivo
// fuente, asi que la ruta es relativa a dist/ — no a src/constants/. Antes eran
// absolutas ('/public/...') y resolvian contra el dominio del host, no contra el CDN.
const ASSET_BASE = new URL('../public/', import.meta.url).href;

export const ASSETS = {
  heroVideo: `${CDN}/stock-market-exchange-and-forex-candles-chart-back-2026-01-28-03-22-46-utc.mp4`,
  // Vacío = el hero usa el <video> bg (loop muted) en vez de la escena Spline.
  splineScene: '',
  // Imagenes en R2, como el video. Las copias de public/ tenian la extension
  // mentida (JPEG llamado .png/.webp): jsDelivr las servia con el content-type de
  // la extension y x-content-type-options: nosniff, asi que el navegador no podia
  // corregirlo y el decode fallaba. La URL respondia 200 igual — accesible pero
  // sin pintar. En R2 el content-type coincide con los bytes.
  heroMetrics: `${CDN}/curva-equity.jpg`,
  heatmap: `${CDN}/heatmap-mensual.jpg`,
  alexPhoto: `${CDN}/alex-fernandez.webp`,
  // El logo no esta en el bucket: sigue en el repo, ya con su extension real.
  logo: `${ASSET_BASE}fusion-traders-logo.jpg`,
};

// Runtime de Spline vía CDN (no npm). Se inyecta solo si hay una <spline-viewer> montada.
export const SPLINE_RUNTIME = 'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js';
