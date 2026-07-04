import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { PROCEDURES } from "@/lib/constants";

export function ProceduresPreview() {
  const featured = PROCEDURES.slice(0, 6);

  return (
    <section className="section-pad bg-ivory-deep">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Procedimentos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-espresso sm:text-5xl">
                Cada procedimento, pensado sob medida
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              href="/procedimentos"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-nude px-6 py-3 text-sm text-espresso transition-colors hover:bg-white"
            >
              Ver todos os procedimentos
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((proc, i) => (
            <Reveal key={proc.slug} delay={i * 0.06}>
              <Link
                href={`/procedimentos#${proc.slug}`}
                data-cursor-hover
                className="group block h-full rounded-lg border border-nude bg-white p-7 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="font-display text-xl text-espresso">{proc.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-espresso-soft">
                  {proc.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-champagne opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
