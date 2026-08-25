// Entry point. Cada punto de montaje declara su configuración por atributos:
//   <div data-aa-mount
//        data-aa-theme="light|dark"
//        data-aa-lang="es|en"></div>
const _v = document.querySelector<HTMLScriptElement>('script[src*="Fusion_Traders_ARG@"]')?.src.match(/Fusion_Traders_ARG@([^/]+)/)?.[1] ?? 'dev';
console.log(`[fusion-traders-arg-lp] v${_v} loaded`);

import { type Theme, type Lang } from './core/types';
import { initMotion } from './ui/motion';
import { renderNavbar, initNavbar } from './ui/navbar';
import { renderScrollProgress, initScrollProgress } from './ui/scroll-progress';
import { initSpline } from './ui/spline';
import { initParallax } from './ui/parallax';
import { renderHero } from './sections/hero';
import { renderSpeakersSection } from './sections/speakers';
import { renderAboutSection } from './sections/about';
import { renderBenefitsSection } from './sections/benefits';
import { renderFaqSection } from './sections/faq';
import { renderFooterSection } from './sections/footer';
import { initButton004 } from './ui/button004';

function initAnchorScroll(root: HTMLElement): void {
  root.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;
    const target = root.querySelector(`#${CSS.escape(id)}`);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function resolveTheme(raw: string | undefined): Theme {
  return raw === 'dark' ? 'dark' : 'light';
}

function resolveLang(raw: string | undefined): Lang {
  return raw === 'en' ? 'en' : 'es';
}

function boot(): void {
  const mounts = document.querySelectorAll<HTMLElement>('[data-aa-mount]');
  mounts.forEach((mount) => {
    const theme = resolveTheme(mount.dataset.aaTheme);
    const lang = resolveLang(mount.dataset.aaLang);

    const root = document.createElement('div');
    root.className = 'aa-landing';
    root.setAttribute('data-aa-theme', theme);
    root.setAttribute('data-aa-lang', lang);

    renderScrollProgress(root);
    renderNavbar(root);
    renderHero(root);
    renderSpeakersSection(root);
    renderBenefitsSection(root);
    renderAboutSection(root);
    renderFaqSection(root);
    renderFooterSection(root);

    mount.replaceChildren(root);
    initAnchorScroll(root);
    initMotion(root);
    initNavbar(root);
    initScrollProgress(root);
    initSpline();
    initParallax(root);
    initButton004(root);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
