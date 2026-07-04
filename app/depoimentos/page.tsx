import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { TestimonialsCarousel } from "@/sections/depoimentos/testimonials-carousel";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja o que as pacientes da Dra. Ana Beatriz Beckman dizem sobre a experiência de Harmonização Orofacial.",
  alternates: { canonical: "/depoimentos" },
};

export default function DepoimentosPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <span className="eyebrow">Depoimentos</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-tight text-espresso sm:text-6xl">
            Histórias de quem já viveu a experiência
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-lg text-sm text-espresso-soft">
            Depoimentos ilustrativos — serão substituídos por relatos reais
            das pacientes, com autorização, antes da publicação do site.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={0.2}>
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
