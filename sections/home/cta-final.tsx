import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal>
          <span className="eyebrow">Vamos conversar?</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-4xl leading-tight text-espresso sm:text-5xl lg:text-6xl">
            O primeiro passo para sua harmonia começa com uma conversa.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-espresso-soft">
            Agende sua avaliação e descubra, com calma e segurança, o que
            faz sentido para o seu rosto.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-4 text-sm text-ivory transition-transform hover:scale-[1.03]"
          >
            Agendar Avaliação
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
