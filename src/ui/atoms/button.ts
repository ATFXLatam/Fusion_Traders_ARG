// Botón — OSMO "Button 004" (portado de ATOM): dos copias del label (default visible +
// hover oculta), cada una spliteada en chars por initButton004(). El flip 3D de
// caracteres en hover es 100% CSS; el JS solo parte el texto y setea las variables.

const TELEGRAM_ICON =
  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M2.37 11.14C7.74 8.8 11.32 7.26 13.11 6.51C18.23 4.38 19.29 4.01 19.98 4C20.13 4 20.47 4.04 20.69 4.21' +
  'C20.87 4.36 20.93 4.57 20.95 4.71C20.97 4.85 21 5.18 20.98 5.43C20.7 8.34 19.5 15.41 18.89 18.67' +
  'C18.63 20.05 18.12 20.51 17.63 20.56C16.56 20.66 15.75 19.85 14.71 19.17C13.09 18.11 12.17 17.45 10.6 16.41' +
  'C8.78 15.21 9.96 14.55 11 13.48C11.27 13.2 15.98 8.91 16.07 8.52C16.08 8.47 16.09 8.29 15.98 8.19' +
  'C15.87 8.09 15.72 8.13 15.6 8.15C15.44 8.19 12.85 9.9 7.83 13.28C7.1 13.78 6.43 14.03 5.83 14.02' +
  'C5.17 14.01 3.91 13.65 2.97 13.34C1.82 12.97 0.9 12.77 0.98 12.13C1.02 11.8 1.48 11.46 2.35 11.11L2.37 11.14Z"' +
  ' fill="currentColor"/></svg>';

export interface ButtonOptions {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'sm';
  target?: '_blank' | '_self';
}

export function renderButton(opts: ButtonOptions): HTMLElement {
  const { label, href, variant = 'primary', size = 'default', target } = opts;

  const tag = href ? 'a' : 'button';
  const el = document.createElement(tag) as HTMLAnchorElement | HTMLButtonElement;
  el.className = `aa-button aa-button--${variant} aa-button--${size}`;
  el.setAttribute('data-aa-btn004', '');

  if (href && el instanceof HTMLAnchorElement) {
    el.href = href;
    if (target) el.target = target;
    if (target === '_blank') el.rel = 'noopener noreferrer';
  }

  const inner = document.createElement('span');
  inner.className = 'aa-button__inner';

  const icon = document.createElement('span');
  icon.className = 'aa-button__icon';
  icon.innerHTML = TELEGRAM_ICON;

  // Las dos copias del label se apilan en un wrapper propio: el __inner pasa a ser
  // fila (icono + label) y el grid 1/1 que las superpone baja un nivel.
  const labelBox = document.createElement('span');
  labelBox.className = 'aa-button__label';

  // default = visible/accesible; hover = copia que entra (aria-hidden).
  const def = document.createElement('span');
  def.className = 'aa-button__text is--default';
  def.setAttribute('data-aa-btn004-text', '');
  def.textContent = label;

  const hov = document.createElement('span');
  hov.className = 'aa-button__text is--hover';
  hov.setAttribute('aria-hidden', 'true');
  hov.setAttribute('data-aa-btn004-text', '');
  hov.textContent = label;

  labelBox.append(def, hov);
  inner.append(icon, labelBox);

  const bg = document.createElement('span');
  bg.className = 'aa-button__bg';

  el.append(inner, bg);
  return el;
}
