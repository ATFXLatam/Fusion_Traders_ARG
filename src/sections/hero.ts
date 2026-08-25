import { renderHeading } from '../ui/text';
import { renderButton } from '../ui/atoms/button';
import { renderPill } from '../ui/atoms/pill';
import { ASSETS } from '../constants/assets';
import { JOIN_CTA } from '../constants/nav';

export function renderHero(root: Element): void {
  const hero = document.createElement('section');
  hero.className = 'aa-hero';
  hero.id = 'top';
  hero.setAttribute('data-aa-section-theme', 'dark');
  hero.setAttribute('data-aa-nav-anchor', '');
  hero.setAttribute('data-aa-intro', '');
  hero.setAttribute('data-parallax', 'trigger');
  hero.setAttribute('data-parallax-start', '10');
  hero.setAttribute('data-parallax-end', '-10');

  const bg = document.createElement('div');
  bg.className = 'aa-hero__bg';

  let media: HTMLElement;
  if (ASSETS.splineScene) {
    media = document.createElement('spline-viewer');
    media.className = 'aa-hero__spline';
    media.setAttribute('url', ASSETS.splineScene);
    media.setAttribute('loading-anim-type', 'none');
    media.setAttribute('aria-hidden', 'true');
  } else {
    const video = document.createElement('video');
    video.className = 'aa-hero__video';
    video.src = ASSETS.heroVideo;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'metadata');
    video.setAttribute('aria-hidden', 'true');
    media = video;
  }

  const mediaWrap = document.createElement('div');
  mediaWrap.className = 'aa-hero__media-wrap';
  mediaWrap.setAttribute('data-parallax', 'target');
  mediaWrap.appendChild(media);

  const overlay = document.createElement('div');
  overlay.className = 'aa-hero__overlay';
  bg.append(mediaWrap, overlay);

  const grid = document.createElement('div');
  grid.className = 'aa-hero__grid';

  const left = document.createElement('div');
  left.className = 'aa-hero__left';
  left.setAttribute('data-hero-left', '');

  const tag = renderPill('Alex · Fusion Traders ARG');
  tag.classList.add('aa-hero__tag');
  tag.setAttribute('data-aa-fade', '');
  left.appendChild(tag);

  left.appendChild(
    renderHeading({
      size: 'xxl',
      tag: 'h1',
      text: 'Mirá los resultados de nuestro sistema de Copytrade',
      className: 'aa-hero__title',
    }),
  );
  left.querySelector('.aa-hero__title')?.setAttribute('data-aa-fade', '');

  const sub = document.createElement('p');
  sub.className = 'aa-hero__sub';
  sub.setAttribute('data-aa-fade', '');
  sub.textContent =
    'Sumate gratis a Fusion Traders ARG y seguí de cerca los resultados de nuestro Copytrade y las sesiones en vivo del equipo.';
  left.appendChild(sub);

  const cta = document.createElement('div');
  cta.className = 'aa-hero__cta';
  cta.setAttribute('data-aa-fade', '');
  cta.appendChild(
    renderButton({ href: JOIN_CTA.href, label: JOIN_CTA.label, variant: 'primary', target: '_blank' }),
  );
  left.appendChild(cta);

  const metrics = document.createElement('img');
  metrics.className = 'aa-hero__metrics';
  metrics.src = ASSETS.heroMetrics;
  metrics.alt = 'Métricas y curva de equity del Copytrade';
  metrics.setAttribute('data-aa-fade', '');

  grid.append(left, metrics);
  hero.append(bg, grid);
  root.appendChild(hero);
}
