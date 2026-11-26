const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Converte *itálico* em <em>, escapando o resto. */
export const em = (value: string) => escape(value).replace(/\*([^*]+)\*/g, '<em>$1</em>');
export const fmtDate = (iso: string, lang: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(({ pt: 'pt-BR', en: 'en-GB', es: 'es-ES', it: 'it-IT' } as Record<string, string>)[lang] ?? 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
