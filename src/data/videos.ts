import feed from './feed.json';

/**
 * Episódios da temporada "Governança em Tempo Real, capítulo a capítulo".
 * Cada episódio publicado ganha uma página em /pt/videos/<slug>/ e /en/videos/<slug>/.
 * Só entra aqui episódio já público no YouTube.
 */
export interface Episode {
  slug: string;
  number: number;
  chapter: number;
  youtubeId: string;
  date: string; // AAAA-MM-DD
  title: { pt: string; en: string } & Partial<Record<'es' | 'it', string>>;
  summary: { pt: string; en: string } & Partial<Record<'es' | 'it', string>>;
  transcript?: string; // PT
  sources: { label: string; href: string }[];
}
export const episodes: Episode[] = [];

export interface Short { id: string; date: string; title: string; url: string; }

const idFrom = (url: string) => url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/)?.[1];

/** Vídeos curtos já publicados, lidos do feed do site (só itens públicos com URL). */
export const shorts: Short[] = feed.itens
  .filter((item) => item.canal === 'youtube' && item.url)
  .map((item) => ({ id: idFrom(item.url) ?? '', date: item.data, title: item.titulo.replace(/\s*\(Short\)\s*$/, ''), url: item.url }))
  .filter((item) => item.id);
