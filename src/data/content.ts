/**
 * Textos das seis salas (PT e EN). Fonte editorial: site-astro/src/content/site-pt.md e site-en.md
 * (site v1), plano v2 de 15/11/2026 e prova de miolo do livro (títulos dos capítulos).
 * As perguntas dos capítulos são redação editorial para aprovação de Eduardo.
 */
import type { FullLocale } from './site';

export const home = {
  pt: {
    title: 'Eduardo Alencar | Integridade pública, medida',
    description: 'Eduardo Alencar mede se a fiscalização pública funciona de fato e mostra como o governo pode decidir por evidência.',
    eyebrow: 'Eduardo Alencar',
    headline: 'Meço se a fiscalização pública funciona de fato, e mostro como o governo pode decidir por evidência.',
    lede: 'Assessor Legislativo Sênior na Câmara dos Deputados, doutor pela University of California, Irvine, e autor de *Governança em Tempo Real*.',
    numbers: [
      { figure: '13.042', label: 'pares de requerimento e resposta parlamentar avaliados' },
      { figure: '30.304', label: 'contratações federais rastreadas por sinais de risco' },
      { figure: '20+', label: 'anos no serviço público federal' }
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
    title: 'Eduardo Alencar | Public integrity, measured',
    description: 'Eduardo Alencar measures whether public oversight actually works and shows how government can decide on evidence.',
    eyebrow: 'Eduardo Alencar',
    headline: 'I measure whether public oversight actually works, and show how government can decide on evidence.',
    lede: 'Senior Legislative Advisor at Brazil’s Chamber of Deputies, PhD from the University of California, Irvine, and author of *Governança em Tempo Real* (“Real-Time Governance”).',
    numbers: [
      { figure: '13,042', label: 'parliamentary request–response pairs scored' },
      { figure: '30,304', label: 'federal contracts screened for risk signals' },
      { figure: '20+', label: 'years in Brazil’s federal public service' }
    ],
    doorsTitle: 'Where to start',
    doors: [
      { kicker: 'Watch', title: 'One question per video', text: 'Short episodes on how government decides, and how to check.', path: 'videos/', cta: 'See the videos' },
      { kicker: 'Subscribe', title: 'The Tuesday newsletter', text: 'One analysis a week, with extra material for subscribers only.', path: 'newsletter/', cta: 'Subscribe' },
      { kicker: 'Read', title: 'Real-Time Governance', text: 'How Brazil can stop pretending to govern. Editora JusPodivm (in Portuguese).', path: 'book/', cta: 'About the book' }
    ],
    latest: 'Latest edition'
  }
} satisfies Record<FullLocale, unknown>;

export const chapters: { n: number; pt: string; en: string; qpt: string; qen: string }[] = [
  { n: 1, pt: 'A crise da governança por intuição', en: 'The crisis of governance by intuition',
    qpt: 'Por que um país com tantos dados ainda decide por intuição?', qen: 'Why does a country with so much data still decide by intuition?' },
  { n: 2, pt: 'Integridade não é ritual', en: 'Integrity is not a ritual',
    qpt: 'O que separa um programa de integridade real de um ritual de conformidade?', qen: 'What separates a real integrity programme from a compliance ritual?' },
  { n: 3, pt: 'Controladoria pública orientada para resultados: da conformidade à gestão por evidência', en: 'Results-oriented public comptrollership: from compliance to evidence-based management',
    qpt: 'Como a controladoria deixa de conferir papel e passa a medir resultado?', qen: 'How does internal control stop checking paperwork and start measuring results?' },
  { n: 4, pt: 'Compras públicas, fraude e sinais fracos', en: 'Public procurement, fraud and weak signals',
    qpt: 'Como encontrar risco de fraude quando ninguém rotulou a fraude?', qen: 'How do you find fraud risk when no one has labelled the fraud?' },
  { n: 5, pt: 'IA não é atalho para rigor', en: 'AI is not a shortcut to rigour',
    qpt: 'Quando a IA amplia a capacidade do Estado, e quando só acelera o erro?', qen: 'When does AI expand state capacity, and when does it only speed up mistakes?' },
  { n: 6, pt: 'Métodos para parar de fingir que avaliamos', en: 'Methods to stop pretending we evaluate',
    qpt: 'Como saber se uma política funcionou, e não apenas se foi executada?', qen: 'How do we know a policy worked, not just that it was carried out?' },
  { n: 7, pt: 'Planejamento, orçamento e accountability: do ciclo formal à gestão por resultados', en: 'Planning, budgeting and accountability: from formal cycle to managing for results',
    qpt: 'Como fazer o ciclo de planejamento e orçamento servir para decidir, e não só para cumprir prazo?', qen: 'How can the planning and budget cycle serve decisions, not just deadlines?' },
  { n: 8, pt: 'Capacidade estatal digital: da entrega tecnológica à capacidade pública', en: 'Digital state capacity: from technology delivery to public capacity',
    qpt: 'Por que entregar um sistema não é o mesmo que construir capacidade?', qen: 'Why is delivering a system not the same as building capacity?' },
  { n: 9, pt: 'Uma agenda prática para o Brasil: da intenção à rotina de aprendizagem', en: 'A practical agenda for Brazil: from intention to a learning routine',
    qpt: 'Que rotinas fariam o governo aprender com os próprios dados?', qen: 'Which routines would make government learn from its own data?' }
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
    chaptersLede: 'Cada capítulo responde a uma pergunta. Cada pergunta vai virar um episódio em vídeo.',
    chapter: 'Capítulo',
    episodePending: 'Episódio em preparação',
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
    chaptersLede: 'Each chapter answers one question. Each question will become a video episode.',
    chapter: 'Chapter',
    episodePending: 'Episode in preparation',
    launchTitle: 'Launch',
    launch: 'Launched on 22 October 2026 at Livraria Leitura, Terraço Shopping, Brasília, with an evening of conversation and book signing.',
    pressTitle: 'In the press',
    press: '“Gestão a partir de evidências”, interview with Correio Braziliense, 11 October 2026 (in Portuguese)',
    videoCaption: 'One minute on the book (in Portuguese).'
  }
} satisfies Record<FullLocale, unknown>;

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
  }
} satisfies Record<FullLocale, unknown>;

