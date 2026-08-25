import { renderContainer } from '../ui/layout';
import { ASSETS } from '../constants/assets';

export function renderFooterSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-footer';
  section.id = 'footer';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const brand = document.createElement('img');
  brand.className = 'aa-footer__brand';
  brand.src = ASSETS.logo;
  brand.alt = 'Fusion Traders ARG';
  brand.loading = 'lazy';

  const legal = document.createElement('div');
  legal.className = 'aa-footer__legal';
  const legalText = document.createElement('p');
  legalText.textContent = '© 2026 Fusion Traders ARG';
  legal.appendChild(legalText);

  const inner = document.createElement('div');
  inner.className = 'aa-footer__inner';
  inner.append(brand, legal);

  section.appendChild(renderContainer({ children: [inner] }));
  root.appendChild(section);
}
