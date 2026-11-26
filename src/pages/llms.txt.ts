import type { APIRoute } from 'astro';
import { works } from '../data/catalog';
import { chapters } from '../data/content';
import { localePath, withBase, workDestination, absolute } from '../data/paths';
import { profiles, bookUrl, substackHome } from '../data/site';
/** Resumo do site para modelos de linguagem (padrão llms.txt). */
export const GET: APIRoute = () => {
  const u = (p: string) => absolute(p);
  const items = works.filter((w) => w.verifiedLinks.length && w.kind !== 'profile').map((w) => `- [${w.title}](${u(workDestination('en', w))}): ${w.localizedSummary.en}`).join('\n');
  const body = `# Eduardo Alencar

> Eduardo Alencar (Eduardo Carvalho Nepomuceno Alencar) is a Senior Legislative Advisor at Brazil's Chamber of Deputies, PhD in Social Ecology (University of California, Irvine), and author of the book "Governança em Tempo Real" (Editora JusPodivm, 2026). He works on public integrity, parliamentary oversight, procurement fraud risk and the responsible use of AI in government. The site is in Portuguese and English.

## Pages
- [Home (PT)](${u(localePath('pt'))}) · [Home (EN)](${u(localePath('en'))}) · [Home (ES)](${u(localePath('es'))}) · [Home (IT)](${u(localePath('it'))})
- [Book](${u(localePath('en', 'book/'))}): "Governança em Tempo Real: como o Brasil pode parar de fingir que governa". Publisher page: ${bookUrl}
- [Videos](${u(localePath('en', 'videos/'))})
- [Newsletter](${u(localePath('en', 'newsletter/'))}): weekly analysis, by email at ${substackHome}
- [Research & data](${u(localePath('en', 'research/'))}): publications, policy briefs, open tools
- [About](${u(localePath('en', 'about/'))}): bio, teaching, CV, contact
- [CV (PDF, English)](${u(withBase('downloads/cv-eduardo-alencar-en.pdf'))})

## Book chapters
${chapters.map((c) => `${c.n}. ${c.title.pt} (${c.title.en})`).join('\n')}

## Work with a public source
${items}

## Profiles
${profiles.map((p) => `- [${p.label}](${p.href})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
