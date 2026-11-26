/**
 * Textos das seis salas em quatro idiomas (PT, EN, ES, IT). Fonte editorial: site-astro/src/content/site-*.md
 * (site v1), plano v2 de 15/11/2026, prova de miolo do livro (títulos dos capítulos) e decisões de
 * Eduardo de 26/11/2026: escopo "governança pública, políticas públicas e fiscalização" e site completo nos quatro idiomas.
 * As explicações dos capítulos reformulam a pergunta em outras palavras; não afirmam conteúdo do livro além do título.
 */
import type { Locale } from './site';

export const interestFormUrl = 'https://forms.gle/muWJztR86DSMQXSy9';

export const home = {
  pt: {
    title: 'Eduardo Alencar | Governança pública, com evidência',
    description: 'Eduardo Alencar ajuda governos e instituições a decidir e a conferir se as políticas públicas funcionam: governança pública, avaliação de políticas e fiscalização, com dados e inteligência artificial.',
    eyebrow: 'Eduardo Alencar',
    headline: 'Ajudo o governo a decidir, e a conferir se as políticas públicas funcionam.',
    lede: 'Governança pública, avaliação de políticas e fiscalização, com evidência. Assessor Legislativo Sênior na Câmara dos Deputados, doutor pela University of California, Irvine, e autor de *Governança em Tempo Real*.',
    numbersLabel: 'Números',
    numbers: [
      { figure: '21.023', label: 'requerimentos de informação da Câmara analisados, de 2019 a 2025' },
      { figure: '30.304', label: 'contratações federais rastreadas por sinais de risco' },
      { figure: '20+', label: 'anos no serviço público federal' }
    ],
    pillarsTitle: 'Três frentes de trabalho',
    pillars: [
      { title: 'Governança e capacidade do Estado', text: 'Como o governo planeja, decide e corrige o rumo, e como a tecnologia e a inteligência artificial podem ampliar a capacidade pública, não só entregar sistemas.' },
      { title: 'Avaliação de políticas públicas', text: 'Como saber se uma política funcionou, e não apenas se foi executada: indicadores, desenhos causais e uso dos dados que o próprio governo já produz.' },
      { title: 'Fiscalização e integridade', text: 'Como o Parlamento e os órgãos de controle conferem o que o Executivo faz: requerimentos de informação, compras públicas e risco de fraude, sem tratar alerta como veredito.' }
    ],
    doorsTitle: 'Por onde começar',
    doors: [
      { kicker: 'Assista', title: 'Uma pergunta por vídeo', text: 'Episódios curtos sobre como o governo decide, e como conferir.', path: 'videos/', cta: 'Ver os vídeos' },
      { kicker: 'Assine', title: 'A newsletter de terça', text: 'Uma análise por semana, com material extra só para quem assina.', path: 'newsletter/', cta: 'Assinar' },
      { kicker: 'Leia', title: 'Governança em Tempo Real', text: 'Como o Brasil pode parar de fingir que governa. Editora JusPodivm.', path: 'book/', cta: 'Conhecer o livro' }
    ],
    latest: 'Edição mais recente'
  },
  en: {
    title: 'Eduardo Alencar | Public governance, with evidence',
    description: 'Eduardo Alencar helps governments and institutions decide, and check whether public policies work: public governance, policy evaluation and oversight, with data and artificial intelligence.',
    eyebrow: 'Eduardo Alencar',
    headline: 'I help government decide, and check whether public policies work.',
    lede: 'Public governance, policy evaluation and oversight, with evidence. Senior Legislative Advisor at Brazil’s Chamber of Deputies, PhD from the University of California, Irvine, and author of *Governança em Tempo Real* (“Real-Time Governance”).',
    numbersLabel: 'Numbers',
    numbers: [
      { figure: '21,023', label: 'parliamentary information requests analysed, 2019–2025' },
      { figure: '30,304', label: 'federal contracts screened for risk signals' },
      { figure: '20+', label: 'years in Brazil’s federal public service' }
    ],
    pillarsTitle: 'Three lines of work',
    pillars: [
      { title: 'Governance and state capacity', text: 'How government plans, decides and corrects course, and how technology and artificial intelligence can expand public capacity, not just deliver systems.' },
      { title: 'Public policy evaluation', text: 'How to know a policy worked, not only that it was carried out: indicators, causal designs and use of the data government already produces.' },
      { title: 'Oversight and integrity', text: 'How Parliament and control bodies check what the Executive does: information requests, public procurement and fraud risk, without treating a flag as a verdict.' }
    ],
    doorsTitle: 'Where to start',
    doors: [
      { kicker: 'Watch', title: 'One question per video', text: 'Short episodes on how government decides, and how to check.', path: 'videos/', cta: 'See the videos' },
      { kicker: 'Subscribe', title: 'The Tuesday newsletter', text: 'One analysis a week, with extra material for subscribers only.', path: 'newsletter/', cta: 'Subscribe' },
      { kicker: 'Read', title: 'Real-Time Governance', text: 'How Brazil can stop pretending to govern. Editora JusPodivm (in Portuguese).', path: 'book/', cta: 'About the book' }
    ],
    latest: 'Latest edition'
  },
  es: {
    title: 'Eduardo Alencar | Gobernanza pública, con evidencia',
    description: 'Eduardo Alencar ayuda a gobiernos e instituciones a decidir y a comprobar si las políticas públicas funcionan: gobernanza pública, evaluación de políticas y fiscalización, con datos e inteligencia artificial.',
    eyebrow: 'Eduardo Alencar',
    headline: 'Ayudo al gobierno a decidir y a comprobar si las políticas públicas funcionan.',
    lede: 'Gobernanza pública, evaluación de políticas y fiscalización, con evidencia. Asesor Legislativo Senior en la Cámara de Diputados de Brasil, doctor por la University of California, Irvine, y autor de *Governança em Tempo Real* (“Gobernanza en Tiempo Real”).',
    numbersLabel: 'Cifras',
    numbers: [
      { figure: '21.023', label: 'solicitudes de información parlamentaria analizadas, 2019-2025' },
      { figure: '30.304', label: 'contrataciones federales analizadas por señales de riesgo' },
      { figure: '20+', label: 'años en el servicio público federal de Brasil' }
    ],
    pillarsTitle: 'Tres líneas de trabajo',
    pillars: [
      { title: 'Gobernanza y capacidad del Estado', text: 'Cómo el gobierno planifica, decide y corrige el rumbo, y cómo la tecnología y la inteligencia artificial pueden ampliar la capacidad pública, no solo entregar sistemas.' },
      { title: 'Evaluación de políticas públicas', text: 'Cómo saber si una política funcionó, y no solo si se ejecutó: indicadores, diseños causales y uso de los datos que el propio gobierno ya produce.' },
      { title: 'Fiscalización e integridad', text: 'Cómo el Parlamento y los órganos de control comprueban lo que hace el Ejecutivo: solicitudes de información, compras públicas y riesgo de fraude, sin tratar una alerta como veredicto.' }
    ],
    doorsTitle: 'Por dónde empezar',
    doors: [
      { kicker: 'Mira', title: 'Una pregunta por vídeo', text: 'Episodios breves sobre cómo decide el gobierno y cómo comprobarlo (en portugués).', path: 'videos/', cta: 'Ver los vídeos' },
      { kicker: 'Suscríbete', title: 'La newsletter del martes', text: 'Un análisis por semana, en portugués e inglés, con material extra solo para suscriptores.', path: 'newsletter/', cta: 'Suscribirse' },
      { kicker: 'Lee', title: 'Governança em Tempo Real', text: 'Cómo Brasil puede dejar de fingir que gobierna. Editora JusPodivm (en portugués).', path: 'book/', cta: 'Conocer el libro' }
    ],
    latest: 'Edición más reciente'
  },
  it: {
    title: 'Eduardo Alencar | Governance pubblica, con evidenza',
    description: 'Eduardo Alencar aiuta governi e istituzioni a decidere e a verificare se le politiche pubbliche funzionano: governance pubblica, valutazione delle politiche e controllo, con dati e intelligenza artificiale.',
    eyebrow: 'Eduardo Alencar',
    headline: 'Aiuto il governo a decidere e a verificare se le politiche pubbliche funzionano.',
    lede: 'Governance pubblica, valutazione delle politiche e controllo, con evidenza. Consulente Legislativo Senior alla Camera dei Deputati del Brasile, dottorato alla University of California, Irvine, e autore di *Governança em Tempo Real* (“Governance in tempo reale”).',
    numbersLabel: 'Numeri',
    numbers: [
      { figure: '21.023', label: 'richieste di informazione parlamentari analizzate, 2019-2025' },
      { figure: '30.304', label: 'contratti federali analizzati per segnali di rischio' },
      { figure: '20+', label: 'anni nel servizio pubblico federale del Brasile' }
    ],
    pillarsTitle: 'Tre linee di lavoro',
    pillars: [
      { title: 'Governance e capacità dello Stato', text: 'Come il governo pianifica, decide e corregge la rotta, e come tecnologia e intelligenza artificiale possono ampliare la capacità pubblica, non solo consegnare sistemi.' },
      { title: 'Valutazione delle politiche pubbliche', text: 'Come sapere se una politica ha funzionato, e non solo se è stata eseguita: indicatori, disegni causali e uso dei dati che il governo già produce.' },
      { title: 'Controllo e integrità', text: 'Come il Parlamento e gli organi di controllo verificano ciò che fa l’Esecutivo: richieste di informazione, appalti pubblici e rischio di frode, senza trattare un segnale come verdetto.' }
    ],
    doorsTitle: 'Da dove cominciare',
    doors: [
      { kicker: 'Guarda', title: 'Una domanda per video', text: 'Brevi episodi su come il governo decide e come verificarlo (in portoghese).', path: 'videos/', cta: 'Vedi i video' },
      { kicker: 'Iscriviti', title: 'La newsletter del martedì', text: 'Un’analisi a settimana, in portoghese e inglese, con materiale extra solo per gli iscritti.', path: 'newsletter/', cta: 'Iscriviti' },
      { kicker: 'Leggi', title: 'Governança em Tempo Real', text: 'Come il Brasile può smettere di fingere di governare. Editora JusPodivm (in portoghese).', path: 'book/', cta: 'Scopri il libro' }
    ],
    latest: 'Ultima edizione'
  }
} satisfies Record<Locale, unknown>;

