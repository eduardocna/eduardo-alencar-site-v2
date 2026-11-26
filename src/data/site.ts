/**
 * Site v2: seis salas, uma ação principal (assinar a newsletter).
 * Quatro idiomas completos: PT, EN, ES e IT, com as mesmas seis salas (decisão de Eduardo, 26/11/2026).
 */
export const locales = ['pt', 'en', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];
export const fullLocales = locales;
export type FullLocale = Locale;
export const isLocale = (value: string | undefined): value is Locale => locales.includes(value as Locale);
export const isFull = (value: Locale): value is FullLocale => locales.includes(value);

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
    tagline: 'Governança pública, com evidência',
    subscribe: 'Assinar a newsletter',
    subscribeShort: 'Assinar',
    skip: 'Pular para o conteúdo',
    menu: 'Menu',
    language: 'Idioma',
    navLabel: 'Navegação principal',
    footerPitch: 'Uma análise curta por semana sobre governo, dados e governança pública. Toda terça, no seu e-mail.',
    location: 'Brasília, Brasil',
    preview: 'Prévia do site novo, ainda não publicada. O site oficial continua em eduardocnalencar.com.'
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Videos', 'Book', 'Newsletter', 'Research & data', 'About'],
    tagline: 'Public governance, with evidence',
    subscribe: 'Subscribe to the newsletter',
    subscribeShort: 'Subscribe',
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    navLabel: 'Main navigation',
    footerPitch: 'One short analysis a week on government, data and public governance. Every Tuesday, in your inbox.',
    location: 'Brasília, Brazil',
    preview: 'Preview of the new site, not yet published. The official site remains at eduardocnalencar.com.'
  },
  es: {
    htmlLang: 'es',
    nav: ['Inicio', 'Vídeos', 'Libro', 'Newsletter', 'Investigación y datos', 'Sobre mí'],
    tagline: 'Gobernanza pública, con evidencia',
    subscribe: 'Suscribirse a la newsletter',
    subscribeShort: 'Suscribirse',
    skip: 'Saltar al contenido',
    menu: 'Menú',
    language: 'Idioma',
    navLabel: 'Navegación principal',
    footerPitch: 'Un análisis breve por semana sobre gobierno, datos y gobernanza pública, en portugués e inglés. Cada martes, en tu correo.',
    location: 'Brasília, Brasil',
    preview: 'Vista previa del nuevo sitio, aún no publicada. El sitio oficial sigue en eduardocnalencar.com.'
  },
  it: {
    htmlLang: 'it',
    nav: ['Home', 'Video', 'Libro', 'Newsletter', 'Ricerca e dati', 'Chi sono'],
    tagline: 'Governance pubblica, con evidenza',
    subscribe: 'Iscriviti alla newsletter',
    subscribeShort: 'Iscriviti',
    skip: 'Vai al contenuto',
    menu: 'Menu',
    language: 'Lingua',
    navLabel: 'Navigazione principale',
    footerPitch: 'Un’analisi breve a settimana su governo, dati e governance pubblica, in portoghese e inglese. Ogni martedì, nella tua casella.',
    location: 'Brasília, Brasile',
    preview: 'Anteprima del nuovo sito, non ancora pubblicata. Il sito ufficiale resta su eduardocnalencar.com.'
  }
} as const;
