import type { APIRoute } from 'astro';
import { withBase, absolute } from '../data/paths';
/** Na prévia, nada é indexado; no domínio final, tudo é. */
export const GET: APIRoute = () => {
  const preview = import.meta.env.PUBLIC_PREVIEW === 'true';
  const body = preview ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${absolute(withBase('sitemap-index.xml'))}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