/** Bloco da lista de interesse 2027 (Google Forms, em português). Texto fiel à descrição do formulário: sem preço, sem compromisso. */
export const interest = {
  pt: { eyebrow: 'Lista de interesse 2027', title: 'Governança pública em 2027: conte seu principal problema', text: 'Estou montando cursos curtos, mentoria e conversas a partir dos problemas reais de quem trabalha com governança, integridade e gestão pública. Responda em 2 minutos. Não há preço nem compromisso.', cta: 'Responder ao formulário', note: 'O formulário está em português. As respostas servem só para decidir o que criar e, se você autorizar, para avisar você.' },
  en: { eyebrow: '2027 interest list', title: 'Public governance in 2027: tell me your main problem', text: 'I am building short courses, mentoring and conversations from the real problems of people working in governance, integrity and public management. It takes 2 minutes. No price, no commitment.', cta: 'Fill in the form', note: 'The form is in Portuguese. Answers are used only to decide what to create and, if you agree, to let you know.' },
  es: { eyebrow: 'Lista de interés 2027', title: 'Gobernanza pública en 2027: cuéntame tu principal problema', text: 'Estoy preparando cursos breves, mentoría y conversaciones a partir de los problemas reales de quienes trabajan en gobernanza, integridad y gestión pública. Se responde en 2 minutos. Sin precio ni compromiso.', cta: 'Responder el formulario', note: 'El formulario está en portugués. Las respuestas sirven solo para decidir qué crear y, si lo autorizas, para avisarte.' },
  it: { eyebrow: 'Lista di interesse 2027', title: 'Governance pubblica nel 2027: raccontami il tuo problema principale', text: 'Sto preparando corsi brevi, mentoring e conversazioni a partire dai problemi reali di chi lavora in governance, integrità e gestione pubblica. Bastano 2 minuti. Nessun prezzo, nessun impegno.', cta: 'Compila il modulo', note: 'Il modulo è in portoghese. Le risposte servono solo a decidere cosa creare e, se acconsenti, ad avvisarti.' }
} satisfies Record<Locale, unknown>;

/** Rótulos soltos usados nas páginas. */
export const misc = {
  pt: { chapter: 'Capítulo', episode: 'Episódio', subscribe: 'Assinar', invitation: 'Convite', otherWork: 'Outros trabalhos', coverAlt: 'Capa do livro Governança em Tempo Real', inPortuguese: '', photoLaunch: 'Lançamento de Governança em Tempo Real, na Livraria Leitura, em Brasília, em 22 de outubro de 2026.', photoSigning: 'Sessão de autógrafos no lançamento do livro, em Brasília.' },
  en: { chapter: 'Chapter', episode: 'Episode', subscribe: 'Subscribe', invitation: 'Invitation', otherWork: 'Other work', coverAlt: 'Cover of the book Governança em Tempo Real', inPortuguese: ' (in Portuguese)', photoLaunch: 'Launch of Governança em Tempo Real at Livraria Leitura, Brasília, on 22 October 2026.', photoSigning: 'Book signing at the launch in Brasília.' },
  es: { chapter: 'Capítulo', episode: 'Episodio', subscribe: 'Suscribirse', invitation: 'Invitación', otherWork: 'Otros trabajos', coverAlt: 'Portada del libro Governança em Tempo Real', inPortuguese: ' (en portugués)', photoLaunch: 'Lanzamiento de Governança em Tempo Real en la Livraria Leitura, Brasilia, el 22 de octubre de 2026.', photoSigning: 'Sesión de firmas en el lanzamiento del libro, en Brasilia.' },
  it: { chapter: 'Capitolo', episode: 'Episodio', subscribe: 'Iscriviti', invitation: 'Invito', otherWork: 'Altri lavori', coverAlt: 'Copertina del libro Governança em Tempo Real', inPortuguese: ' (in portoghese)', photoLaunch: 'Presentazione di Governança em Tempo Real alla Livraria Leitura, a Brasília, il 22 ottobre 2026.', photoSigning: 'Firmacopie alla presentazione del libro, a Brasília.' }
} satisfies Record<Locale, unknown>;

type L4 = Record<Locale, string>;
const l = (pt: string, en: string, es: string, it: string): L4 => ({ pt, en, es, it });

/**
 * Nove capítulos. `title` = título do capítulo; `q` = pergunta que ele responde;
 * `gloss` = a mesma pergunta em outras palavras (não afirma conteúdo do livro além do título).
 */
