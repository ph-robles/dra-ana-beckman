import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre Harmonização Orofacial, procedimentos, recuperação e avaliação com a Dra. Ana Beatriz Beckman.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    question: "O que é Harmonização Orofacial (HOF)?",
    answer:
      "É um conjunto de técnicas estéticas focadas na região do rosto, usadas para equilibrar proporções e realçar a beleza natural, sempre a partir de uma avaliação individual.",
  },
  {
    question: "Os procedimentos doem?",
    answer:
      "A maioria é bem tolerada, com uso de anestésicos tópicos quando indicado. O nível de desconforto varia de pessoa para pessoa e é discutido antes de cada procedimento.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "Depende da técnica utilizada — de alguns meses a mais de um ano. Esses detalhes são conversados individualmente na página de cada procedimento e na avaliação.",
  },
  {
    question: "Existe tempo de recuperação?",
    answer:
      "Muitos procedimentos permitem retorno às atividades no mesmo dia, mas isso varia conforme a técnica e a resposta de cada paciente.",
  },
  {
    question: "O resultado fica natural?",
    answer:
      "Sim — a proposta da Dra. Ana é sempre realçar a harmonia que já existe no rosto, evitando resultados exagerados ou padronizados.",
  },
  {
    question: "Como funciona a avaliação inicial?",
    answer:
      "É uma conversa detalhada sobre histórico, expectativas e características do rosto, para desenhar um plano individualizado antes de qualquer procedimento.",
  },
  {
    question: "Onde os atendimentos acontecem?",
    answer: "Em Piracicaba–SP e na Ilha do Governador–RJ, mediante agendamento prévio.",
  },
];

export default function FaqPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal>
          <span className="eyebrow">FAQ</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-display text-5xl leading-tight text-espresso sm:text-6xl">
            Perguntas frequentes
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
