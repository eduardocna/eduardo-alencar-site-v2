import type { Locale } from './site';
import type { LocalizedText } from './catalog';

const l = (en: string, pt: string, es: string, it: string): LocalizedText => ({ en, pt, es, it });

export const homeUi = {
  storyEyebrow: l('From oversight to evidence', 'Da fiscalização à evidência', 'Del control a la evidencia', 'Dal controllo all’evidenza'),
  storyTitle: l('How a public record becomes auditable evidence', 'Como um registro público se transforma em evidência auditável', 'Cómo un registro público se convierte en evidencia auditable', 'Come un registro pubblico diventa evidenza verificabile'),
  storyLede: l('Scroll through an evidence system built to preserve provenance, uncertainty and human judgment.', 'Percorra um sistema de evidências construído para preservar procedência, incerteza e julgamento humano.', 'Recorre un sistema de evidencia diseñado para preservar procedencia, incertidumbre y juicio humano.', 'Esplora un sistema di evidenza progettato per preservare provenienza, incertezza e giudizio umano.'),
  conceptual: l('Conceptual flow: colours indicate analytical dimensions, not observed proportions.', 'Fluxo conceitual: as cores indicam dimensões analíticas, não proporções observadas.', 'Flujo conceptual: los colores indican dimensiones analíticas, no proporciones observadas.', 'Flusso concettuale: i colori indicano dimensioni analitiche, non proporzioni osservate.'),
  explorerEyebrow: l('Interactive portfolio', 'Portfólio interativo', 'Portafolio interactivo', 'Portfolio interattivo'),
  explorerTitle: l('Explore the work by public problem', 'Explore o trabalho pelo problema público', 'Explora el trabajo por problema público', 'Esplora il lavoro per problema pubblico'),
  explorerLede: l('Choose an axis to see the problem, method and concrete output behind the work.', 'Escolha um eixo para ver o problema, o método e a entrega concreta por trás do trabalho.', 'Elige un eje para ver el problema, el método y el resultado concreto.', 'Scegli un asse per vedere il problema, il metodo e il risultato concreto.'),
  problem: l('Problem', 'Problema', 'Problema', 'Problema'), method: l('Method', 'Método', 'Método', 'Metodo'), output: l('Output', 'Entrega', 'Resultado', 'Risultato'),
  open: l('Open related work', 'Abrir trabalho relacionado', 'Abrir trabajo relacionado', 'Apri lavoro correlato'),
  metrics: l('Evidence at working scale', 'Evidência em escala de trabalho', 'Evidencia a escala de trabajo', 'Evidenza su scala operativa'),
  metricsLede: l('Verified scale, not decorative numbers.', 'Escala verificável, não números decorativos.', 'Escala verificable, no números decorativos.', 'Scala verificabile, non numeri decorativi.'),
  language: l('Document language', 'Idioma do documento', 'Idioma del documento', 'Lingua del documento')
};

export const dimensions = [
  l('Completeness', 'Completude', 'Completitud', 'Completezza'), l('Objectivity', 'Objetividade', 'Objetividad', 'Obiettività'),
  l('Timeliness', 'Tempestividade', 'Oportunidad', 'Tempestività'), l('Evidence', 'Evidência', 'Evidencia', 'Evidenza'),
  l('Risk signal', 'Sinal de risco', 'Señal de riesgo', 'Segnale di rischio')
];

export const storySteps = [
  { title: l('Collect', 'Coletar', 'Recopilar', 'Raccogliere'), detail: l('Public records arrive with source, date and denominator intact.', 'Registros públicos chegam com fonte, data e denominador preservados.', 'Los registros públicos llegan con fuente, fecha y denominador preservados.', 'I registri pubblici arrivano con fonte, data e denominatore preservati.') },
  { title: l('Extract', 'Extrair', 'Extraer', 'Estrarre'), detail: l('A reproducible pipeline turns dispersed files into comparable observations.', 'Uma pipeline reproduzível transforma arquivos dispersos em observações comparáveis.', 'Un flujo reproducible convierte archivos dispersos en observaciones comparables.', 'Una pipeline riproducibile trasforma file dispersi in osservazioni comparabili.') },
  { title: l('Evaluate', 'Avaliar', 'Evaluar', 'Valutare'), detail: l('Each record is assessed across five explicit analytical dimensions.', 'Cada registro é avaliado em cinco dimensões analíticas explícitas.', 'Cada registro se evalúa en cinco dimensiones analíticas explícitas.', 'Ogni record viene valutato secondo cinque dimensioni analitiche esplicite.') },
  { title: l('Validate and act', 'Validar e agir', 'Validar y actuar', 'Validare e agire'), detail: l('Automated signals pass through quality gates and human review before supporting action.', 'Sinais automatizados passam por controles de qualidade e revisão humana antes de apoiar uma decisão.', 'Las señales automatizadas pasan por controles de calidad y revisión humana antes de apoyar una decisión.', 'I segnali automatizzati passano attraverso controlli di qualità e revisione umana prima di sostenere una decisione.') }
];

export const at = <T extends LocalizedText>(value: T, locale: Locale) => value[locale];