export const chapters: { n: number; title: L4; q: L4; gloss: L4 }[] = [
  { n: 1,
    title: l('A crise da governança por intuição', 'The crisis of governance by intuition', 'La crisis de la gobernanza por intuición', 'La crisi della governance per intuizione'),
    q: l('Por que um país com tantos dados ainda decide por intuição?', 'Why does a country with so much data still decide by intuition?', '¿Por qué un país con tantos datos sigue decidiendo por intuición?', 'Perché un paese con tanti dati decide ancora per intuizione?'),
    gloss: l('Há dados de sobra no governo, mas muita decisão ainda sai de hábito ou de opinião. Qual é a causa?', 'Government holds plenty of data, yet many decisions still come from habit or opinion. What is the cause?', 'El gobierno tiene datos de sobra, pero muchas decisiones siguen saliendo del hábito o de la opinión. ¿Cuál es la causa?', 'Il governo ha dati in abbondanza, ma molte decisioni nascono ancora da abitudine o opinione. Qual è la causa?') },
  { n: 2,
    title: l('Integridade não é ritual', 'Integrity is not a ritual', 'La integridad no es un ritual', 'L’integrità non è un rituale'),
    q: l('O que separa um programa de integridade real de um ritual de conformidade?', 'What separates a real integrity programme from a compliance ritual?', '¿Qué separa un programa de integridad real de un ritual de cumplimiento?', 'Cosa separa un vero programma di integrità da un rituale di conformità?'),
    gloss: l('Um programa de integridade pode existir no papel e não mudar nada. O que diferencia o que funciona do que só cumpre exigência?', 'An integrity programme can exist on paper and change nothing. What tells one that works from one that only meets a requirement?', 'Un programa de integridad puede existir en papel y no cambiar nada. ¿Qué distingue al que funciona del que solo cumple una exigencia?', 'Un programma di integrità può esistere sulla carta e non cambiare nulla. Cosa distingue quello che funziona da quello che soddisfa solo un obbligo?') },
  { n: 3,
    title: l('Controladoria pública orientada para resultados: da conformidade à gestão por evidência', 'Results-oriented public comptrollership: from compliance to evidence-based management', 'Controlaría pública orientada a resultados: del cumplimiento a la gestión por evidencia', 'Controllo pubblico orientato ai risultati: dalla conformità alla gestione basata sull’evidenza'),
    q: l('Como a controladoria deixa de conferir papel e passa a medir resultado?', 'How does internal control stop checking paperwork and start measuring results?', '¿Cómo deja la controlaría de revisar papeles y pasa a medir resultados?', 'Come smette il controllo interno di verificare le carte e inizia a misurare i risultati?'),
    gloss: l('Controle interno que só confere se o papel está em ordem não diz se a política deu resultado. Como mudar o foco para o resultado?', 'Internal control that only checks the paperwork cannot say whether a policy delivered. How do you shift the focus to results?', 'Un control interno que solo revisa si el papel está en orden no dice si la política dio resultado. ¿Cómo cambiar el foco hacia el resultado?', 'Un controllo interno che verifica solo le carte non dice se la politica ha dato risultati. Come spostare l’attenzione sul risultato?') },
  { n: 4,
    title: l('Compras públicas, fraude e sinais fracos', 'Public procurement, fraud and weak signals', 'Compras públicas, fraude y señales débiles', 'Appalti pubblici, frode e segnali deboli'),
    q: l('Como encontrar risco de fraude quando ninguém rotulou a fraude?', 'How do you find fraud risk when no one has labelled the fraud?', '¿Cómo encontrar riesgo de fraude cuando nadie ha etiquetado el fraude?', 'Come trovare il rischio di frode quando nessuno ha etichettato la frode?'),
    gloss: l('Fraude raramente chega identificada. Como achar compras suspeitas por padrões e pistas fracas, sem saber de antemão onde está o problema?', 'Fraud rarely arrives labelled. How can you find suspicious purchases from patterns and weak clues, without knowing in advance where the problem is?', 'El fraude rara vez llega identificado. ¿Cómo encontrar compras sospechosas por patrones y pistas débiles, sin saber de antemano dónde está el problema?', 'La frode raramente arriva etichettata. Come trovare acquisti sospetti da schemi e indizi deboli, senza sapere in anticipo dove sia il problema?') },
  { n: 5,
    title: l('IA não é atalho para rigor', 'AI is not a shortcut to rigour', 'La IA no es un atajo hacia el rigor', 'L’IA non è una scorciatoia verso il rigore'),
    q: l('Quando a IA amplia a capacidade do Estado, e quando só acelera o erro?', 'When does AI expand state capacity, and when does it only speed up mistakes?', '¿Cuándo la IA amplía la capacidad del Estado y cuándo solo acelera el error?', 'Quando l’IA amplia la capacità dello Stato e quando accelera soltanto l’errore?'),
    gloss: l('A IA pode ajudar o governo a fazer mais, ou apenas a errar mais rápido. Em que condições acontece uma coisa ou a outra?', 'AI can help government do more, or simply make mistakes faster. Under what conditions does each happen?', 'La IA puede ayudar al gobierno a hacer más o, simplemente, a equivocarse más rápido. ¿En qué condiciones ocurre una cosa u otra?', 'L’IA può aiutare il governo a fare di più, o solo a sbagliare più in fretta. In quali condizioni accade l’una o l’altra cosa?') },
  { n: 6,
    title: l('Métodos para parar de fingir que avaliamos', 'Methods to stop pretending we evaluate', 'Métodos para dejar de fingir que evaluamos', 'Metodi per smettere di fingere di valutare'),
    q: l('Como saber se uma política funcionou, e não apenas se foi executada?', 'How do we know a policy worked, not just that it was carried out?', '¿Cómo saber si una política funcionó, y no solo si se ejecutó?', 'Come sapere se una politica ha funzionato, e non solo se è stata eseguita?'),
    gloss: l('Executar uma política é diferente de saber se ela funcionou. Que métodos permitem responder à segunda pergunta?', 'Carrying out a policy is not the same as knowing it worked. Which methods can answer the second question?', 'Ejecutar una política no es lo mismo que saber si funcionó. ¿Qué métodos permiten responder a la segunda pregunta?', 'Eseguire una politica non equivale a sapere se ha funzionato. Quali metodi permettono di rispondere alla seconda domanda?') },
  { n: 7,
    title: l('Planejamento, orçamento e accountability: do ciclo formal à gestão por resultados', 'Planning, budgeting and accountability: from formal cycle to managing for results', 'Planificación, presupuesto y rendición de cuentas: del ciclo formal a la gestión por resultados', 'Pianificazione, bilancio e accountability: dal ciclo formale alla gestione per risultati'),
    q: l('Como fazer o ciclo de planejamento e orçamento servir para decidir, e não só para cumprir prazo?', 'How can the planning and budget cycle serve decisions, not just deadlines?', '¿Cómo hacer que el ciclo de planificación y presupuesto sirva para decidir y no solo para cumplir plazos?', 'Come far servire il ciclo di pianificazione e bilancio a decidere, e non solo a rispettare le scadenze?'),
    gloss: l('Planejamento e orçamento costumam virar rotina de prazos. Como fazer com que ajudem a escolher e a corrigir?', 'Planning and budgeting often turn into a calendar of deadlines. How can they help government choose and correct course?', 'La planificación y el presupuesto suelen volverse una rutina de plazos. ¿Cómo lograr que ayuden a elegir y a corregir?', 'Pianificazione e bilancio diventano spesso una routine di scadenze. Come farli servire a scegliere e a correggere?') },
  { n: 8,
    title: l('Capacidade estatal digital: da entrega tecnológica à capacidade pública', 'Digital state capacity: from technology delivery to public capacity', 'Capacidad estatal digital: de la entrega tecnológica a la capacidad pública', 'Capacità statale digitale: dalla consegna tecnologica alla capacità pubblica'),
    q: l('Por que entregar um sistema não é o mesmo que construir capacidade?', 'Why is delivering a system not the same as building capacity?', '¿Por qué entregar un sistema no es lo mismo que construir capacidad?', 'Perché consegnare un sistema non equivale a costruire capacità?'),
    gloss: l('Colocar um sistema novo no ar não deixa o Estado mais capaz por si só. O que faz a capacidade permanecer depois da entrega?', 'Launching a new system does not by itself make the state more capable. What makes capacity last after delivery?', 'Poner en marcha un sistema nuevo no vuelve al Estado más capaz por sí solo. ¿Qué hace que la capacidad permanezca después de la entrega?', 'Mettere online un nuovo sistema non rende da solo lo Stato più capace. Cosa fa durare la capacità dopo la consegna?') },
  { n: 9,
    title: l('Uma agenda prática para o Brasil: da intenção à rotina de aprendizagem', 'A practical agenda for Brazil: from intention to a learning routine', 'Una agenda práctica para Brasil: de la intención a la rutina de aprendizaje', 'Un’agenda pratica per il Brasile: dall’intenzione alla routine di apprendimento'),
    q: l('Que rotinas fariam o governo aprender com os próprios dados?', 'Which routines would make government learn from its own data?', '¿Qué rutinas harían que el gobierno aprendiera de sus propios datos?', 'Quali routine farebbero imparare il governo dai propri dati?'),
    gloss: l('Que hábitos permanentes fariam o governo usar seus próprios dados para corrigir o rumo, em vez de depender de boas intenções?', 'Which standing habits would have government use its own data to correct course, instead of relying on good intentions?', '¿Qué hábitos permanentes harían que el gobierno usara sus propios datos para corregir el rumbo, en lugar de depender de buenas intenciones?', 'Quali abitudini stabili porterebbero il governo a usare i propri dati per correggere la rotta, invece di affidarsi alle buone intenzioni?') }
];

