"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

/**
 * Ações flutuantes: agendar pelo WhatsApp (sempre visível) e voltar ao topo
 * (aparece após rolagem). Paleta discreta — sem o verde padrão do WhatsApp,
 * para manter a identidade visual da marca.
 */
export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 600);
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            data-cursor-hover
            className="flex h-11 w-11 items-center justify-center rounded-full border border-nude bg-white text-espresso shadow-soft-sm transition-colors hover:bg-blush"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        data-cursor-hover
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-ivory shadow-soft"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
