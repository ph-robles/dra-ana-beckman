"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_60%] lg:flex-[0_0_42%]">
              <div className="flex h-full flex-col rounded-lg border border-nude bg-white p-8 shadow-soft-sm">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-champagne text-champagne" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-espresso-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-nude pt-4">
                  <p className="font-display text-lg text-espresso">{t.name}</p>
                  {t.procedure && (
                    <p className="text-xs uppercase tracking-wide text-champagne">
                      {t.procedure}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          aria-label="Depoimento anterior"
          data-cursor-hover
          onClick={() => emblaApi?.scrollPrev()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nude text-espresso transition-colors hover:bg-blush"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para depoimento ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selectedIndex ? "w-6 bg-champagne" : "w-1.5 bg-nude"
              )}
            />
          ))}
        </div>

        <button
          aria-label="Próximo depoimento"
          data-cursor-hover
          onClick={() => emblaApi?.scrollNext()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-nude text-espresso transition-colors hover:bg-blush"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