export const book = {
  pt: {
    title: 'Governança em Tempo Real | Livro de Eduardo Alencar',
    description: 'Governança em Tempo Real: como o Brasil pode parar de fingir que governa. Editora JusPodivm, 2026.',
    eyebrow: 'Livro',
    heading: 'Governança em Tempo Real',
    subtitle: 'Como o Brasil pode parar de fingir que governa',
    lede: 'O Brasil precisa sair da governança por intuição e construir uma governança baseada em evidências, capaz de transformar integridade, dados, inteligência artificial e avaliação em capacidade pública mensurável.',
    body: 'Um argumento autoral sobre por que tecnologia, controle e boas intenções não bastam para governar. O livro reúne uma trajetória em fiscalização parlamentar, integridade pública, dados e inteligência artificial aplicada ao setor público em um argumento contínuo, não uma coletânea de artigos.',
    meta: 'Editora JusPodivm · 2026 · ISBN 978-85-442-7915-1',
    cta: 'Ver o livro na Editora JusPodivm',
    chaptersTitle: 'Nove capítulos, nove perguntas',
    chaptersLede: 'Cada capítulo responde a uma pergunta, e cada pergunta vai virar um vídeo curto. Sob cada título, a pergunta aparece dita em outras palavras.',
    glossLabel: 'Em outras palavras',
    episodePending: 'Vídeo em breve',
    episodeHint: 'Cada capítulo vira um vídeo curto. Assine a newsletter para saber quando o primeiro sai.',
    launchTitle: 'Lançamento',
    launch: 'Lançado em 22 de outubro de 2026, na Livraria Leitura do Terraço Shopping, em Brasília, numa noite de conversa e autógrafos.',
    pressTitle: 'Na imprensa',
    press: '“Gestão a partir de evidências”, entrevista ao Correio Braziliense, 11 de outubro de 2026',
    videoCaption: 'Um minuto sobre o livro.'
  },
  en: {
    title: 'Real-Time Governance | Book by Eduardo Alencar',
    description: 'Governança em Tempo Real (“Real-Time Governance”): how Brazil can stop pretending to govern. Editora JusPodivm, 2026, in Portuguese.',
    eyebrow: 'Book',
    heading: 'Governança em Tempo Real',
    subtitle: '“Real-Time Governance: how Brazil can stop pretending to govern” (in Portuguese)',
    lede: 'Brazil needs to move beyond governance by intuition and build evidence-based governance capable of turning integrity, data, AI and evaluation into measurable public capacity.',
    body: 'An original argument for why technology, controls and good intentions are not enough to govern well. The book brings together a career in parliamentary oversight, public integrity, data and applied artificial intelligence into one continuous argument, not a collection of essays.',
    meta: 'Editora JusPodivm · 2026 · ISBN 978-85-442-7915-1',
    cta: 'See the book at Editora JusPodivm',
    chaptersTitle: 'Nine chapters, nine questions',
    chaptersLede: 'Each chapter answers one question, and each question will become a short video. Under each title, the question is restated in other words.',
    glossLabel: 'In other words',
    episodePending: 'Video soon',
    episodeHint: 'Each chapter becomes a short video. Subscribe to the newsletter to hear when the first one is out.',
    launchTitle: 'Launch',
    launch: 'Launched on 22 October 2026 at Livraria Leitura, Terraço Shopping, Brasília, with an evening of conversation and book signing.',
    pressTitle: 'In the press',
    press: '“Gestão a partir de evidências”, interview with Correio Braziliense, 11 October 2026 (in Portuguese)',
    videoCaption: 'One minute on the book (in Portuguese).'
  },
  es: {
    title: 'Governança em Tempo Real | Libro de Eduardo Alencar',
    description: 'Governança em Tempo Real (“Gobernanza en Tiempo Real”): cómo Brasil puede dejar de fingir que gobierna. Editora JusPodivm, 2026, en portugués.',
    eyebrow: 'Libro',
    heading: 'Governança em Tempo Real',
    subtitle: '“Gobernanza en Tiempo Real: cómo Brasil puede dejar de fingir que gobierna” (en portugués)',
    lede: 'Brasil necesita salir de la gobernanza por intuición y construir una gobernanza basada en evidencia, capaz de convertir integridad, datos, inteligencia artificial y evaluación en capacidad pública medible.',
    body: 'Un argumento de autor sobre por qué tecnología, control y buenas intenciones no bastan para gobernar. El libro reúne una trayectoria en fiscalización parlamentaria, integridad pública, datos e inteligencia artificial aplicada al sector público en un argumento continuo, no en una colección de artículos.',
    meta: 'Editora JusPodivm · 2026 · ISBN 978-85-442-7915-1',
    cta: 'Ver el libro en Editora JusPodivm',
    chaptersTitle: 'Nueve capítulos, nueve preguntas',
    chaptersLede: 'Cada capítulo responde a una pregunta, y cada pregunta se convertirá en un vídeo breve. Bajo cada título, la pregunta aparece dicha con otras palabras.',
    glossLabel: 'Con otras palabras',
    episodePending: 'Vídeo próximamente',
    episodeHint: 'Cada capítulo se convierte en un vídeo breve. Suscríbete a la newsletter para saber cuándo sale el primero.',
    launchTitle: 'Lanzamiento',
    launch: 'Lanzado el 22 de octubre de 2026 en la Livraria Leitura del Terraço Shopping, en Brasilia, en una noche de conversación y firmas.',
    pressTitle: 'En la prensa',
    press: '“Gestão a partir de evidências”, entrevista en el Correio Braziliense, 11 de octubre de 2026 (en portugués)',
    videoCaption: 'Un minuto sobre el libro (en portugués).'
  },
  it: {
    title: 'Governança em Tempo Real | Libro di Eduardo Alencar',
    description: 'Governança em Tempo Real (“Governance in tempo reale”): come il Brasile può smettere di fingere di governare. Editora JusPodivm, 2026, in portoghese.',
    eyebrow: 'Libro',
    heading: 'Governança em Tempo Real',
    subtitle: '“Governance in tempo reale: come il Brasile può smettere di fingere di governare” (in portoghese)',
    lede: 'Il Brasile deve uscire dalla governance per intuizione e costruire una governance basata sull’evidenza, capace di trasformare integrità, dati, intelligenza artificiale e valutazione in capacità pubblica misurabile.',
    body: 'Un argomento d’autore sul perché tecnologia, controllo e buone intenzioni non bastano per governare. Il libro riunisce un percorso in controllo parlamentare, integrità pubblica, dati e intelligenza artificiale applicata al settore pubblico in un unico argomento continuo, non in una raccolta di articoli.',
    meta: 'Editora JusPodivm · 2026 · ISBN 978-85-442-7915-1',
    cta: 'Vedi il libro su Editora JusPodivm',
    chaptersTitle: 'Nove capitoli, nove domande',
    chaptersLede: 'Ogni capitolo risponde a una domanda, e ogni domanda diventerà un breve video. Sotto ogni titolo, la domanda è riformulata con altre parole.',
    glossLabel: 'In altre parole',
    episodePending: 'Video in arrivo',
    episodeHint: 'Ogni capitolo diventa un breve video. Iscriviti alla newsletter per sapere quando esce il primo.',
    launchTitle: 'Lancio',
    launch: 'Presentato il 22 ottobre 2026 alla Livraria Leitura del Terraço Shopping, a Brasília, in una serata di conversazione e firmacopie.',
    pressTitle: 'Sulla stampa',
    press: '“Gestão a partir de evidências”, intervista al Correio Braziliense, 11 ottobre 2026 (in portoghese)',
    videoCaption: 'Un minuto sul libro (in portoghese).'
  }
} satisfies Record<Locale, unknown>;