export const newsletter = {
  pt: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'Uma análise curta por semana sobre governo, dados e integridade pública. Toda terça, por e-mail.',
    eyebrow: 'Newsletter',
    heading: 'Uma análise por semana, toda terça',
    lede: 'Governo, dados e integridade pública, em texto curto e com fonte. Por e-mail, às 7h de terça, com material extra só para quem assina.',
    getTitle: 'O que você recebe',
    get: [
      'A edição da semana, em português e inglês, antes de sair no LinkedIn.',
      'Material extra que não sai no LinkedIn.',
      'O aviso de novos vídeos, aulas e materiais antes de todo mundo.'
    ],
    free: 'Gratuito. Você pode cancelar a qualquer momento.',
    themesTitle: 'Temas',
    themes: ['IA no setor público e governança digital', 'Integridade e anticorrupção', 'Política baseada em evidência', 'Ecossistemas digitais e inclusão'],
    recentTitle: 'Edições recentes',
    linkedin: 'Prefere o LinkedIn? A mesma edição sai às 9h em português e às 11h em inglês.',
    linkedinCta: 'Seguir no LinkedIn',
    readAll: 'Ver todas as edições no Substack'
  },
  en: {
    title: 'Newsletter | Eduardo Alencar',
    description: 'One short analysis a week on government, data and public integrity. Every Tuesday, by email.',
    eyebrow: 'Newsletter',
    heading: 'One analysis a week, every Tuesday',
    lede: 'Government, data and public integrity, in short pieces with sources. By email at 7 am Brasília time on Tuesdays, with extra material only for subscribers.',
    getTitle: 'What you get',
    get: [
      'The weekly edition, in English and Portuguese, before it appears on LinkedIn.',
      'Extra material that does not appear on LinkedIn.',
      'Early notice of new videos, courses and materials.'
    ],
    free: 'Free. Unsubscribe at any time.',
    themesTitle: 'Themes',
    themes: ['AI in the public sector and digital governance', 'Integrity and anti-corruption', 'Evidence-based policy', 'Digital ecosystems and inclusion'],
    recentTitle: 'Recent editions',
    linkedin: 'Prefer LinkedIn? The same edition comes out at 9 am in Portuguese and 11 am in English.',
    linkedinCta: 'Follow on LinkedIn',
    readAll: 'See every edition on Substack'
  }
} satisfies Record<FullLocale, unknown>;

