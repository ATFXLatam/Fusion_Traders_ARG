import { renderContainer } from '../ui/layout';
import { renderHeading } from '../ui/text';
import { renderButton } from '../ui/atoms/button';
import { JOIN_CTA } from '../constants/nav';

export function renderFaqSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-faq';
  section.id = 'unirse';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const heading = renderHeading({
    size: 'l',
    tag: 'h2',
    text: 'Tu lugar en el trading empieza acá.',
    split: true,
  });

  const cta = document.createElement('div');
  cta.className = 'aa-faq__cta';
  cta.appendChild(
    renderButton({ href: JOIN_CTA.href, label: JOIN_CTA.label, variant: 'primary', target: '_blank' }),
  );

  const inner = document.createElement('div');
  inner.className = 'aa-faq__inner';
  inner.append(heading, cta);

  const card = renderContainer({ size: 'default', className: 'aa-container--card', children: [inner] });
  card.setAttribute('data-aa-section-theme', 'dark');
  section.appendChild(card);
  root.appendChild(section);
}
