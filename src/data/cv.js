// projects and hobbies share the same shape so the reusable modal (phase 5) can show either:
// { id, title, summary, meta, tags, details, links, icon? }

export const about = {
  intro:
    'Estudante de Engenharia Informática com experiência prática em desenvolvimento de software e web, com interesse em sistemas backend, cloud computing e inteligência artificial.',
  body: 'Tenho experiência a desenvolver aplicações e APIs com Kotlin, Ktor, React, TypeScript e PostgreSQL. Continuo a expandir as minhas competências através de projetos académicos, certificações e formação pós-graduada, com foco na resolução de problemas e no desenvolvimento prático de software.',
  current:
    'Atualmente frequento o Mestrado em Engenharia Informática e Tecnologia Web (UTAD · Universidade Aberta), depois da Licenciatura em Engenharia Informática no ISEL.',
  interests: ['Sistemas backend', 'Cloud computing', 'Inteligência artificial'],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Proficiência profissional (EF SET C2)' },
  ],
}

export const projects = [
  {
    id: 'banca',
    title: 'Banca',
    summary: 'Casino social multijogo com fichas virtuais e agentes de IA que jogam e treinam através de MCP.',
    meta: 'Em desenvolvimento',
    tags: ['Kotlin', 'Ktor', 'WebSockets', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MCP'],
    details: [
      "Texas Hold'em, blackjack e roleta europeia, a solo ou com outros jogadores em mesas partilhadas ou privadas.",
      'Um agente baseado num modelo de linguagem joga como adversário no póquer e funciona como treinador no blackjack, decidindo através de ferramentas expostas via Model Context Protocol, com o raciocínio transmitido em tempo real.',
      'Apenas fichas virtuais: não envolve dinheiro real.',
    ],
    links: [
      { label: 'Repositório', url: 'https://github.com/xicoooooo/banca', icon: 'github' },
      { label: 'Experimentar', url: 'https://banca-xico.vercel.app', icon: 'arrow-up-right' },
    ],
  },
  {
    id: 'aurinne',
    title: 'Aurinne - Wellness PWA',
    summary: 'PWA de bem-estar mobile-first, focada em hábitos saudáveis e gestão do estilo de vida.',
    meta: 'jun 2026 - set 2026',
    tags: ['React', 'TypeScript', 'Supabase', 'Vite', 'Tailwind CSS'],
    details: [
      'PWA mobile-first desenvolvida com React e TypeScript, focada em hábitos saudáveis e gestão do estilo de vida.',
      'Integração com a autenticação e os serviços cloud do Supabase, com componentes reutilizáveis, interface responsiva e uma arquitetura frontend moderna.',
    ],
    links: [],
    privateRepo: true,
  },
  {
    id: 'api-performance-monitor',
    title: 'API Performance Monitor',
    summary: 'Plataforma de observabilidade para monitorizar o desempenho e a disponibilidade de APIs web.',
    meta: 'fev 2026 - jun 2026',
    tags: ['Kotlin', 'Ktor', 'PostgreSQL', 'Compose Multiplatform', 'SSE', 'OpenAPI'],
    details: [
      'Monitorização do desempenho e da disponibilidade de APIs web através de pedidos HTTP automáticos e processamento assíncrono.',
      'APIs RESTful, autenticação JWT, documentação OpenAPI, Server-Sent Events (SSE) e persistência em PostgreSQL, com Kotlin e Ktor.',
    ],
    links: [
      { label: 'Repositório', url: 'https://github.com/zYzzcAshh/api-performance-monitor', icon: 'github' },
    ],
  },
  {
    id: 'poker-dice',
    title: 'Chelas Multiplayer Poker Dice',
    summary: 'Jogo multijogador full-stack de Poker Dice com comunicação em tempo real.',
    meta: 'out 2025 - dez 2025',
    tags: ['React', 'TypeScript', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'SSE'],
    details: [
      'Aplicação full-stack com frontend em React/TypeScript e backend em Kotlin/Spring Boot.',
      'Comunicação em tempo real com SSE, sistema de lobby multijogador, APIs REST e persistência em PostgreSQL.',
    ],
    links: [],
    privateRepo: true,
  },
  {
    id: '3d-portfolio',
    title: '3D Interactive Portfolio',
    summary: 'Portefólio pessoal interativo em 3D para apresentar projetos e experiência técnica.',
    meta: null,
    tags: ['React', 'Vite', 'JavaScript', 'Three.js', 'Vercel'],
    details: [
      'Portefólio pessoal interativo em 3D, criado para apresentar projetos e experiência técnica.',
      'Modelos 3D interativos (.glb) para apresentar as tecnologias que utilizo e uma linha temporal do percurso académico e profissional.',
    ],
    links: [
      { label: 'Repositório', url: 'https://github.com/xicoooooo/3D_Portfolio', icon: 'github' },
      { label: 'Ver online', url: 'https://3d-francisco-portfolio.vercel.app', icon: 'arrow-up-right' },
    ],
  },
]

export const skills = [
  { group: 'Linguagens', items: ['Kotlin', 'Java', 'JavaScript', 'TypeScript'] },
  { group: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend e APIs', items: ['Ktor', 'Spring Boot', 'REST APIs', 'SSE', 'JWT', 'OpenAPI'] },
  { group: 'Bases de dados e cloud', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'AWS'] },
  { group: 'Ferramentas', items: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'VS Code'] },
  {
    group: 'Conceitos',
    items: [
      'Programação orientada a objetos',
      'Estruturas de dados',
      'Desenvolvimento de APIs',
      'Autenticação',
      'Arquitetura cliente-servidor',
    ],
  },
]

export const education = [
  {
    degree: 'Mestrado em Engenharia Informática e Tecnologia Web',
    school: 'UTAD · Universidade Aberta',
    period: '2026 - 2028',
  },
  {
    degree: 'Licenciatura em Engenharia Informática',
    school: 'ISEL - Instituto Superior de Engenharia de Lisboa',
    period: '2023 - 2026',
  },
]

export const certificates = [
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
  { name: 'Claude with Amazon Bedrock', issuer: 'Anthropic' },
  { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic' },
  { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild' },
  { name: 'EF SET English Certificate (C2 Proficient)', issuer: 'EF SET' },
]

// TODO: `details` still need the user's own words for each hobby (used by the modal in phase 5)
export const hobbies = [
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    summary: 'Tecnologia, programação e exploração de novas ferramentas.',
    icon: 'code',
    tags: [],
    details: [],
    links: [],
  },
  {
    id: 'projetos-pessoais',
    title: 'Projetos pessoais',
    summary: 'Ideias e desenvolvimento de projetos próprios.',
    icon: 'bulb',
    tags: [],
    details: [],
    links: [],
  },
  {
    id: 'padel',
    title: 'Padel',
    summary: 'Cerca de 10 anos de prática, os últimos 4 com maior foco competitivo.',
    icon: 'ball-tennis',
    tags: [],
    details: [],
    links: [],
  },
]
