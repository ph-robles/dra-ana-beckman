import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Reveal>
          <h1 className="font-display text-4xl text-espresso sm:text-5xl">
            Política de Privacidade
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 rounded-md border border-dashed border-nude bg-ivory-deep p-4 text-xs text-espresso-soft">
            AVISO (Raphael): este é um texto-modelo, redigido para servir de
            estrutura inicial. Recomenda-se revisão por advogado(a)
            especializado(a) em LGPD antes da publicação definitiva.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-espresso-soft">
            <p>
              Última atualização: a definir. Esta Política de Privacidade
              descreve como {SITE.name} coleta, usa, armazena e protege os
              dados pessoais dos visitantes e pacientes deste site, em
              conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018 — LGPD).
            </p>

            <div>
              <h2 className="font-display text-xl text-espresso">1. Dados coletados</h2>
              <p className="mt-2">
                Podemos coletar dados fornecidos voluntariamente por meio do
                formulário de contato (nome, e-mail, telefone e mensagem),
                além de dados de navegação coletados automaticamente por
                cookies, conforme detalhado em nossa{" "}
                <a href="/politica-de-cookies" className="underline">
                  Política de Cookies
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">2. Finalidade do tratamento</h2>
              <p className="mt-2">
                Os dados são utilizados para responder solicitações de
                contato e agendamento, melhorar a experiência de navegação e,
                mediante consentimento, para fins de comunicação e marketing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">3. Compartilhamento de dados</h2>
              <p className="mt-2">
                Não vendemos dados pessoais. Dados podem ser compartilhados
                com prestadores de serviço estritamente necessários à
                operação do site (ex.: envio de e-mail, hospedagem), sempre
                sob obrigações de confidencialidade.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">4. Direitos do titular</h2>
              <p className="mt-2">
                Nos termos da LGPD, você pode solicitar confirmação de
                tratamento, acesso, correção, anonimização, portabilidade ou
                eliminação dos seus dados, além de revogar consentimento a
                qualquer momento. Consulte também nossa página{" "}
                <a href="/lgpd" className="underline">
                  LGPD
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">5. Segurança</h2>
              <p className="mt-2">
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados pessoais contra acessos não autorizados e
                situações de destruição, perda ou alteração.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">6. Contato</h2>
              <p className="mt-2">
                Dúvidas sobre esta política podem ser enviadas para{" "}
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