export const pressUrl = 'https://www.correiobraziliense.com.br/economia/2026/10/7518431-gestao-a-partir-de-evidencias.html';

export const videos = {
  pt: {
    title: 'Vídeos | Eduardo Alencar',
    description: 'Episódios curtos sobre como o governo decide e como conferir, capítulo a capítulo de Governança em Tempo Real.',
    eyebrow: 'Vídeos',
    heading: 'Uma pergunta por vídeo',
    lede: 'A temporada “Governança em Tempo Real, capítulo a capítulo” está em preparação. Cada episódio terá uma página com o vídeo, um resumo, a transcrição e as fontes.',
    seasonTitle: 'Temporada em preparação',
    seasonText: 'Quem assina a newsletter fica sabendo quando o primeiro episódio sair.',
    shortsTitle: 'Cortes já publicados',
    shortsLede: 'Trechos curtos da entrevista ao podcast do Correio Braziliense sobre o livro.',
    channel: 'Abrir o canal no YouTube',
    watch: 'Assistir no YouTube',
    summary: 'Resumo', transcript: 'Transcrição', sources: 'Fontes', material: 'Receber o material do episódio'
  },
  en: {
    title: 'Videos | Eduardo Alencar',
    description: 'Short episodes on how government decides and how to check, chapter by chapter of Real-Time Governance.',
    eyebrow: 'Videos',
    heading: 'One question per video',
    lede: 'The season “Real-Time Governance, chapter by chapter” is in preparation. Each episode will have its own page with the video, a summary and sources. Episodes are recorded in Portuguese.',
    seasonTitle: 'Season in preparation',
    seasonText: 'Newsletter subscribers will hear when the first episode is out.',
    shortsTitle: 'Clips already published',
    shortsLede: 'Short clips, in Portuguese, from the Correio Braziliense podcast interview about the book.',
    channel: 'Open the YouTube channel',
    watch: 'Watch on YouTube',
    summary: 'Summary', transcript: 'Transcript', sources: 'Sources', material: 'Get the episode material'
  },
  es: {
    title: 'Vídeos | Eduardo Alencar',
    description: 'Episodios breves sobre cómo decide el gobierno y cómo comprobarlo, capítulo a capítulo de Governança em Tempo Real. En portugués.',
    eyebrow: 'Vídeos',
    heading: 'Una pregunta por vídeo',
    lede: 'La temporada “Gobernanza en Tiempo Real, capítulo a capítulo” está en preparación. Cada episodio tendrá su página con el vídeo, un resumen, la transcripción y las fuentes. Los episodios se graban en portugués.',
    seasonTitle: 'Temporada en preparación',
    seasonText: 'Quienes se suscriben a la newsletter sabrán cuándo sale el primer episodio.',
    shortsTitle: 'Clips ya publicados',
    shortsLede: 'Fragmentos breves, en portugués, de la entrevista al podcast del Correio Braziliense sobre el libro.',
    channel: 'Abrir el canal de YouTube',
    watch: 'Ver en YouTube',
    summary: 'Resumen', transcript: 'Transcripción', sources: 'Fuentes', material: 'Recibir el material del episodio'
  },
  it: {
    title: 'Video | Eduardo Alencar',
    description: 'Brevi episodi su come il governo decide e come verificarlo, capitolo per capitolo di Governança em Tempo Real. In portoghese.',
    eyebrow: 'Video',
    heading: 'Una domanda per video',
    lede: 'La stagione “Governance in tempo reale, capitolo per capitolo” è in preparazione. Ogni episodio avrà la sua pagina con il video, un riassunto, la trascrizione e le fonti. Gli episodi sono registrati in portoghese.',
    seasonTitle: 'Stagione in preparazione',
    seasonText: 'Chi si iscrive alla newsletter saprà quando esce il primo episodio.',
    shortsTitle: 'Clip già pubblicate',
    shortsLede: 'Brevi estratti, in portoghese, dall’intervista al podcast del Correio Braziliense sul libro.',
    channel: 'Apri il canale YouTube',
    watch: 'Guarda su YouTube',
    summary: 'Riassunto', transcript: 'Trascrizione', sources: 'Fonti', material: 'Ricevi il materiale dell’episodio'
  }
} satisfies Record<Locale, unknown>;

