export interface NavLink {
  label: string;
  href: string;
}

export const TELEGRAM_URL = 'https://t.me/Copy_FusionTraders';

export const NAV_LINKS: NavLink[] = [
  { label: 'Alex', href: '#speakers' },
  { label: 'El grupo', href: '#beneficios' },
  { label: 'Resultados', href: '#resultados' },
];

export const NAV_CTA = {
  label: 'Unirse gratis',
  href: TELEGRAM_URL,
};

export const JOIN_CTA = {
  label: 'Unirse al grupo gratis',
  href: TELEGRAM_URL,
};
