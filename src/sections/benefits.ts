import { renderContainer } from '../ui/layout';
import { renderSectionHeader } from '../ui/section-header';
import { renderModuleCard, type ModuleCardData } from '../ui/atoms/module-card';

const CARDS: ModuleCardData[] = [
  {
    tag: 'Copytrade',
    title: 'Seguimiento de resultados del Copytrade',
    desc: 'En el grupo gratis seguís de cerca los resultados. El Copytrade en sí se libera en el VIP, después del depósito.',
  },
  {
    variant: 'accent',
    tag: 'En vivo',
    title: 'Sesiones en vivo de análisis de mercado',
    desc: 'Análisis con el equipo, en vivo, para leer el mercado con criterio.',
  },
  {
    variant: 'gradient',
    tag: 'Formación',
    title: 'Formación en conceptos fundamentales de trading',
    desc: 'Bases de trading para operar con método, no con ruido.',
  },
  {
    variant: 'light',
    tag: 'Comunidad',
    title: 'Comunidad internacional de traders',
    desc: 'Una comunidad de traders de LatAm, con foco en Argentina.',
  },
];

export function renderBenefitsSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-benefits';
  section.id = 'beneficios';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const header = renderSectionHeader({
    eyebrow: 'Grupo gratis',
    heading: '¿Qué vas a encontrar en el grupo gratis?',
    sub: 'Sumate para seguir resultados, sesiones en vivo y formación. El acceso al Copytrade es VIP, post-depósito.',
  });

  const cards = document.createElement('div');
  cards.className = 'aa-benefits__cards';
  CARDS.forEach((card) => {
    const slot = document.createElement('div');
    slot.className = 'aa-benefits__card';
    slot.appendChild(renderModuleCard(card));
    cards.appendChild(slot);
  });

  section.appendChild(
    renderContainer({ size: 'default', children: [header, cards] }),
  );
  root.appendChild(section);
}