export const research = {
  pt: {
    title: 'Pesquisa e dados | Eduardo Alencar',
    description: 'Publicações, policy briefs, ferramentas abertas e currículo de Eduardo Alencar, com fonte e link direto.',
    eyebrow: 'Pesquisa e dados',
    heading: 'Para quem quer conferir',
    lede: 'Publicações, policy briefs e ferramentas abertas. Cada item abre direto a fonte: DOI, PDF, código ou painel.',
    filterLabel: 'Filtrar por tipo',
    all: 'Tudo',
    groups: { publicacoes: 'Publicações', briefs: 'Policy briefs', ferramentas: 'Ferramentas e dados', textos: 'Ensaios' },
    agendaTitle: 'Agenda de pesquisa',
    agenda: [
      ['Analítica de integridade e compras públicas', 'Tipologias latentes de fornecedores e padrões de risco para orientar a auditoria quando não há rótulo de fraude.'],
      ['Inferência causal para reformas', 'Efeito de reformas anticorrupção e institucionais sobre governança e desenvolvimento, com desenhos contrafactuais.'],
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
    description: 'Publications, policy briefs, open tools and CV of Eduardo Alencar, each with its source and a direct link.',
    eyebrow: 'Research & data',
    heading: 'For those who want to check',
    lede: 'Publications, policy briefs and open tools. Every item opens its source directly: DOI, PDF, code or dashboard.',
    filterLabel: 'Filter by type',
    all: 'All',
    groups: { publicacoes: 'Publications', briefs: 'Policy briefs', ferramentas: 'Tools & data', textos: 'Essays' },
    agendaTitle: 'Research agenda',
    agenda: [
      ['Integrity and procurement analytics', 'Latent supplier typologies and risk patterns that guide audit priorities when fraud labels are sparse.'],
      ['Causal inference for reforms', 'Effects of anti-corruption and institutional reforms on governance and development, using counterfactual designs.'],
      ['Oversight analytics', 'Legislative attention and executive responsiveness measured through text-as-data on information requests.'],
      ['Corruption and trust', 'Mutual causality between experienced corruption, perceived corruption and institutional trust.']
    ],
    open: 'Open',
    noLink: 'Public summary; document on request',
    cvTitle: 'CV',
    cvText: 'Education, career, awards and full publication list.',
    cvCta: 'Download the CV (PDF)',
    profilesTitle: 'Academic profiles'
  }
} satisfies Record<FullLocale, unknown>;

export const about = {
  pt: {
    title: 'Sobre | Eduardo Alencar',
    description: 'Quem é Eduardo Alencar, bio para eventos e imprensa, aulas e como convidar.',
    eyebrow: 'Sobre',
    heading: 'Eduardo Alencar',
    paragraphs: [
      'Sou Assessor Legislativo Sênior na Câmara dos Deputados e trabalho há mais de 20 anos no serviço público federal, em funções de governança, integridade, gestão estratégica e fiscalização.',
      'Construo a infraestrutura de evidência que mostra se a fiscalização pública funciona de fato: bases e sistemas que medem se o Executivo responde ao Parlamento com substância, e painéis que apontam risco em compras públicas sem tratar alerta como veredito.',
      'Sou doutor e mestre em Social Ecology pela University of California, Irvine, economista pela Universidade de Brasília e membro do Fraud Research Group da Aston University.'
    ],
    bioTitle: 'Bio para eventos e imprensa',
    bioHint: 'Pode copiar e usar sem pedir autorização.',
    bio: 'Eduardo Alencar é Assessor Legislativo Sênior na Câmara dos Deputados, doutor em Social Ecology pela University of California, Irvine, e autor de Governança em Tempo Real: como o Brasil pode parar de fingir que governa (Editora JusPodivm, 2026). Pesquisa integridade pública, fiscalização parlamentar, fraude em compras públicas e uso responsável de inteligência artificial no governo.',
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
      'I build the evidence infrastructure that shows whether public oversight actually works: datasets and systems that measure whether the Executive answers Parliament with substance, and dashboards that flag procurement risk without treating a flag as a verdict.',
      'I hold a PhD and an MA in Social Ecology from the University of California, Irvine, a BA in Economics from the University of Brasília, and I am a member of the Fraud Research Group at Aston University.'
    ],
    bioTitle: 'Bio for events and press',
    bioHint: 'Feel free to copy and use it.',
    bio: 'Eduardo Alencar is a Senior Legislative Advisor at Brazil’s Chamber of Deputies, holds a PhD in Social Ecology from the University of California, Irvine, and is the author of Governança em Tempo Real (“Real-Time Governance”, Editora JusPodivm, 2026). His research covers public integrity, parliamentary oversight, procurement fraud and the responsible use of artificial intelligence in government.',
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
  }
} satisfies Record<FullLocale, unknown>;

