"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { BeforeAfterItem } from "@/types";

/**
 * Cartão comparativo Antes/Depois. Toque ou clique para alternar —
 * funciona igualmente bem em desktop e mobile. As imagens abaixo são
 * placeholders de cor; substituir por fotos reais (com autorização).
 */
export function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <button
      type="button"
      data-cursor-hover
      onClick={() => setShowAfter((v) => !v)}
      aria-pressed={showAfter}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-lg border border-nude text-left shadow-soft-sm"
    >
      <motion.div
        animate={{
          background: showAfter
            ? "linear-gradient(135deg, #f0dad3, #b08d5b)"
            : "linear-gradient(135deg, #e7e0d8, #c9bfae)",
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="px-6 text-center text-xs uppercase tracking-[0.2em] text-espresso/50">
          Foto — {item.procedure}
        </span>
      </motion.div>

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-wide text-espresso shadow-soft-sm">
        {showAfter ? "Depois" : "Antes"}
      </span>

      <span className="absolute bottom-4 right-4 rounded-full border border-white/60 bg-espresso/70 px-3 py-1 text-[11px] text-ivory backdrop-blur-sm">
        Toque para comparar
      </span>
    </button>
  );
}