export const newsletter = {
  pt: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'Uma análise curta por semana sobre governo, dados e governança pública. Toda terça, por e-mail.',
    eyebrow: 'Newsletter',
    heading: 'Uma análise por semana, toda terça',
    lede: 'Governança pública, políticas públicas, dados e integridade, em texto curto e com fonte. Por e-mail, toda terça, com material extra só para quem assina.',
    getTitle: 'O que você recebe',
    get: [
      'A edição da semana, em português e inglês, no seu e-mail.',
      'Material extra que não sai no LinkedIn.',
      'O aviso de novos vídeos, aulas e materiais antes de todo mundo.'
    ],
    free: 'Gratuito. Você pode cancelar a qualquer momento.',
    themesTitle: 'Temas',
    themes: ['Governança pública e capacidade do Estado', 'Avaliação e política baseada em evidência', 'Integridade, fiscalização e anticorrupção', 'IA no setor público e governo digital'],
    recentTitle: 'Edições recentes',
    linkedin: 'Prefere o LinkedIn? A edição também sai lá, em português e em inglês.',
    linkedinCta: 'Seguir no LinkedIn',
    readAll: 'Ver todas as edições no Substack'
  },
  en: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'One short analysis a week on government, data and public governance. Every Tuesday, by email.',
    eyebrow: 'Newsletter',
    heading: 'One analysis a week, every Tuesday',
    lede: 'Public governance, public policy, data and integrity, in short pieces with sources. By email every Tuesday, with extra material only for subscribers.',
    getTitle: 'What you get',
    get: [
      'The weekly edition, in English and Portuguese, in your inbox.',
      'Extra material that does not appear on LinkedIn.',
      'Early notice of new videos, courses and materials.'
    ],
    free: 'Free. Unsubscribe at any time.',
    themesTitle: 'Themes',
    themes: ['Public governance and state capacity', 'Evaluation and evidence-based policy', 'Integrity, oversight and anti-corruption', 'AI in the public sector and digital government'],
    recentTitle: 'Recent editions',
    linkedin: 'Prefer LinkedIn? The edition also comes out there, in Portuguese and English.',
    linkedinCta: 'Follow on LinkedIn',
    readAll: 'See every edition on Substack'
  },
  es: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'Un análisis breve por semana sobre gobierno, datos y gobernanza pública. Cada martes, por correo.',
    eyebrow: 'Newsletter',
    heading: 'Un análisis por semana, cada martes',
    lede: 'Gobernanza pública, políticas públicas, datos e integridad, en textos breves y con fuentes. Por correo cada martes, con material extra solo para suscriptores.',
    getTitle: 'Qué recibes',
    get: [
      'La edición de la semana, en portugués e inglés, en tu correo.',
      'Material extra que no sale en LinkedIn.',
      'El aviso de nuevos vídeos, clases y materiales antes que nadie.'
    ],
    free: 'Gratis. Puedes darte de baja cuando quieras.',
    themesTitle: 'Temas',
    themes: ['Gobernanza pública y capacidad del Estado', 'Evaluación y política basada en evidencia', 'Integridad, fiscalización y anticorrupción', 'IA en el sector público y gobierno digital'],
    recentTitle: 'Ediciones recientes',
    linkedin: '¿Prefieres LinkedIn? La edición también sale allí, en portugués y en inglés.',
    linkedinCta: 'Seguir en LinkedIn',
    readAll: 'Ver todas las ediciones en Substack'
  },
  it: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'Un’analisi breve a settimana su governo, dati e governance pubblica. Ogni martedì, via e-mail.',
    eyebrow: 'Newsletter',
    heading: 'Un’analisi a settimana, ogni martedì',
    lede: 'Governance pubblica, politiche pubbliche, dati e integrità, in testi brevi e con fonti. Via e-mail ogni martedì, con materiale extra solo per gli iscritti.',
    getTitle: 'Cosa ricevi',
    get: [
      'L’edizione della settimana, in portoghese e inglese, nella tua casella.',
      'Materiale extra che non esce su LinkedIn.',
      'L’avviso di nuovi video, lezioni e materiali prima di tutti.'
    ],
    free: 'Gratuita. Puoi annullare l’iscrizione quando vuoi.',
    themesTitle: 'Temi',
    themes: ['Governance pubblica e capacità dello Stato', 'Valutazione e politiche basate sull’evidenza', 'Integrità, controllo e anticorruzione', 'IA nel settore pubblico e governo digitale'],
    recentTitle: 'Edizioni recenti',
    linkedin: 'Preferisci LinkedIn? L’edizione esce anche lì, in portoghese e in inglese.',
    linkedinCta: 'Segui su LinkedIn',
    readAll: 'Vedi tutte le edizioni su Substack'
  }
} satisfies Record<Locale, unknown>;

export const research = {
  pt: {
    title: 'Pesquisa e dados | Eduardo Alencar',
    description: 'Ensaios, publicações, policy briefs, ferramentas abertas e currículo de Eduardo Alencar, com fonte e link direto.',
    eyebrow: 'Pesquisa e dados',
    heading: 'Para quem quer conferir',
    lede: 'Ensaios, publicações, policy briefs e ferramentas abertas. Cada item abre direto a fonte: DOI, PDF, código ou painel. A lista é atualizada a cada novo texto publicado.',
    filterLabel: 'Filtrar por tipo',
    all: 'Tudo',
    groups: { publicacoes: 'Publicações', briefs: 'Policy briefs', ferramentas: 'Ferramentas e dados', textos: 'Ensaios e newsletters' },
    essaysCount: (n: number) => `${n} textos publicados`,
    agendaTitle: 'Agenda de pesquisa',
    agenda: [
      ['Governança e avaliação de políticas', 'Como o governo mede resultado e aprende com os próprios dados: indicadores, planejamento e desenhos causais para avaliar reformas.'],
      ['Analítica de integridade e compras públicas', 'Tipologias latentes de fornecedores e padrões de risco para orientar a auditoria quando não há rótulo de fraude.'],
      ['Analítica de fiscalização', 'Atenção legislativa e responsividade do Executivo medidas por texto como dado em requerimentos de informação.'],
      ['Corrupção e confiança', 'Causalidade mútua entre experiência de corrupção, percepção de corrupção e confiança institucional.']
    ],
    open: 'Abrir',
    noLink: 'Resumo público; documento sob consulta',
    cvTitle: 'Currículo',
    cvText: 'Formação, trajetória, prêmios e publicações completas.',
    cvCta: 'Baixar o currículo (PDF)',
    profilesTitle: 'Perfis acadêmicos'
  },
  en: {
    title: 'Research & data | Eduardo Alencar',
    description: 'Essays, publications, policy briefs, open tools and CV of Eduardo Alencar, each with its source and a direct link.',
    eyebrow: 'Research & data',
    heading: 'For those who want to check',
    lede: 'Essays, publications, policy briefs and open tools. Every item opens its source directly: DOI, PDF, code or dashboard. The list is updated whenever a new text is published.',
    filterLabel: 'Filter by type',
    all: 'All',
    groups: { publicacoes: 'Publications', briefs: 'Policy briefs', ferramentas: 'Tools & data', textos: 'Essays & newsletters' },
    essaysCount: (n: number) => `${n} published texts`,
    agendaTitle: 'Research agenda',
    agenda: [
      ['Governance and policy evaluation', 'How government measures results and learns from its own data: indicators, planning and causal designs to evaluate reforms.'],
      ['Integrity and procurement analytics', 'Latent supplier typologies and risk patterns that guide audit priorities when fraud labels are sparse.'],
      ['Oversight analytics', 'Legislative attention and executive responsiveness measured through text-as-data on information requests.'],
      ['Corruption and trust', 'Mutual causality between experienced corruption, perceived corruption and institutional trust.']
    ],
    open: 'Open',
    noLink: 'Public summary; document on request',
    cvTitle: 'CV',
    cvText: 'Education, career, awards and full publication list.',
    cvCta: 'Download the CV (PDF)',
    profilesTitle: 'Academic profiles'
  },
  es: {
    title: 'Investigación y datos | Eduardo Alencar',
    description: 'Ensayos, publicaciones, policy briefs, herramientas abiertas y CV de Eduardo Alencar, cada uno con su fuente y enlace directo.',
    eyebrow: 'Investigación y datos',
    heading: 'Para quien quiere comprobar',
    lede: 'Ensayos, publicaciones, policy briefs y herramientas abiertas. Cada elemento abre directamente la fuente: DOI, PDF, código o panel. La lista se actualiza con cada nuevo texto publicado.',
    filterLabel: 'Filtrar por tipo',
    all: 'Todo',
    groups: { publicacoes: 'Publicaciones', briefs: 'Policy briefs', ferramentas: 'Herramientas y datos', textos: 'Ensayos y newsletters' },
    essaysCount: (n: number) => `${n} textos publicados`,
    agendaTitle: 'Agenda de investigación',
    agenda: [
      ['Gobernanza y evaluación de políticas', 'Cómo el gobierno mide resultados y aprende de sus propios datos: indicadores, planificación y diseños causales para evaluar reformas.'],
      ['Analítica de integridad y compras públicas', 'Tipologías latentes de proveedores y patrones de riesgo para orientar la auditoría cuando no hay etiqueta de fraude.'],
      ['Analítica de control', 'Atención legislativa y capacidad de respuesta del Ejecutivo medidas con texto como dato en solicitudes de información.'],
      ['Corrupción y confianza', 'Causalidad mutua entre experiencia de corrupción, percepción de corrupción y confianza institucional.']
    ],
    open: 'Abrir',
    noLink: 'Resumen público; documento bajo consulta',
    cvTitle: 'CV',
    cvText: 'Formación, trayectoria, premios y lista completa de publicaciones.',
    cvCta: 'Descargar el CV (PDF, en inglés)',
    profilesTitle: 'Perfiles académicos'
  },
  it: {
    title: 'Ricerca e dati | Eduardo Alencar',
    description: 'Saggi, pubblicazioni, policy brief, strumenti aperti e CV di Eduardo Alencar, ciascuno con la sua fonte e un link diretto.',
    eyebrow: 'Ricerca e dati',
    heading: 'Per chi vuole verificare',
    lede: 'Saggi, pubblicazioni, policy brief e strumenti aperti. Ogni voce apre direttamente la fonte: DOI, PDF, codice o dashboard. L’elenco si aggiorna a ogni nuovo testo pubblicato.',
    filterLabel: 'Filtra per tipo',
    all: 'Tutto',
    groups: { publicacoes: 'Pubblicazioni', briefs: 'Policy brief', ferramentas: 'Strumenti e dati', textos: 'Saggi e newsletter' },
    essaysCount: (n: number) => `${n} testi pubblicati`,
    agendaTitle: 'Agenda di ricerca',
    agenda: [
      ['Governance e valutazione delle politiche', 'Come il governo misura i risultati e impara dai propri dati: indicatori, pianificazione e disegni causali per valutare le riforme.'],
      ['Analisi dell’integrità e degli appalti pubblici', 'Tipologie latenti di fornitori e schemi di rischio per orientare l’audit quando mancano etichette di frode.'],
      ['Analisi del controllo', 'Attenzione legislativa e reattività dell’Esecutivo misurate con il testo come dato nelle richieste di informazione.'],
      ['Corruzione e fiducia', 'Causalità reciproca tra esperienza di corruzione, percezione della corruzione e fiducia istituzionale.']
    ],
    open: 'Apri',
    noLink: 'Sintesi pubblica; documento su richiesta',
    cvTitle: 'CV',
    cvText: 'Formazione, carriera, premi ed elenco completo delle pubblicazioni.',
    cvCta: 'Scarica il CV (PDF, in inglese)',
    profilesTitle: 'Profili accademici'
  }
} satisfies Record<Locale, unknown>;

