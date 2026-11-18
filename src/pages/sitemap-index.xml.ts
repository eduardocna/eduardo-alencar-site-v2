import type { APIRoute } from 'astro';
import { withBase, absolute } from '../data/paths';
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${absolute(withBase('sitemap.xml'))}</loc></sitemap></sitemapindex>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
