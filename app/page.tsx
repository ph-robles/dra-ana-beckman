import { Hero } from "@/sections/home/hero";
import { AboutPreview } from "@/sections/home/about-preview";
import { ProceduresPreview } from "@/sections/home/procedures-preview";
import { CtaFinal } from "@/sections/home/cta-final";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProceduresPreview />
      <CtaFinal />
    </>
  );
}
