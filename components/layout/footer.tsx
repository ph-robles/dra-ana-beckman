import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { LEGAL_LINKS, LOCATIONS, NAV_LINKS, SITE } from "@/lib/constants";
import { Reveal } from "@/components/shared/reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-nude bg-ivory-deep">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-12">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <p className="font-display text-2xl text-espresso">Ana Beckman</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-espresso-soft">
                Enfermeira esteta especialista em Harmonização Orofacial.
                Técnica apurada, delicadeza e respeito à beleza natural de
                cada paciente.
              </p>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-espresso-soft transition-colors hover:text-champagne"
              >
                <Instagram className="h-4 w-4" />
                {SITE.instagramHandle}
              </a>
            </div>

            <div>
              <p className="eyebrow">Links Rápidos</p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-espresso-soft transition-colors hover:text-champagne"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Atendimento</p>
              <ul className="mt-4 space-y-3">
                {LOCATIONS.map((loc) => (
                  <li key={loc.city} className="flex gap-2 text-sm text-espresso-soft">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    <span>
                      {loc.city} – {loc.state}
                    </span>
                  </li>
                ))}
                <li className="flex gap-2 text-sm text-espresso-soft">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-champagne">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow">Legal</p>
              <ul className="mt-4 space-y-2.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-espresso-soft transition-colors hover:text-champagne"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-2 border-t border-nude pt-6 text-xs text-espresso-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. Todos os direitos reservados.</p>
          <p>CNPJ a confirmar · Enfermeira Esteta — COREN a confirmar</p>
        </div>
      </div>
    </footer>
  );
}
