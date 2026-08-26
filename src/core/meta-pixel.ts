// Meta Pixel del landing, traducido a TS desde el snippet oficial.
//
// Vive en el bundle y no en el header de WordPress porque el embed es la unica pieza de
// la pagina que versionamos: asi el ID viaja con el release y no depende de que alguien
// lo vuelva a pegar en Elementor.
//
// Requisito de operacion: WordPress NO debe cargar otro pixel de Meta en esta pagina.
// Dos pixeles con el mismo ID duplican PageView, que es justo la discrepancia reportada.
//
// Sin el <noscript> del snippet oficial: la landing se pinta 100% con JS, asi que sin JS
// no hay pagina que medir.

const PIXEL_ID = '909413621420786';
const FBEVENTS_SRC = 'https://connect.facebook.net/en_US/fbevents.js';

interface Fbq {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
}

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let initialized = false;

// Stub de Meta: encola las llamadas hasta que fbevents.js instala callMethod.
function createStub(): Fbq {
  const fbq = function (...args: unknown[]): void {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
    else fbq.queue.push(args);
  } as Fbq;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  return fbq;
}

export function initMetaPixel(): void {
  if (initialized) return;
  initialized = true;

  let fbq = window.fbq;

  // Si el host ya cargo fbevents.js, se reutiliza su cola: inyectarlo dos veces
  // reinicia el estado de los pixeles ya inicializados.
  if (!fbq) {
    fbq = createStub();
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = FBEVENTS_SRC;
    document.head.appendChild(script);
  }

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
}