export const about = {
  pt: {
    title: 'Sobre | Eduardo Alencar',
    description: 'Quem é Eduardo Alencar, bio para eventos e imprensa, aulas e como convidar.',
    eyebrow: 'Sobre',
    heading: 'Eduardo Alencar',
    paragraphs: [
      'Sou Assessor Legislativo Sênior na Câmara dos Deputados e trabalho há mais de 20 anos no serviço público federal, em funções de governança, integridade, gestão estratégica e fiscalização.',
      'Trabalho para que o governo decida com evidência e confira se as políticas públicas funcionam. Construo bases que medem quanto tempo o Executivo leva para responder ao Parlamento, um método para avaliar a qualidade dessas respostas, e painéis que apontam risco em compras públicas sem tratar alerta como veredito.',
      'Sou doutor e mestre em Social Ecology pela University of California, Irvine, economista pela Universidade de Brasília, e colaboro com o Fraud Research Group da Aston University.'
    ],
    bioTitle: 'Bio para eventos e imprensa',
    bioHint: 'Pode copiar e usar sem pedir autorização.',
    bio: 'Eduardo Alencar é Assessor Legislativo Sênior na Câmara dos Deputados, doutor em Social Ecology pela University of California, Irvine, e autor de Governança em Tempo Real: como o Brasil pode parar de fingir que governa (Editora JusPodivm, 2026). Pesquisa governança pública, avaliação de políticas, integridade, fiscalização parlamentar, fraude em compras públicas e uso responsável de inteligência artificial no governo.',
    copy: 'Copiar', copied: 'Copiado',
    photo: 'Baixar foto (JPG)',
    teachingTitle: 'Aulas',
    teaching: [
      ['Unyleya, Brasília', 'Pós-graduação em Liderança, Governança Pública e Inteligência Artificial. Desde 2024.'],
      ['Gran Faculdade, Brasília', 'Regulação de infraestrutura, concessões, parcerias público-privadas e inteligência artificial. Desde 2024.'],
      ['Enap', 'Governança pública para resultados. Professor eventual, 2023.'],
      ['University of California, Irvine', 'Teaching Assistant em estatística, desenho de pesquisa e criminologia, 2018 a 2020.']
    ],
    cvTitle: 'Currículo',
    cvItems: [
      'Doutorado e mestrado em Social Ecology, University of California, Irvine (2022 e 2020)',
      'MBA Executivo Internacional, Fundação Getulio Vargas (2007)',
      'Bacharelado em Ciências Econômicas, Universidade de Brasília (2003)',
      'Outstanding Student Paper Award, American Society of Criminology (2022)'
    ],
    cvCta: 'Baixar o currículo completo (PDF)',
    inviteTitle: 'Convidar para aula, palestra ou entrevista',
    inviteText: 'Escreva com o tema, a data e o público. Respondo por e-mail.',
    inviteCta: 'Escrever um e-mail',
    listTitle: 'Aulas e materiais futuros',
    listText: 'Quem assina a newsletter recebe o aviso de novas aulas e materiais antes de todo mundo.',
    contactTitle: 'Contato',
    location: 'Brasília, Brasil · Aberto a recolocação internacional'
  },
  en: {
    title: 'About | Eduardo Alencar',
    description: 'Who Eduardo Alencar is, a bio for events and press, teaching and how to get in touch.',
    eyebrow: 'About',
    heading: 'Eduardo Alencar',
    paragraphs: [
      'I am a Senior Legislative Advisor at Brazil’s Chamber of Deputies, with more than 20 years in the federal public service in governance, integrity, strategic management and oversight roles.',
      'I work so that government decides on evidence and checks whether public policies work. I build datasets that measure how long the Executive takes to answer Parliament, a method to assess the quality of those answers, and dashboards that flag procurement risk without treating a flag as a verdict.',
      'I hold a PhD and an MA in Social Ecology from the University of California, Irvine, a BA in Economics from the University of Brasília, and I collaborate with the Fraud Research Group at Aston University.'
    ],
    bioTitle: 'Bio for events and press',
    bioHint: 'Feel free to copy and use it.',
    bio: 'Eduardo Alencar is a Senior Legislative Advisor at Brazil’s Chamber of Deputies, holds a PhD in Social Ecology from the University of California, Irvine, and is the author of Governança em Tempo Real (“Real-Time Governance”, Editora JusPodivm, 2026). His research covers public governance, policy evaluation, integrity, parliamentary oversight, procurement fraud and the responsible use of artificial intelligence in government.',
    copy: 'Copy', copied: 'Copied',
    photo: 'Download photo (JPG)',
    teachingTitle: 'Teaching',
    teaching: [
      ['Unyleya, Brasília', 'Graduate courses in Leadership, Public Governance and Artificial Intelligence. Since 2024.'],
      ['Gran Faculdade, Brasília', 'Infrastructure regulation, concessions, public-private partnerships and artificial intelligence. Since 2024.'],
      ['ENAP, National School of Public Administration', 'Public governance for results. Occasional lecturer, 2023.'],
      ['University of California, Irvine', 'Teaching Assistant in statistics, research design and criminology, 2018–2020.']
    ],
    cvTitle: 'CV',
    cvItems: [
      'PhD and MA in Social Ecology, University of California, Irvine (2022 and 2020)',
      'International Executive MBA, Fundação Getulio Vargas (2007)',
      'BA in Economics, University of Brasília (2003)',
      'Outstanding Student Paper Award, American Society of Criminology (2022)'
    ],
    cvCta: 'Download the full CV (PDF)',
    inviteTitle: 'Invite me to teach, speak or be interviewed',
    inviteText: 'Write with the topic, date and audience. I reply by email.',
    inviteCta: 'Send an email',
    listTitle: 'Future courses and materials',
    listText: 'Newsletter subscribers hear about new courses and materials first.',
    contactTitle: 'Contact',
    location: 'Brasília, Brazil · Open to international relocation'
  },
  es: {
    title: 'Sobre mí | Eduardo Alencar',
    description: 'Quién es Eduardo Alencar, bio para eventos y prensa, docencia y cómo invitarlo.',
    eyebrow: 'Sobre mí',
    heading: 'Eduardo Alencar',
    paragraphs: [
      'Soy Asesor Legislativo Senior en la Cámara de Diputados de Brasil y llevo más de 20 años en el servicio público federal, en funciones de gobernanza, integridad, gestión estratégica y fiscalización.',
      'Trabajo para que el gobierno decida con evidencia y compruebe si las políticas públicas funcionan. Construyo bases de datos que miden cuánto tarda el Ejecutivo en responder al Parlamento, un método para evaluar la calidad de esas respuestas y paneles que señalan riesgo en las compras públicas sin tratar una alerta como veredicto.',
      'Soy doctor y magíster en Social Ecology por la University of California, Irvine, economista por la Universidad de Brasilia, y colaboro con el Fraud Research Group de la Aston University.'
    ],
    bioTitle: 'Bio para eventos y prensa',
    bioHint: 'Puedes copiarla y usarla libremente.',
    bio: 'Eduardo Alencar es Asesor Legislativo Senior en la Cámara de Diputados de Brasil, doctor en Social Ecology por la University of California, Irvine, y autor de Governança em Tempo Real (“Gobernanza en Tiempo Real”, Editora JusPodivm, 2026). Investiga gobernanza pública, evaluación de políticas, integridad, fiscalización parlamentaria, fraude en compras públicas y uso responsable de la inteligencia artificial en el gobierno.',
    copy: 'Copiar', copied: 'Copiado',
    photo: 'Descargar foto (JPG)',
    teachingTitle: 'Docencia',
    teaching: [
      ['Unyleya, Brasilia', 'Posgrado en Liderazgo, Gobernanza Pública e Inteligencia Artificial. Desde 2024.'],
      ['Gran Faculdade, Brasilia', 'Regulación de infraestructura, concesiones, alianzas público-privadas e inteligencia artificial. Desde 2024.'],
      ['Enap, Escuela Nacional de Administración Pública', 'Gobernanza pública para resultados. Profesor invitado, 2023.'],
      ['University of California, Irvine', 'Teaching Assistant en estadística, diseño de investigación y criminología, 2018 a 2020.']
    ],
    cvTitle: 'CV',
    cvItems: [
      'Doctorado y maestría en Social Ecology, University of California, Irvine (2022 y 2020)',
      'MBA Ejecutivo Internacional, Fundação Getulio Vargas (2007)',
      'Licenciatura en Ciencias Económicas, Universidad de Brasilia (2003)',
      'Outstanding Student Paper Award, American Society of Criminology (2022)'
    ],
    cvCta: 'Descargar el CV completo (PDF, en inglés)',
    inviteTitle: 'Invitar a una clase, charla o entrevista',
    inviteText: 'Escribe con el tema, la fecha y el público. Respondo por correo.',
    inviteCta: 'Escribir un correo',
    listTitle: 'Clases y materiales futuros',
    listText: 'Quienes se suscriben a la newsletter reciben el aviso de nuevas clases y materiales antes que nadie.',
    contactTitle: 'Contacto',
    location: 'Brasilia, Brasil · Abierto a reubicación internacional'
  },
  it: {
    title: 'Chi sono | Eduardo Alencar',
    description: 'Chi è Eduardo Alencar, bio per eventi e stampa, didattica e come invitarlo.',
    eyebrow: 'Chi sono',
    heading: 'Eduardo Alencar',
    paragraphs: [
      'Sono Consulente Legislativo Senior alla Camera dei Deputati del Brasile e lavoro da oltre 20 anni nel servizio pubblico federale, con funzioni di governance, integrità, gestione strategica e controllo.',
      'Lavoro perché il governo decida sulla base dell’evidenza e verifichi se le politiche pubbliche funzionano. Costruisco basi di dati che misurano quanto tempo impiega l’Esecutivo a rispondere al Parlamento, un metodo per valutare la qualità di quelle risposte e dashboard che segnalano il rischio negli appalti pubblici senza trattare un segnale come verdetto.',
      'Ho un dottorato e un master in Social Ecology alla University of California, Irvine, una laurea in Economia all’Università di Brasília, e collaboro con il Fraud Research Group della Aston University.'
    ],
    bioTitle: 'Bio per eventi e stampa',
    bioHint: 'Puoi copiarla e usarla liberamente.',
    bio: 'Eduardo Alencar è Consulente Legislativo Senior alla Camera dei Deputati del Brasile, dottore in Social Ecology alla University of California, Irvine, e autore di Governança em Tempo Real (“Governance in tempo reale”, Editora JusPodivm, 2026). Studia governance pubblica, valutazione delle politiche, integrità, controllo parlamentare, frodi negli appalti pubblici e uso responsabile dell’intelligenza artificiale nel governo.',
    copy: 'Copia', copied: 'Copiato',
    photo: 'Scarica la foto (JPG)',
    teachingTitle: 'Didattica',
    teaching: [
      ['Unyleya, Brasília', 'Post-laurea in Leadership, Governance Pubblica e Intelligenza Artificiale. Dal 2024.'],
      ['Gran Faculdade, Brasília', 'Regolazione delle infrastrutture, concessioni, partenariati pubblico-privati e intelligenza artificiale. Dal 2024.'],
      ['Enap, Scuola Nazionale di Amministrazione Pubblica', 'Governance pubblica per i risultati. Docente occasionale, 2023.'],
      ['University of California, Irvine', 'Teaching Assistant in statistica, disegno della ricerca e criminologia, 2018-2020.']
    ],
    cvTitle: 'CV',
    cvItems: [
      'Dottorato e master in Social Ecology, University of California, Irvine (2022 e 2020)',
      'MBA Executive Internazionale, Fundação Getulio Vargas (2007)',
      'Laurea in Scienze Economiche, Università di Brasília (2003)',
      'Outstanding Student Paper Award, American Society of Criminology (2022)'
    ],
    cvCta: 'Scarica il CV completo (PDF, in inglese)',
    inviteTitle: 'Invitami a una lezione, un intervento o un’intervista',
    inviteText: 'Scrivi con il tema, la data e il pubblico. Rispondo via e-mail.',
    inviteCta: 'Scrivi un’e-mail',
    listTitle: 'Lezioni e materiali futuri',
    listText: 'Chi si iscrive alla newsletter riceve per primo l’avviso di nuove lezioni e materiali.',
    contactTitle: 'Contatti',
    location: 'Brasília, Brasile · Disponibile a trasferimento internazionale'
  }
} satisfies Record<Locale, unknown>;
