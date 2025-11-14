type CourseData = {
  title: string;
  description: string;
  instructor?: string;
  duration?: string;
  prerequisites?: string[];
  schedule: { day: string; time: string }[];
  subjects: { name: string; workload: string }[];
};

export const courses: Record<string, CourseData> = {
  'ciencia-dados': {
    title: 'Ciência de Dados',
    description: 'O Curso Superior de Tecnologia em Ciência de Dados tem como finalidade oferecer aos seus estudantes formação de nível superior de qualidade para proporcionar conhecimentos tecnológicos e formação integral nessa área emergente do saber, aprendizagem de máquina, machine learning e estatística aplicadas às análises preditivas, descritivas e prescritivas de dados. O curso visa também desenvolver habilidades de resolver problemas complexos, por meio da coleta de dados e de análises estatísticas, além de criar e aplicar algoritmos de aprendizagem de máquina para facilitar a tomada de decisões e solucionar problemas de negócios de forma a aumentar a competitividade das organizações, tornando-os capazes de intervir no desenvolvimento econômico e social, observadas as práticas da ética e cidadania.',
    duration: '3 anos',
    prerequisites: ['Matemática Básica', 'Programação Básica'],
    schedule: [
      { day: 'Segunda-feira', time: '19:00 - 22:40' },
      { day: 'Terça-feira', time: '19:00 - 22:40' },
      { day: 'Quarta-feira', time: '19:00 - 22:40' },
      { day: 'Quinta-feira', time: '19:00 - 22:40' },
      { day: 'Sexta-feira', time: '19:00 - 22:40' },
      { day: 'Sábado', time: '13:20 - 17:00' },
    ],
    subjects: [
      { name: 'Princípios de Ciência de Dados', workload: '60h' },
      { name: 'Algoritmos e Introdução à Computação', workload: '60h' },
      { name: 'Economia da Informação, inovação e Negócios Disruptivos', workload: '60h' },
      { name: 'Gestão Ágil de Projetos', workload: '60h' },
      { name: 'Matemática Básica', workload: '60h' },
      { name: 'Metodologia da Pesquisa Científico-Tecnológica', workload: '60h' },
      { name: 'Inglês I', workload: '60h' },
    ],
  },
  'comercio-exterior': {
    title: 'Comércio Exterior',
    description: 'O tecnólogo em Comércio Exterior planeja as atividades internacionais de uma empresa: identifica novos mercados, define estratégias de atuação, gerencia as operações de importação e exportação, realiza negociações, efetua e controla compras e vendas internacionais de produtos e serviços de uma empresa. É responsável ainda pela documentação e contratos dessas atividades, além das tratativas com fornecedores e compradores estrangeiros, prestadores de serviço, alfândegas, aeroportos e portos. Também analisa o mercado de câmbio e opções de transporte (rodoviário, aeroviário, ferroviário, aquaviário) para redução de custos. Está apto para ocupar um cargo de gestão, pois tem uma visão ampla de toda a cadeia do comércio exterior. O registro das operações de comércio exterior de serviço tem sido cada vez mais requisitado. Hospedagens de turistas estrangeiros e contratação de empresas de fora do Brasil para montagem de equipamentos importados, por exemplo, movimentam os fluxos de entrada e saída de divisas do País. O desenvolvimento e o registro das atividades de exportação e importação de serviços no Brasil abrem um novo campo de trabalho para o tecnólogo em Comércio Exterior.',
    schedule: [
      { day: 'Segunda-feira', time: '19:00 - 22:40' },
      { day: 'Terça-feira', time: '19:00 - 22:40' },
      { day: 'Quarta-feira', time: '19:00 - 22:40' },
      { day: 'Quinta-feira', time: '19:00 - 22:40' },
      { day: 'Sexta-feira', time: '19:00 - 22:40' },
      { day: 'Sábado', time: '08:00 - 12:00' },
    ],
    subjects: [
      { name: 'Administração Geral', workload: '80h' },
      { name: 'Comércio Exterior ', workload: '80h' },
      { name: 'Comunicação e Expressão I ', workload: '60h' },
      { name: 'Fundamentos do Direito Público e Privado', workload: '60h' },
      { name: 'Língua Inglesa I', workload: '60h' },
      { name: 'Matemática Aplicada ao Comércio Exterior', workload: '60h' },
      { name: 'Métodos para a Produção do Conhecimento', workload: '60h' },
    ],
  },
  'dsm': {
    title: 'Desenvolvimento de Software Multiplataforma',
    description: 'O Curso Superior de Tecnologia Desenvolvimento de Software Multiplataforma do eixo tecnológico Informação e Comunicação oferece disciplinas como Matemática para Computação, Álgebra Linear, Redação Técnica e Ética Profissional e Patente, Metodologias Ágeis para Gestão de Projetos de Software, Inglês, além de conhecimentos mais específicos da área como: Algoritmo e Lógica de Programação, Programação para Desktop, Programação para Dispositivos Móveis, Programação para Web, Experiência do Usuário, Computação em Nuvem, Inteligência Artificial, Segurança da Informação, Internet das Coisas, Banco de Dados e Engenharia de Software. O conteúdo do curso prepara os alunos para desenvolver software para diversas plataformas, tais como Web, Desktop, Móvel, em Nuvem Internet das Coisas, empregando conceitos de Segurança da Informação e Inteligência Artificial, além de integração e entrega contínua de software, visando desenvolver soluções de software que atendam os critérios de qualidade exigidos pelo mercado.',
    schedule: [
      { day: 'Segunda-feira', time: '19:00 - 22:40' },
      { day: 'Terça-feira', time: '19:00 - 22:40' },
      { day: 'Quarta-feira', time: '19:00 - 22:40' },
      { day: 'Quinta-feira', time: '19:00 - 22:40' },
      { day: 'Sexta-feira', time: '19:00 - 22:40' },
      { day: 'Sábado', time: '13:20 - 17:00' },
    ],
    subjects: [
      { name: 'Algoritmo e Lógica de Programação', workload: '80h' },
      { name: 'Desenvolvimento Web I', workload: '80h' },
      { name: 'Design Digital', workload: '60h' },
      { name: 'Engenharia de Software I', workload: '60h' },
      { name: 'Modelagem de Banco de Dados', workload: '60h' },
      { name: 'Sistemas Opereacionais e Redes de Comp.', workload: '60h' },
    ],
  },
  'design-produto': {
    title: 'Design de Produto',
    description: 'O tecnólogo em design de produto pesquisa e desenvolve produtos industriais, integrando equipes multidisciplinares de desenvolvimento de produtos. Desenha e modela produtos aplicando técnicas manuais e digitais de desenvolvimento de produto. Elabora modelos e protótipos para testes industriais e experiência do consumidor. Domina plenamente os conceitos estéticos, históricos, culturais, industriais e funcionais do design de produto.',
    schedule: [
      { day: 'Segunda-feira', time: '08:00 - 13:00' },
      { day: 'Terça-feira', time: '08:00 - 13:00' },
      { day: 'Quarta-feira', time: '08:00 - 13:00' },
      { day: 'Quinta-feira', time: '08:00 - 13:00' },
      { day: 'Sexta-feira', time: '08:00 - 13:00' },
    ],
    subjects: [
      { name: 'História do Design I (Design Universal)', workload: '60h' },
      { name: 'Design de Produto', workload: '60h' },
      { name: 'Desenho Artístico Presencial ', workload: '60h' },
      { name: 'Tecnologia da Informação e Interfaces ', workload: '30h' },
      { name: 'Ciência e Tecnologia dos materiais', workload: '30h' },
      { name: 'Matemática Aplicada à Projetos de Design ', workload: '30h' },
      { name: 'Técnicas de Apresentação Comercial e Portfólio ', workload: '30h' },
      { name: 'Inglês I', workload: '30h' },
    ],
  },
  'gestao-producao': {
    title: 'O Tecnólogo em Gestão da Produção Industrial trabalha para melhorar a qualidade e a produtividade de uma indústria, atuando no planejamento das atividades, no controle da produção, na criação e no teste de produtos. Pesquisa e identifica oportunidades de negócios e novas tecnologias de produção assim como coordena equipes para aperfeiçoar processos e a logística. Elabora os planos de manutenção de máquinas. Define a localização dos setores e dos equipamentos de uma empresa de acordo com as normas técnicas e de segurança. Acompanha a qualidade dos processos e dos produtos, além de definir como será feito o descarte de resíduos industriais, segundo a política ambiental. Está mais focado na gestão, enquanto o tecnólogo em Produção Industrial ocupa-se da parte mais técnica, dos processos produtivos, das máquinas e ferramentas. Os cursos são oferecidos em unidades localizadas em importantes polos industriais de São Paulo.',
    description: 'Descrição do curso...',
    schedule: [
      { day: 'Segunda-feira', time: '19:00 - 22:40' },
      { day: 'Terça-feira', time: '19:00 - 22:40' },
      { day: 'Quarta-feira', time: '19:00 - 22:40' },
      { day: 'Quinta-feira', time: '19:00 - 22:40' },
      { day: 'Sexta-feira', time: '19:00 - 22:40' },
      { day: 'Sábado', time: '08:00 - 12:00' },
    ],
    subjects: [
      { name: 'Projeto Integrador em Gestão da Produção Industrial I', workload: '80h' },
      { name: 'Tecnologia da Produção Industrial', workload: '60h' },
      { name: 'Metod. Pesq. Científico-Tecnológica', workload: '60h' },
      { name: 'Informática', workload: '60h' },
      { name: 'Cálculo', workload: '60h' },
      { name: 'Administração Geral', workload: '60h' },
      { name: 'Fundamentos da Comunicação Empresarial', workload: '60h' },
      { name: 'Inglês I', workload: '60h' },
    ],
  },
  'gestao-empresarial': {
    title: 'Gestão Empresarial',
    description: 'O CST em Gestão Empresarial tem como objetivo propiciar a formação de profissionais que possam contribuir para a inovação e melhoria de processos nas organizações, antecipando aos problemas, resolvendo-os e assim poder minimizar custos e maximizar benefícios da atividade econômica empresarial, dentro da perspectiva ética e sustentável e que atuem de forma eficiente e eficaz nas diversas áreas de administração e negócios. A organização curricular de todas as atividades do curso visa desenvolver conhecimentos, habilidades e atitudes para: Analisar, diagnosticar, planejar, implementar e controlar a partir da interação dos aspectos qualitativos e quantitativo.',
    schedule: [
      { day: 'Segunda-feira', time: '19:00 - 22:40' },
      { day: 'Terça-feira', time: '19:00 - 22:40' },
      { day: 'Quarta-feira', time: '19:00 - 22:40' },
      { day: 'Quinta-feira', time: '19:00 - 22:40' },
      { day: 'Sexta-feira', time: '19:00 - 22:40' },
      { day: 'Sábado', time: '08:00 - 12:00' },
    ],
    subjects: [
      { name: 'Projeto Integrador I', workload: '80h' },
      { name: 'Administração Geral', workload: '60h' },
      { name: 'Sociologia das Organizações', workload: '60h' },
      { name: 'Informática Aplicada', workload: '80h' },
      { name: 'Sociedade e Tecnologia e Inovação', workload: '60h' },
      { name: 'Matemática', workload: '60h' },
      { name: 'Comunicação e Expressão', workload: '60h' },
      { name: 'Inglês I', workload: '60h' },
    ],
  },
};
