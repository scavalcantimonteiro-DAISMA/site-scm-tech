export const PROJECT_CATEGORIES = [
  'Todos',
  'ERPs & Gestão',
  'Gestão de Igrejas',
  'CRM Telecom',
  'Dashboards & BI',
  'Automações & Bots',
  'Apps & PDV',
  'Jogos Infantis',
];

export const PROJECTS = [
  {
    id: 'erp-empresarial',
    title: 'ERP Empresarial & Distribuição',
    subtitle: 'Controle total de estoque, compras, vendas, fiscal, financeiro e auditoria',
    category: 'ERPs & Gestão',
    badge: 'Sistema Corporativo Full-Stack',
    accent: 'cyan',
    previewType: 'erp',
    image: '/assets/real_screens/painel_financeiro.png',
    description:
      'Plataforma ERP completa para empresas comerciais e distribuidoras que precisam unificar operação, estoque multi-depósitos, fluxo de compras/vendas, financeiro, fiscal e governança com trilha de auditoria imutável.',
    modules: [
      {
        name: 'Estoque & Multi-Depósitos',
        detail: 'Controle por SKU, transferências entre filiais, alertas de estoque mínimo e histórico de movimentação.',
      },
      {
        name: 'Vendas, Compras & Aprovações',
        detail: 'Pedidos com fluxo de alçada, emissão de orçamentos, entrada de notas e vínculo automático com fornecedores.',
      },
      {
        name: 'Financeiro & Fiscal Integrado',
        detail: 'Contas a pagar e receber, fluxo de caixa, conciliação e controle de documentos fiscais.',
      },
      {
        name: 'Segurança & Auditoria Imutável',
        detail: 'Permissões granulares por usuário/setor, bloqueio por tentativas inválidas e log completo de cada ação.',
      },
    ],
    capabilities: [
      'Gerenciar múltiplos estabelecimentos e depósitos no mesmo painel',
      'Definir exatamente o que cada colaborador pode ver, editar ou aprovar',
      'Rastrear quem alterou preços, estoques ou baixou títulos financeiros',
      'Gerar backups automatizados e relatórios gerenciais em segundos',
    ],
    highlights: [
      'Controle granular de permissões por módulo e usuário',
      'Módulos integrados: Compras, Estoque, Vendas, Financeiro e Fiscal',
      'Trilha de auditoria imutável cobrindo inclusive ações administrativas',
      'Backups automatizados e painel executivo em tempo real',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS'],
    whatsappMessage:
      'Olá Saulo! Vi o ERP Empresarial no site da SCM Tech e quero saber como implantar na minha empresa.',
  },
  {
    id: 'gestao-igrejas',
    title: 'Plataforma SaaS Gestão de Igrejas',
    subtitle: 'Gestão eclesiástica multi-congregações com cuidado pastoral e financeiro',
    category: 'Gestão de Igrejas',
    badge: 'Destaque SaaS Multi-Tenant',
    accent: 'emerald',
    previewType: 'church',
    image: '/assets/real_screens/gestao_igrejas.png',
    description:
      'Sistema web e aplicativo instalável (PWA) projetado para gerenciar uma ou dezenas de congregações com isolamento total de dados, painel pastoral inteligente, cuidado com famílias, visitantes, pequenos grupos e tesouraria protegida.',
    modules: [
      {
        name: 'Painel Pastoral & Aniversariantes',
        detail: 'Resumo diário matinal para o pastor e disparo rápido de bênçãos de aniversário e casamento no WhatsApp.',
      },
      {
        name: 'Membros, Famílias & Kids',
        detail: 'Ficha completa de membros, árvore genealógica familiar, histórico de dons e controle infantil com responsáveis.',
      },
      {
        name: 'Pequenos Grupos, EBD & Visitantes',
        detail: 'Funil de acolhimento de visitantes (1º ao 3º contato), chamada da EBD, escalas de ministérios e reuniões de PGs.',
      },
      {
        name: 'Tesouraria Protegida por PIN',
        detail: 'Acesso financeiro restrito por PIN individual, entradas/saídas categorizadas e exportação para Excel/CSV.',
      },
    ],
    capabilities: [
      'Operar várias congregações isoladas sob um único painel Master Admin (SaaS)',
      'Enviar relatório matinal do dia para o pastor com 1 clique no WhatsApp',
      'Controlar escalas de ministérios, gabinete pastoral e mural de oração',
      'Instalar no celular (Android/iOS) ou computador com acesso por perfil',
    ],
    highlights: [
      'Arquitetura Multi-Tenant (várias igrejas isoladas na mesma plataforma)',
      'Dashboard de aniversariantes e casamentos com mensagem pronta no WhatsApp',
      'Relatório matinal automático para o pastor + Gabinete Pastoral',
      'Módulo Financeiro protegido por PIN, EBD, Visitantes e Árvore Familiar',
    ],
    techStack: ['React', 'TypeScript', 'Firebase Firestore', 'Tailwind CSS', 'PWA'],
    whatsappMessage:
      'Olá Saulo! Tenho interesse na Plataforma SaaS de Gestão de Igrejas da SCM Tech.',
  },
  {
    id: 'crm-telecom',
    title: 'CRM Provedores & Telecom',
    subtitle: 'Funil comercial, viabilidade de fibra, O.S. e retenção de assinantes',
    category: 'CRM Telecom',
    badge: 'Novo Produto • Em Lançamento',
    accent: 'sky',
    previewType: 'crm',
    image: '/assets/real_screens/crm_telecom_real.png',
    description:
      'CRM especializado para provedores de internet (ISPs) e empresas de telecomunicação. Unifica atendimento WhatsApp, funil Kanban de vendas, checagem de cobertura/CTO, ordens de instalação e alertas preventivos de cancelamento.',
    modules: [
      {
        name: 'Funil Kanban Comercial',
        detail: 'Acompanhe cada lead desde o primeiro contato no WhatsApp até a assinatura e ativação do plano.',
      },
      {
        name: 'Viabilidade Técnica & CTOs',
        detail: 'Validação rápida de disponibilidade de portas/caixas ópticas por endereço antes de fechar a venda.',
      },
      {
        name: 'Gestão de O.S. & Pós-Serviço',
        detail: 'Controle de SLA de instalação, equipe em campo e contato automático pós-instalação para medir satisfação.',
      },
      {
        name: 'Retenção, Churn & MRR',
        detail: 'Indicadores de receita recorrente (MRR), ticket médio (ARPU) e alertas proativos de clientes com risco de saída.',
      },
    ],
    capabilities: [
      'Reduzir o tempo entre o pedido do cliente e a instalação da fibra',
      'Centralizar vendedores, supervisores e técnicos de campo no mesmo fluxo',
      'Automatizar avisos de agendamento e pós-serviço via WhatsApp',
      'Acompanhar metas diárias, conversão por canal e saúde da base ativa',
    ],
    highlights: [
      'Pipeline Kanban visual: Lead → Viabilidade → Contrato → Instalação → Ativo',
      'Acompanhamento de SLA de instalação e Ordens de Serviço em campo',
      'Indicadores de MRR, Ticket Médio (ARPU) e prevenção de Churn',
      'Atendimento integrado com disparos e notificações automáticas',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'WhatsApp API'],
    whatsappMessage:
      'Olá Saulo! Quero conhecer o Sistema CRM para Provedores e Telecom da SCM Tech.',
  },
  {
    id: 'bi-kpis',
    title: 'Painel Executivo BI & KPIs',
    subtitle: 'Dashboards estratégicos de produtividade, SLA, receita e metas',
    category: 'Dashboards & BI',
    badge: 'Inteligência de Dados',
    accent: 'violet',
    previewType: 'bi',
    image: '/assets/real_screens/bi_kpis.png',
    description:
      'Transformamos planilhas dispersas, bancos SQL e sistemas operacionais em painéis gerenciais claros. Tome decisões rápidas acompanhando faturamento, metas por equipe, SLA de atendimento e gargalos em tempo real.',
    modules: [
      {
        name: 'Indicadores Financeiros & Receita',
        detail: 'Acompanhamento de faturamento bruto/líquido, margem operacional, inadimplência e comparativo mensal.',
      },
      {
        name: 'Painel Operacional & SLA',
        detail: 'Medição de ordens no prazo, backlog vencido, tempo médio de atendimento e produtividade por técnico.',
      },
      {
        name: 'Funil Comercial & Metas',
        detail: 'Conversão por vendedor/canal, ticket médio, previsão de fechamento e atingimento de metas.',
      },
      {
        name: 'ETL & Consolidação Automática',
        detail: 'Conexão automática com planilhas Excel, ERPs e APIs para eliminar retrabalho de relatórios manuais.',
      },
    ],
    capabilities: [
      'Substituir dezenas de planilhas soltas por um único painel interativo',
      'Filtrar resultados por período, filial, supervisor, equipe ou produto',
      'Receber alertas visuais imediatos quando um indicador sair da meta',
      'Exportar relatórios executivos prontos para reunião em PDF e Excel',
    ],
    highlights: [
      'KPIs em tempo real: Faturamento, Margem, SLA, Conversão e Inadimplência',
      'Filtros dinâmicos por período, filial, supervisor e canal de venda',
      'Alertas visuais para metas abaixo do esperado e gargalos operacionais',
      'Exportação instantânea de relatórios executivos em PDF e Excel',
    ],
    techStack: ['React', 'Power BI', 'SQL', 'Chart Engine', 'ETL Automático'],
    whatsappMessage:
      'Olá Saulo! Preciso de Dashboards e Análise de KPIs para acompanhar os indicadores da minha empresa.',
  },
  {
    id: 'gestao-campo-ata',
    title: 'Gestão de Campo, Checklists & Backlogs',
    subtitle: 'Visitas técnicas offline, atas em PDF e cruzamento de ordens de serviço',
    category: 'ERPs & Gestão',
    badge: 'Operação Offline-First',
    accent: 'amber',
    previewType: 'field',
    image: '/assets/real_screens/gestao_campo_checklist.png',
    description:
      'Ecossistema completo para supervisores externos, equipes de campo e controle de backlogs. Funciona mesmo sem internet, organiza visitas técnicas por setores, gera ATA profissional em PDF e cruza planilhas diárias de O.S.',
    modules: [
      {
        name: 'Checklist Guiado em 5 Etapas',
        detail: 'Inspeção estruturada de Torre de Controle, Estoque, Equipe e Pendências com registro fotográfico.',
      },
      {
        name: 'Motor Offline-First (IndexedDB)',
        detail: 'Salva tudo localmente no celular/tablet mesmo em áreas sem sinal e sincroniza depois com segurança.',
      },
      {
        name: 'Gerador Automático de ATA em PDF',
        detail: 'Ao finalizar a visita, gera um documento PDF padronizado com assinaturas, fotos e plano de ação.',
      },
      {
        name: 'Cruzamento Diário de Backlog',
        detail: 'Processa planilhas operacionais e cruza automaticamente com a base de parceiros/supervisores.',
      },
    ],
    capabilities: [
      'Realizar auditorias e visitas técnicas em campo 100% sem internet',
      'Padronizar entregas de supervisores com atas profissionais em 1 clique',
      'Cruzar milhares de linhas de backlog de serviços em poucos segundos',
      'Monitorar ordens vencidas ou prioritárias em painel web responsivo',
    ],
    highlights: [
      'Checklist guiado em 5 etapas com funcionamento 100% Offline (IndexedDB)',
      'Geração automática de ATA de visita profissional em PDF com 1 clique',
      'Processamento e cruzamento inteligente de planilhas de Backlog diário',
      'Painel ágil de Ordens de Serviço com alertas de vencimento e prioridade',
    ],
    techStack: ['React 19', 'Next.js', 'Dexie / IndexedDB', 'jsPDF', 'SheetJS'],
    whatsappMessage:
      'Olá Saulo! Gostei do sistema de Gestão de Campo, Checklists e Backlogs. Quero conversar sobre ele.',
  },
  {
    id: 'bots-automacao',
    title: 'Bots WhatsApp & Extensões Web',
    subtitle: 'Disparo inteligente anti-bloqueio, robôs de consulta e monitoramento',
    category: 'Automações & Bots',
    badge: 'Automação Inteligente',
    accent: 'emerald',
    previewType: 'bot',
    image: '/assets/real_screens/bots_whatsapp.png',
    description:
      'Soluções de automação desenhadas para eliminar trabalho repetitivo: bots de WhatsApp integrados a planilhas Excel com proteção anti-bloqueio e extensões de navegador que consultam portais e enviam alertas em tempo real.',
    modules: [
      {
        name: 'Importador de Planilhas Excel/CSV',
        detail: 'Lê automaticamente listas de clientes, O.S. e múltiplos telefones, validando DDI e números ativos.',
      },
      {
        name: 'Fila Inteligente Anti-Bloqueio',
        detail: 'Disparo humanizado com intervalos dinâmicos (8s a 11s), personalização de variáveis e pausa segura.',
      },
      {
        name: 'Extensões Chrome & Robôs Web',
        detail: 'Painéis flutuantes injetados em portais web para automatizar consultas repetitivas e monitorar filas.',
      },
      {
        name: 'Alertas Push & Relatórios CSV',
        detail: 'Notificações instantâneas no celular/desktop e exportação detalhada do status de cada envio.',
      },
    ],
    capabilities: [
      'Avisar centenas de clientes no WhatsApp automaticamente a partir de uma planilha',
      'Automatizar consultas e preenchimentos em sistemas web sem API pública',
      'Monitorar ordens de serviço em segundo plano com alertas em tempo real',
      'Auditar exatamente quais mensagens foram entregues ou falharam via CSV',
    ],
    highlights: [
      'Leitura automática de planilhas .XLSX/.CSV com validação de múltiplos telefones',
      'Motor de envio com intervalos dinâmicos Anti-Ban e personalização por cliente',
      'Extensões Chrome e UserScripts com painel flutuante e alerta sonoro/push',
      'Relatório detalhado em CSV com status de entrega de cada mensagem',
    ],
    techStack: ['Node.js', 'Baileys WS', 'Chrome Extensions MV3', 'Express', 'SheetJS'],
    whatsappMessage:
      'Olá Saulo! Tenho interesse em Bots de WhatsApp e Automações para otimizar minha operação.',
  },
  {
    id: 'hub-multi-negocios',
    title: 'Hub SaaS Multi-Negócios',
    subtitle: 'Plataforma White-Label multi-nichos para agências e social media',
    category: 'ERPs & Gestão',
    badge: 'SaaS Multi-Nichos',
    accent: 'rose',
    previewType: 'hub',
    image: '/assets/real_screens/hub_social_dashboard.png',
    description:
      'Plataforma SaaS desenvolvida para agências de marketing e social media entregarem um portal exclusivo para cada cliente, com marca personalizada, calendário de 30 dias, artes prontas e roteiros em teleprompter.',
    modules: [
      {
        name: 'Portal White-Label por Cliente',
        detail: 'Cada empresa faz login e vê o sistema adaptado com sua própria logomarca e paleta de cores.',
      },
      {
        name: 'Catálogo Multi-Nichos',
        detail: 'Estruturas prontas para Odontologia, Estética, Imobiliária, Gastronomia, Advocacia e Telecom.',
      },
      {
        name: 'Calendário Editorial de 30 Dias',
        detail: 'Organização visual de posts diários, legendas estratégicas e aprovação rápida pelo cliente.',
      },
      {
        name: 'Roteiros & Teleprompter Integrado',
        detail: 'Ferramenta integrada para o cliente gravar Reels e vídeos curtos lendo o roteiro na tela.',
      },
    ],
    capabilities: [
      'Escalar uma agência atendendo dezenas de nichos em uma única plataforma',
      'Entregar uma experiência premium exclusiva para cada cliente final',
      'Centralizar aprovação de conteúdo, legendas e roteiros de vídeo',
      'Adicionar novos segmentos de mercado com configuração modular rápida',
    ],
    highlights: [
      'Acesso individualizado por cliente com logo e paleta da marca aplicados',
      'Calendário de 30 dias com artes, legendas e roteiros em teleprompter',
      'Estrutura modular escalável para novos nichos de mercado',
      'Portal comercial integrado para demonstração e venda para novos clientes',
    ],
    techStack: ['React', 'Vite', 'Firebase', 'Tailwind CSS', 'White-Label'],
    whatsappMessage:
      'Olá Saulo! Vi o Hub SaaS Multi-Negócios da SCM Tech e gostaria de desenvolver uma plataforma parecida.',
  },
  {
    id: 'app-financeiro-pwa',
    title: 'App Financeiro Inteligente (PWA)',
    subtitle: 'Design estilo iOS, sobra livre projetada e cobrança WhatsApp com Pix',
    category: 'Apps & PDV',
    badge: 'App Instalável iOS & Android',
    accent: 'cyan',
    previewType: 'finance',
    image: '/assets/real_screens/app_financeiro_mobile.png',
    description:
      'Aplicativo financeiro mobile-first inspirado no visual iOS, focado em clareza imediata: calcula a sobra livre do mês, soma parcelas a receber de terceiros e gera mensagens prontas de cobrança no WhatsApp já com a chave Pix.',
    modules: [
      {
        name: 'Dashboard Sobra Livre em Tempo Real',
        detail: 'Cruza renda, contas fixas, gastos variáveis e recebíveis do mês para mostrar o saldo livre real.',
      },
      {
        name: 'Gestão de Devedores & Parcelas',
        detail: 'Controla compras parceladas de terceiros e preenche automaticamente os valores a vencer no mês.',
      },
      {
        name: 'Cobrança 1-Clique no WhatsApp + Pix',
        detail: 'Compila as parcelas do mês do devedor, insere a chave Pix e abre o WhatsApp pronto para enviar.',
      },
      {
        name: 'Lançamentos Ágeis & Exportação Excel',
        detail: 'Registro rápido com feedback sonoro-visual imediato e download de planilhas formatadas (.xlsx).',
      },
    ],
    capabilities: [
      'Instalar direto na tela inicial do iPhone ou Android sem precisar de App Store',
      'Navegar mês a mês para projetar receitas e despesas futuras',
      'Cobrar clientes ou terceiros em segundos sem digitar contas manualmente',
      'Exportar fechamentos financeiros completos em Excel para controle ou contabilidade',
    ],
    highlights: [
      'Cálculo em tempo real de Sobra Livre e recebíveis parcelados por mês',
      'Botão de cobrança inteligente compilando parcelas e Pix direto no WhatsApp',
      'Feedback instantâneo de lançamentos e exportação formatada em Excel (.xlsx)',
      'Instalável na tela inicial do iPhone e Android como aplicativo nativo (PWA)',
    ],
    techStack: ['Node.js', 'SQLite', 'Chart.js', 'PWA', 'SheetJS'],
    whatsappMessage:
      'Olá Saulo! Achei incrível o App Financeiro PWA e gostaria de um aplicativo personalizado.',
  },
  {
    id: 'pdv-caixa-offline',
    title: 'PDV Rápido & Caixa Offline',
    subtitle: 'Frente de caixa touch com calculadora de troco e relatório 3 abas',
    category: 'Apps & PDV',
    badge: 'Ponto de Venda Ágil',
    accent: 'amber',
    previewType: 'pdv',
    image: '/assets/real_screens/pdv_caixa.png',
    description:
      'Sistema de Ponto de Venda ultrarrápido que funciona 100% offline em celulares, tablets e computadores. Perfeito para comércios, eventos e feiras que precisam de agilidade no atendimento e fechamento de caixa sem erros.',
    modules: [
      {
        name: 'Frente de Caixa 1-Toque & Item Avulso',
        detail: 'Adicione itens do cardápio com 1 toque, lance valores avulsos ou use a calculadora integrada.',
      },
      {
        name: 'Pagamentos & Calculadora de Troco',
        detail: 'Separação por PIX, Crédito, Débito e Dinheiro com atalhos de cédulas e cálculo exato do troco.',
      },
      {
        name: 'Operação 100% Offline (PWA)',
        detail: 'Mesmo se a internet cair durante um evento ou movimento intenso, nenhuma venda é perdida.',
      },
      {
        name: 'Relatório Excel em 3 Abas',
        detail: 'Exporta automaticamente Vendas Detalhadas, Resumo Financeiro por forma de pagamento e Ranking de Produtos.',
      },
    ],
    capabilities: [
      'Transformar qualquer celular, tablet ou notebook em um caixa rápido (PDV)',
      'Evitar erros de troco e facilitar a conferência com maquininhas de cartão',
      'Editar produtos, preços e categorias direto no gerenciador do sistema',
      'Fechar o caixa do dia com 1 clique gerando planilha gerencial completa',
    ],
    highlights: [
      'Venda em 1 toque com item avulso, calculadora integrada e controle de troco',
      'Separação automática por PIX, Crédito, Débito e Dinheiro com botões de cédulas',
      'Exportação profissional para Excel com 3 abas (Vendas, Resumo e Ranking)',
      'Gerenciador de cardápio/catálogo e instalação imediata via PWA',
    ],
    techStack: ['JavaScript ES6+', 'PWA Offline', 'LocalStorage', 'SheetJS', 'CSS3'],
    whatsappMessage:
      'Olá Saulo! Quero conhecer melhor o Sistema de PDV Rápido Offline da SCM Tech.',
  },
  {
    id: 'jogos-infantis',
    title: 'Aventuras Kids — Jogos Educativos',
    subtitle: '5 jogos interativos infantis com áudio próprio e pixel art educativo',
    category: 'Jogos Infantis',
    badge: 'Games & Educação Lúdica',
    accent: 'violet',
    previewType: 'kids',
    image: '/assets/real_screens/jogos_kids_portal.png',
    description:
      'Plataforma de jogos infantis educativos voltada para crianças pequenas, com foco em toque na tela, reforço 100% positivo, animações fluidas e motor sonoro próprio construído em Web Audio API sem arquivos pesados.',
    modules: [
      {
        name: 'A Arca de Noé & A Ovelhinha Perdida',
        detail: 'Jogos de associação de animais e percepção visual com sons carinhosos e zero punição por erro.',
      },
      {
        name: 'Fruto do Espírito (5 Fases)',
        detail: 'Desafio progressivo de agilidade e atenção com pontuação dobrada e evolução gradual de ritmo.',
      },
      {
        name: 'Jogo da Memória 3D (5 Níveis)',
        detail: 'Cartas temáticas que evoluem de 2 até 8 pares, com contador de movimentos e estrelas de mérito.',
      },
      {
        name: 'Pintura Pixel Art & Motor Web Audio',
        detail: 'Colorir por número com pincel mágico + efeitos musicais sintetizados offline em tempo real.',
      },
    ],
    capabilities: [
      'Criar jogos infantis educativos, corporativos ou institucionais sob medida',
      'Rodar em tela cheia no celular, tablet ou computador como App (PWA)',
      'Funcionar 100% offline com áudios e animações leves de carregamento imediato',
      'Personalizar personagens, histórias, lições pedagógicas e identidade visual',
    ],
    highlights: [
      '5 jogos completos: Arca, Ovelhinha, Fruto do Espírito, Memória e Pintura Pixel Art',
      'Motor de áudio sintetizado nativo (efeitos sonoros e melodia infantil offline)',
      'Fases progressivas adaptadas para coordenação motora e aprendizado visual',
      'Instalável como aplicativo infantil em tablets, celulares e computadores',
    ],
    techStack: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'PWA', 'Game Design'],
    whatsappMessage:
      'Olá Saulo! Vi o projeto de Jogos Infantis da SCM Tech e gostaria de desenvolver um jogo/app educativo.',
  },
];
