import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">Página não encontrada</span>
      <h1 className="mt-5 font-display text-7xl text-espresso sm:text-8xl">404</h1>
      <p className="mt-5 max-w-sm text-base leading-relaxed text-espresso-soft">
        Parece que esta página não existe ou foi movida. Que tal voltar para
        um lugar mais harmonioso?
      </p>
      <Link
        href="/"
        data-cursor-hover
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivory transition-transform hover:scale-[1.03]"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para o início
      </Link>
    </section>
  );
}
