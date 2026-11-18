/**
 * Site v2: seis salas, uma ação principal (assinar a newsletter).
 * PT e EN completos; ES e IT com uma página cada (decisão de Eduardo, 18/11/2026).
 */
export const locales = ['pt', 'en', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];
export const fullLocales = ['pt', 'en'] as const;
export type FullLocale = (typeof fullLocales)[number];
export const isLocale = (value: string | undefined): value is Locale => locales.includes(value as Locale);
export const isFull = (value: Locale): value is FullLocale => value === 'pt' || value === 'en';

export const rooms = ['', 'videos/', 'book/', 'newsletter/', 'research/', 'about/'] as const;
export type Room = (typeof rooms)[number];

export const substackUrl = 'https://eduardocnalencar.substack.com/subscribe';
export const substackHome = 'https://eduardocnalencar.substack.com/';
export const linkedinNewsletter = 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7347441938133848064';
export const bookUrl = 'https://www.editorajuspodivm.com.br/governanca-em-tempo-real-como-o-brasil-pode-parar-de-fingir-que-governa-2027-alencar';
export const youtubeChannel = 'https://www.youtube.com/@eduardocnalencar';
export const email = 'eduardocna@gmail.com';

export const profiles = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardocna' },
  { label: 'YouTube', href: youtubeChannel },
  { label: 'Substack', href: substackHome },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-9218-1798' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=vJ12isgAAAAJ' }
];

export const ui = {
  pt: {
    htmlLang: 'pt-BR',
    nav: ['Início', 'Vídeos', 'Livro', 'Newsletter', 'Pesquisa e dados', 'Sobre'],
    tagline: 'Integridade pública, medida',
    subscribe: 'Assinar a newsletter',
    subscribeShort: 'Assinar',
    skip: 'Pular para o conteúdo',
    menu: 'Menu',
    language: 'Idioma',
    navLabel: 'Navegação principal',
    footerPitch: 'Uma análise curta por semana sobre governo, dados e integridade pública. Toda terça, no seu e-mail.',
    location: 'Brasília, Brasil',
    preview: 'Prévia do site novo, ainda não publicada. O site oficial continua em eduardocnalencar.com.'
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Videos', 'Book', 'Newsletter', 'Research & data', 'About'],
    tagline: 'Public integrity, measured',
    subscribe: 'Subscribe to the newsletter',
    subscribeShort: 'Subscribe',
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    navLabel: 'Main navigation',
    footerPitch: 'One short analysis a week on government, data and public integrity. Every Tuesday, in your inbox.',
    location: 'Brasília, Brazil',
    preview: 'Preview of the new site, not yet published. The official site remains at eduardocnalencar.com.'
  },
  es: {
    htmlLang: 'es',
    nav: ['Inicio'],
    tagline: 'Integridad pública, medida',
    subscribe: 'Suscribirse a la newsletter',
    subscribeShort: 'Suscribirse',
    skip: 'Saltar al contenido',
    menu: 'Menú',
    language: 'Idioma',
    navLabel: 'Navegación principal',
    footerPitch: 'Un análisis breve por semana sobre gobierno, datos e integridad pública, en portugués e inglés.',
    location: 'Brasília, Brasil',
    preview: 'Vista previa del nuevo sitio, aún no publicada.'
  },
  it: {
    htmlLang: 'it',
    nav: ['Home'],
    tagline: 'Integrità pubblica, misurata',
    subscribe: 'Iscriviti alla newsletter',
    subscribeShort: 'Iscriviti',
    skip: 'Vai al contenuto',
    menu: 'Menu',
    language: 'Lingua',
    navLabel: 'Navigazione principale',
    footerPitch: 'Un’analisi breve a settimana su governo, dati e integrità pubblica, in portoghese e inglese.',
    location: 'Brasília, Brasile',
    preview: 'Anteprima del nuovo sito, non ancora pubblicata.'
  }
} as const;
