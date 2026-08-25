import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderParagraph } from '../ui/text';
import { ASSETS } from '../constants/assets';

export function renderAboutSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section';
  section.id = 'resultados';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Resultados',
    heading: 'La disciplina de hoy es la libertad de mañana.',
  });

  const heatmap = document.createElement('img');
  heatmap.className = 'aa-resultados__heatmap';
  heatmap.src = ASSETS.heatmap;
  heatmap.alt = 'Heatmap mensual de resultados del Copytrade';
  heatmap.loading = 'lazy';
  heatmap.decoding = 'async';
  heatmap.setAttribute('data-aa-fade', '');

  const sub = renderParagraph({
    size: 'l',
    text: 'Cada sesión y cada seguimiento del Copytrade forman parte de un mismo proceso: constancia, análisis y visión de largo plazo.',
    className: 'aa-section-header__sub',
  });
  sub.setAttribute('data-aa-fade', '');

  const wrap = document.createElement('div');
  wrap.className = 'aa-resultados';
  wrap.append(header, heatmap, sub);

  section.appendChild(renderContainer({ size: 'default', children: [wrap] }));
  root.appendChild(section);
}