/** Página única em espanhol e italiano: bio, CV e links. */
export const single = {
  es: {
    title: 'Eduardo Alencar | Integridad pública, medida',
    description: 'Eduardo Alencar: bio, CV y enlaces. Gobernanza, integridad pública y evidencia en el sector público.',
    headline: 'Mido si la fiscalización pública realmente funciona y muestro cómo el gobierno puede decidir con evidencia.',
    bio: [
      'Asesor Legislativo Senior en la Cámara de Diputados de Brasil, con más de 20 años en el servicio público federal. Doctor en Social Ecology por la University of California, Irvine, y miembro del Fraud Research Group de la Aston University.',
      'Autor de *Governança em Tempo Real* (Editora JusPodivm, 2026, en portugués), sobre cómo pasar de la gobernanza por intuición a la gobernanza basada en evidencia.'
    ],
    numbers: [['13.042', 'pares de solicitud y respuesta parlamentaria evaluados'], ['30.304', 'contrataciones federales analizadas por señales de riesgo']],
    cv: 'Descargar el CV (PDF)', more: 'El sitio completo está en portugués y en inglés.', pt: 'Ver en portugués', en: 'Ver en inglés',
    contact: 'Contacto', newsletter: 'La newsletter semanal se publica en portugués y en inglés.'
  },
  it: {
    title: 'Eduardo Alencar | Integrità pubblica, misurata',
    description: 'Eduardo Alencar: biografia, CV e link. Governance, integrità pubblica ed evidenza nel settore pubblico.',
    headline: 'Misuro se il controllo pubblico funziona davvero e mostro come il governo può decidere sulla base dell’evidenza.',
    bio: [
      'Consulente Legislativo Senior alla Camera dei Deputati del Brasile, con oltre 20 anni nel servizio pubblico federale. Dottorato in Social Ecology alla University of California, Irvine, e membro del Fraud Research Group della Aston University.',
      'Autore di *Governança em Tempo Real* (Editora JusPodivm, 2026, in portoghese), su come passare dalla governance per intuizione alla governance basata sull’evidenza.'
    ],
    numbers: [['13.042', 'coppie di richieste e risposte parlamentari valutate'], ['30.304', 'contratti federali analizzati per segnali di rischio']],
    cv: 'Scarica il CV (PDF)', more: 'Il sito completo è in portoghese e in inglese.', pt: 'Vedi in portoghese', en: 'Vedi in inglese',
    contact: 'Contatti', newsletter: 'La newsletter settimanale esce in portoghese e in inglese.'
  }
};
