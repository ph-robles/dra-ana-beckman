export const SITE = {
  name: "Dra. Ana Beatriz Beckman",
  shortName: "Ana Beckman",
  title: "Dra. Ana Beatriz Beckman | Harmonização Orofacial",
  description:
    "Enfermeira esteta especialista em Harmonização Orofacial. Atendimento em Piracicaba–SP e Ilha do Governador–RJ, com técnica apurada e respeito à beleza natural de cada paciente.",
  // TODO(Raphael): trocar pela URL de produção antes do deploy final
  url: "https://dra-ana-beckman.vercel.app",
  locale: "pt_BR",
  instagram: "https://instagram.com/dr.anabeckman",
  instagramHandle: "@dr.anabeckman",
  // TODO(Raphael): confirmar número oficial de WhatsApp da clínica
  whatsapp: "https://wa.me/5500000000000",
  whatsappDisplay: "(00) 00000-0000",
  email: "contato@draanabeckman.com.br",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/procedimentos", label: "Procedimentos" },
  { href: "/antes-depois", label: "Antes e Depois" },
  { href: "/depoimentos", label: "Depoimentos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
] as const;

export const LEGAL_LINKS = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/politica-de-cookies", label: "Política de Cookies" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
  { href: "/lgpd", label: "LGPD" },
] as const;

export const LOCATIONS = [
  {
    city: "Piracicaba",
    state: "SP",
    // TODO(Raphael): endereço completo do consultório
    address: "Endereço a confirmar — Piracicaba, SP",
  },
  {
    city: "Ilha do Governador",
    state: "RJ",
    address: "Endereço a confirmar — Ilha do Governador, RJ",
  },
] as const;

export type Procedure = {
  slug: string;
  name: string;
  shortDescription: string;
  benefits: string[];
  indications: string;
  recovery: string;
  duration: string;
};

export const PROCEDURES: Procedure[] = [
  {
    slug: "harmonizacao-facial",
    name: "Harmonização Facial",
    shortDescription:
      "Reequilíbrio dos contornos do rosto com técnicas combinadas, respeitando a proporção natural de cada face.",
    benefits: ["Simetria facial", "Resultado natural", "Planejamento individualizado"],
    indications: "Pacientes que desejam realçar a harmonia do rosto sem alterar sua identidade.",
    recovery: "Retorno às atividades no mesmo dia",
    duration: "Resultado gradual, 12 a 18 meses",
  },
  {
    slug: "botox",
    name: "Botox",
    shortDescription:
      "Toxina botulínica para suavizar linhas de expressão com naturalidade e preservar a mobilidade do rosto.",
    benefits: ["Suaviza rugas dinâmicas", "Efeito preventivo", "Procedimento rápido"],
    indications: "Linhas de expressão em testa, glabela e região dos olhos.",
    recovery: "Sem tempo de recuperação",
    duration: "4 a 6 meses",
  },
  {
    slug: "preenchimento-labial",
    name: "Preenchimento Labial",
    shortDescription:
      "Ácido hialurônico para lábios com volume equilibrado e contorno definido, sem perder a naturalidade.",
    benefits: ["Hidratação", "Contorno definido", "Volume sob medida"],
    indications: "Lábios com pouco volume ou assimetrias leves.",
    recovery: "Pequeno inchaço nas primeiras 48h",
    duration: "8 a 12 meses",
  },
  {
    slug: "skinbooster",
    name: "Skinbooster",
    shortDescription:
      "Bioestimulação profunda para hidratação e viço da pele, melhorando textura e luminosidade.",
    benefits: ["Hidratação profunda", "Melhora a textura", "Efeito viço"],
    indications: "Pele desidratada, com poros dilatados ou textura irregular.",
    recovery: "Retorno imediato às atividades",
    duration: "Sessões seriadas, resultado progressivo",
  },
  {
    slug: "bioestimulador-de-colageno",
    name: "Bioestimulador de Colágeno",
    shortDescription:
      "Estímulo à produção natural de colágeno para firmeza e sustentação da pele ao longo do tempo.",
    benefits: ["Firmeza", "Sustentação facial", "Efeito duradouro"],
    indications: "Sinais de flacidez leve a moderada.",
    recovery: "Pequenos nódulos temporários, sem afastamento",
    duration: "18 a 24 meses",
  },
  {
    slug: "mandibula",
    name: "Mandíbula",
    shortDescription:
      "Definição do ângulo mandibular para um contorno facial mais estruturado e harmônico.",
    benefits: ["Contorno definido", "Equilíbrio facial", "Efeito lifting"],
    indications: "Desejo de mais definição no terço inferior da face.",
    recovery: "Retorno no mesmo dia",
    duration: "12 a 18 meses",
  },
  {
    slug: "queixo",
    name: "Queixo",
    shortDescription:
      "Projeção e alinhamento do queixo para equilibrar as proporções do perfil facial.",
    benefits: ["Equilíbrio de perfil", "Projeção natural", "Simetria"],
    indications: "Queixo retraído ou assimétrico.",
    recovery: "Retorno no mesmo dia",
    duration: "12 a 18 meses",
  },
  {
    slug: "olheiras",
    name: "Olheiras",
    shortDescription:
      "Preenchimento do sulco lacrimal para suavizar olheiras e devolver um olhar descansado.",
    benefits: ["Olhar renovado", "Efeito natural", "Procedimento delicado"],
    indications: "Olheiras estruturais causadas por perda de volume.",
    recovery: "Pequeno inchaço nas primeiras 48h",
    duration: "12 meses",
  },
  {
    slug: "rejuvenescimento-facial",
    name: "Rejuvenescimento Facial",
    shortDescription:
      "Protocolo combinado para atenuar sinais do tempo, preservando a expressividade natural do rosto.",
    benefits: ["Efeito global", "Naturalidade", "Protocolo individualizado"],
    indications: "Sinais de envelhecimento facial em geral.",
    recovery: "Variável conforme o protocolo",
    duration: "Variável conforme o protocolo",
  },
  {
    slug: "tratamentos-para-pele",
    name: "Tratamentos para Pele",
    shortDescription:
      "Protocolos estéticos para saúde, viço e uniformidade da pele do rosto.",
    benefits: ["Uniformidade", "Viço", "Prevenção"],
    indications: "Manutenção da saúde da pele e prevenção do envelhecimento.",
    recovery: "Sem afastamento",
    duration: "Sessões periódicas",
  },
];
