import type { Locale } from './site';

export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
};

export const localePath = (locale: Locale, path = '') =>
  withBase(`${locale}/${path.replace(/^\//, '')}`);

/** Absolute URL on the public origin, for canonical, JSON-LD and sitemap. */
export const absolute = (path: string) => new URL(path, import.meta.env.SITE).href;

/** CV em PDF: PT e EN atualizados; ES e IT apontam para o CV em inglês até haver tradução revisada por Eduardo. */
export const cvFile = (locale: Locale) => withBase(`downloads/cv-eduardo-alencar-${locale === 'pt' ? 'pt' : 'en'}.pdf`);

/** Sala do site (nos quatro idiomas) que lista cada categoria do catálogo. */
const anchorByCategory = { research: 'research/#publicacoes', policy: 'research/#briefs', tools: 'research/#ferramentas', profile: 'about/#cv' } as const;

/** Public destination of a catalogue item: its first verified link, or the room that lists it. */
export const workDestination = (locale: Locale, item: { category: keyof typeof anchorByCategory; verifiedLinks: { href: string }[] }) => {
  const link = item.verifiedLinks[0]?.href;
  if (link) return link.startsWith('/') ? withBase(link) : link;
  return localePath(locale, anchorByCategory[item.category]);
};
