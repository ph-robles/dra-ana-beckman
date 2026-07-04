import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "LGPD",
  alternates: { canonical: "/lgpd" },
};

export default function LgpdPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Reveal>
          <h1 className="font-display text-4xl text-espresso sm:text-5xl">
            LGPD
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 rounded-md border border-dashed border-nude bg-ivory-deep p-4 text-xs text-espresso-soft">
            AVISO (Raphael): texto-modelo inicial — revisar com advogado(a)
            antes de publicar, especialmente os dados do encarregado (DPO).
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-espresso-soft">
            <p>
              {SITE.name} está comprometida com a proteção de dados
              pessoais, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <div>
              <h2 className="font-display text-xl text-espresso">Seus direitos</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos dados pessoais tratados</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados a outro fornecedor</li>
                <li>Revogação do consentimento a qualquer momento</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Como exercer seus direitos</h2>
              <p className="mt-2">
                Envie sua solicitação para{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
                . Responderemos dentro do prazo previsto em lei.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Encarregado de Dados (DPO)</h2>
              <p className="mt-2">
                {/* TODO(Raphael): indicar nome/contato do encarregado, se aplicável */}
                Informação a ser definida.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
