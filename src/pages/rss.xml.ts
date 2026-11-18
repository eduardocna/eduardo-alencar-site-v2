import type { APIRoute } from 'astro';
import { works } from '../data/catalog';
import { workDestination, localePath, absolute } from '../data/paths';
const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const GET: APIRoute = () => {
  const entries = works.map((item) => {
    const link = absolute(workDestination('en', item));
    return `<item><title>${esc(item.title)}</title><link>${esc(link)}</link><guid>${esc(link)}</guid><description>${esc(item.localizedSummary.en)}</description><pubDate>${new Date(`${item.last_checked}T12:00:00Z`).toUTCString()}</pubDate></item>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Eduardo Alencar: research and evidence</title><link>${absolute(localePath('en'))}</link><description>Research, policy briefs and open tools.</description>${entries}</channel></rss>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
