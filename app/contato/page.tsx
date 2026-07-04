import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/sections/contato/contact-form";
import { LOCATIONS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende sua avaliação com a Dra. Ana Beatriz Beckman em Piracicaba–SP ou Ilha do Governador–RJ.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <Reveal>
          <span className="eyebrow">Contato</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-xl font-display text-5xl leading-tight text-espresso sm:text-6xl">
            Vamos conversar sobre a sua harmonia
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <Reveal delay={0.12}>
            <div className="rounded-xl border border-nude bg-white p-8 shadow-soft-sm sm:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="space-y-8">
              <div>
                <p className="eyebrow">Atendimento</p>
                <ul className="mt-4 space-y-4">
                  {LOCATIONS.map((loc) => (
                    <li key={loc.city} className="flex gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-champagne" />
                      <div>
                        <p className="text-espresso">{loc.city} – {loc.state}</p>
                        <p className="text-sm text-espresso-soft">{loc.address}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 border-t border-nude pt-6">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-3 text-sm text-espresso-soft transition-colors hover:text-champagne"
                >
                  <MessageCircle className="h-5 w-5 text-champagne" />
                  Falar no WhatsApp
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-espresso-soft transition-colors hover:text-champagne"
                >
                  <Mail className="h-5 w-5 text-champagne" />
                  {SITE.email}
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-espresso-soft transition-colors hover:text-champagne"
                >
                  <Instagram className="h-5 w-5 text-champagne" />
                  {SITE.instagramHandle}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
