import type { BeforeAfterItem, BlogPost, Testimonial } from "@/types";

// TODO(Raphael): substituir por depoimentos reais (com autorização das pacientes)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Paciente A.",
    rating: 5,
    procedure: "Harmonização Facial",
    quote:
      "Me senti extremamente segura durante todo o processo. O resultado ficou natural, exatamente como conversamos na avaliação.",
  },
  {
    id: "t2",
    name: "Paciente B.",
    rating: 5,
    procedure: "Preenchimento Labial",
    quote:
      "Um cuidado diferente de tudo que já vi. A Dra. Ana explica cada etapa com muita calma e delicadeza.",
  },
  {
    id: "t3",
    name: "Paciente C.",
    rating: 5,
    procedure: "Botox",
    quote:
      "Resultado super natural, ninguém percebeu que eu tinha feito procedimento — só elogiaram que eu estava com uma cara descansada.",
  },
  {
    id: "t4",
    name: "Paciente D.",
    rating: 5,
    procedure: "Skinbooster",
    quote:
      "Atendimento humanizado do início ao fim. Me senti ouvida em cada detalhe do meu tratamento.",
  },
];

// TODO(Raphael): substituir pelas fotos reais de antes/depois (com autorização)
export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    procedure: "Harmonização Facial",
    beforeImage: "/images/before-after/placeholder-before-1.jpg",
    afterImage: "/images/before-after/placeholder-after-1.jpg",
  },
  {
    id: "ba2",
    procedure: "Preenchimento Labial",
    beforeImage: "/images/before-after/placeholder-before-2.jpg",
    afterImage: "/images/before-after/placeholder-after-2.jpg",
  },
  {
    id: "ba3",
    procedure: "Contorno Mandibular",
    beforeImage: "/images/before-after/placeholder-before-3.jpg",
    afterImage: "/images/before-after/placeholder-after-3.jpg",
  },
  {
    id: "ba4",
    procedure: "Olheiras",
    beforeImage: "/images/before-after/placeholder-before-4.jpg",
    afterImage: "/images/before-after/placeholder-after-4.jpg",
  },
];

// TODO(Raphael): substituir por posts reais do blog
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "o-que-e-harmonizacao-orofacial",
    title: "O que é Harmonização Orofacial e para quem é indicada",
    excerpt:
      "Entenda os princípios da HOF, como funciona a avaliação e por que naturalidade é sempre o objetivo principal.",
    coverImage: "/images/blog/placeholder-1.jpg",
    publishedAt: "2026-06-01",
    readingTime: "5 min",
  },
  {
    slug: "mitos-e-verdades-sobre-botox",
    title: "Mitos e verdades sobre Botox",
    excerpt:
      "Separamos as principais dúvidas sobre toxina botulínica dos mitos que ainda circulam por aí.",
    coverImage: "/images/blog/placeholder-2.jpg",
    publishedAt: "2026-05-15",
    readingTime: "4 min",
  },
  {
    slug: "como-funciona-a-primeira-avaliacao",
    title: "Como funciona a primeira avaliação",
    excerpt:
      "Um passo a passo do que esperar no primeiro encontro antes de qualquer procedimento.",
    coverImage: "/images/blog/placeholder-3.jpg",
    publishedAt: "2026-04-22",
    readingTime: "3 min",
  },
];
