import type { APIRoute } from 'astro';
import { locales, rooms } from '../data/site';
import { localePath, withBase, absolute } from '../data/paths';
import { episodes } from '../data/videos';
export const GET: APIRoute = () => {
  const paths = [
    ...locales.flatMap((lang) => [...rooms, ...episodes.map((e) => `videos/${e.slug}/`)].map((room) => localePath(lang, room))),
    withBase('indice-governanca-2026/')
  ];
  const urls = paths.map((p) => `<url><loc>${absolute(p)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
