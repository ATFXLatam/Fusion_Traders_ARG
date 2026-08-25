import { renderContainer } from '../ui/layout';
import { renderHeading, renderParagraph } from '../ui/text';
import { renderPill } from '../ui/atoms/pill';
import { ASSETS } from '../constants/assets';

function mediaImage(src: string, alt: string): HTMLElement {
  const media = document.createElement('div');
  media.className = 'aa-ally__media';
  const img = document.createElement('img');
  img.className = 'aa-ally__img';
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  media.appendChild(img);
  return media;
}

export function renderSpeakersSection(root: Element): void {
  const section = document.createElement('section');
  section.className = 'aa-section aa-speakers';
  section.id = 'speakers';
  section.setAttribute('data-aa-section-theme', 'dark');
  section.setAttribute('data-aa-nav-anchor', '');

  const el = document.createElement('div');
  el.className = 'aa-ally aa-ally--media-left';

  const text = document.createElement('div');
  text.className = 'aa-ally__text';

  const pill = renderPill('¿Quién es Alex?');
  pill.setAttribute('data-aa-fade', '');

  const list = document.createElement('ul');
  list.className = 'aa-ally__list';
  list.setAttribute('data-aa-fade', '');
  [
    'Fundador de Fusion Traders',
    'Especialista en Price Action',
    'Comunidad internacional',
  ].forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    list.appendChild(li);
  });

  text.append(
    pill,
    renderHeading({ size: 'l', tag: 'h3', text: '¿Quién es Alex Fernández?', split: true }),
    renderParagraph({
      size: 'l',
      text: 'Alex Fernández es el fundador de Fusion Traders, comunidad de educación financiera y trading. Especializado en análisis de acción del precio (price action) y desarrollo de estrategias basadas en la lectura del mercado, sin depender de indicadores tradicionales.',
    }),
    list,
  );

  el.append(text, mediaImage(ASSETS.alexPhoto, 'Alex Fernández, fundador de Fusion Traders'));

  const inner = document.createElement('div');
  inner.className = 'aa-allies';
  inner.appendChild(el);

  section.appendChild(renderContainer({ size: 'default', children: [inner] }));
  root.appendChild(section);
}
