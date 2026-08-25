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
  logo: `${ASSET_BASE}fusion-traders-logo.webp`,
  heroMetrics: `${ASSET_BASE}curva-equity.png`,
  heatmap: `${ASSET_BASE}heatmap-mensual.png`,
  alexPhoto: `${ASSET_BASE}alex-fernandez.webp`,
};

// Runtime de Spline vía CDN (no npm). Se inyecta solo si hay una <spline-viewer> montada.
export const SPLINE_RUNTIME = 'https://unpkg.com/@splinetool/viewer@1.12.97/build/spline-viewer.js';
