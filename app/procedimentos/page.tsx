import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Sparkle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { PROCEDURES } from "@/lib/constants";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Procedimentos",
  description:
    "Conheça os procedimentos de Harmonização Orofacial da Dra. Ana Beatriz Beckman: indicações, benefícios, tempo de recuperação e duração.",
  alternates: { canonical: "/procedimentos" },
};

export default function ProcedimentosPage() {
  return (
    <>
      <section className="pt-36 section-pad !pb-0">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <span className="eyebrow">Procedimentos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-espresso sm:text-6xl">
              Cada técnica, a serviço da sua harmonia
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-espresso-soft">
              Todos os procedimentos são precedidos por avaliação individual.
              Os tempos de recuperação e duração abaixo são médias gerais e
              podem variar de paciente para paciente.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-8xl gap-6 px-6 sm:grid-cols-2 lg:px-12">
          {PROCEDURES.map((proc, i) => (
            <Reveal key={proc.slug} delay={(i % 4) * 0.06}>
              <article
                id={proc.slug}
                className="scroll-mt-28 h-full rounded-lg border border-nude bg-white p-8 shadow-soft-sm"
              >
                <p className="font-display text-2xl text-espresso">{proc.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-espresso-soft">
                  {proc.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {proc.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 rounded-full bg-blush px-3 py-1 text-xs text-espresso"
                    >
                      <Sparkle className="h-3 w-3 text-champagne" />
                      {b}
                    </span>
                  ))}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-nude pt-5 text-xs text-espresso-soft">
                  <div>
                    <dt className="uppercase tracking-wide text-champagne">Indicações</dt>
                    <dd className="mt-1 leading-relaxed">{proc.indications}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1 uppercase tracking-wide text-champagne">
                      <Clock className="h-3 w-3" /> Recuperação
                    </dt>
                    <dd className="mt-1 leading-relaxed">{proc.recovery}</dd>
                    <dt className="mt-3 uppercase tracking-wide text-champagne">Duração</dt>
                    <dd className="mt-1 leading-relaxed">{proc.duration}</dd>
                  </div>
                </dl>

                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="mt-6 inline-flex items-center gap-2 text-sm text-espresso underline decoration-nude underline-offset-4"
                >
                  Agendar avaliação para {proc.name.toLowerCase()}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
