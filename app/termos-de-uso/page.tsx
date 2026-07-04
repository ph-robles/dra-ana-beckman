import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUsoPage() {
  return (
    <section className="pt-36 section-pad">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <Reveal>
          <h1 className="font-display text-4xl text-espresso sm:text-5xl">
            Termos de Uso
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 rounded-md border border-dashed border-nude bg-ivory-deep p-4 text-xs text-espresso-soft">
            AVISO (Raphael): texto-modelo inicial — revisar com advogado(a)
            antes de publicar.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-espresso-soft">
            <div>
              <h2 className="font-display text-xl text-espresso">1. Aceitação</h2>
              <p className="mt-2">
                Ao acessar este site, você concorda com os presentes Termos
                de Uso. Caso não concorde, recomendamos que não utilize o
                site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">2. Finalidade do conteúdo</h2>
              <p className="mt-2">
                O conteúdo deste site tem caráter informativo e
                publicitário sobre os serviços de {SITE.name}. Nenhuma
                informação aqui publicada substitui uma avaliação
                presencial e individualizada, que é sempre obrigatória
                antes de qualquer procedimento.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">3. Propriedade intelectual</h2>
              <p className="mt-2">
                Textos, imagens, identidade visual e demais conteúdos deste
                site são de propriedade de {SITE.name} ou utilizados
                mediante licença, sendo vedada sua reprodução sem
                autorização prévia.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">4. Limitação de responsabilidade</h2>
              <p className="mt-2">
                Resultados de procedimentos estéticos variam conforme cada
                paciente. As imagens de &ldquo;antes e depois&rdquo; e
                depoimentos são ilustrativos e não constituem garantia de
                resultado.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">5. Alterações</h2>
              <p className="mt-2">
                Estes termos podem ser atualizados periodicamente, e a
                versão vigente é sempre a publicada nesta página.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">6. Legislação aplicável</h2>
              <p className="mt-2">
                Estes termos são regidos pela legislação brasileira, com
                foro eleito para dirimir eventuais controvérsias.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-espresso">Contato</h2>
              <p className="mt-2">
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
