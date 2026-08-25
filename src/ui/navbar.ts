import { renderButton } from './atoms/button';
import { NAV_CTA } from '../constants/nav';
import { ASSETS } from '../constants/assets';

export function renderNavbar(root: Element): void {
  const nav = document.createElement('nav');
  nav.className = 'aa-nav';
  nav.setAttribute('aria-label', 'Marca');
  nav.setAttribute('data-nav-theme', 'dark');

  const brand = document.createElement('img');
  brand.className = 'aa-nav__brand';
  brand.src = ASSETS.logo;
  brand.alt = 'Fusion Traders ARG';

  const cta = document.createElement('div');
  cta.className = 'aa-nav__cta';
  cta.appendChild(
    renderButton({ href: NAV_CTA.href, label: NAV_CTA.label, variant: 'primary', size: 'sm', target: '_blank' }),
  );

  nav.append(brand, cta);
  root.appendChild(nav);
}

export function initNavbar(root: Element): void {
  const nav = root.querySelector<HTMLElement>('.aa-nav');
  if (!nav) return;

  let raf = 0;
  let lastY = window.scrollY;

  const update = (): void => {
    raf = 0;
    const el = document.elementFromPoint(window.innerWidth / 2, 18);
    const section = el?.closest<HTMLElement>('[data-aa-section-theme]');
    nav.setAttribute('data-nav-theme', section?.getAttribute('data-aa-section-theme') ?? 'light');

    const y = window.scrollY;
    if (y <= 4) nav.classList.remove('aa-nav--hidden');
    else if (y > lastY + 2 && y > 80) nav.classList.add('aa-nav--hidden');
    else if (y < lastY - 2) nav.classList.remove('aa-nav--hidden');
    lastY = y;
  };
  const onScroll = (): void => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  requestAnimationFrame(update);
}
