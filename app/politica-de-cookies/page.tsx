import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Cookies",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Reveal>
          <h1 className="font-display text-4xl text-espresso sm:text-5xl">
            Política de Cookies
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 rounded-md border border-dashed border-nude bg-ivory-deep p-4 text-xs text-espresso-soft">
            AVISO (Raphael): texto-modelo inicial — revisar com advogado(a)
            antes de publicar, especialmente a lista de cookies e o banner
            de consentimento (a implementar).
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-espresso-soft">
            <div>
              <h2 className="font-display text-xl text-espresso">O que são cookies</h2>
              <p className="mt-2">
                Cookies são pequenos arquivos armazenados no seu navegador
                que ajudam o site a funcionar corretamente e a entender como
                ele é utilizado.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Cookies que utilizamos</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-espresso">Necessários:</strong> essenciais
                  para o funcionamento do site (ex.: preferências de
                  navegação). Não podem ser desativados.
                </li>
                <li>
                  <strong className="text-espresso">Analíticos:</strong> usados para
                  entender como os visitantes utilizam o site (ex.: Google
                  Analytics), habilitados apenas mediante consentimento.
                </li>
                <li>
                  <strong className="text-espresso">Marketing:</strong> usados para
                  medir a efetividade de campanhas (ex.: Google Tag
                  Manager), habilitados apenas mediante consentimento.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Gerenciando o consentimento</h2>
              <p className="mt-2">
                No primeiro acesso, um banner permite aceitar, recusar ou
                personalizar os cookies não essenciais. Você pode alterar
                sua escolha a qualquer momento nas configurações do site ou
                do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Contato</h2>
              <p className="mt-2">
                Dúvidas:{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
