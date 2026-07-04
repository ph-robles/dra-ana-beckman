"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type VeilDirection = "left" | "right" | "up" | "down";

type VeilRevealProps = {
  children: React.ReactNode;
  direction?: VeilDirection;
  delay?: number;
  eager?: boolean;
  className?: string;
  veilClassName?: string;
};

// clip-path inset(top right bottom left) — o lado que "cresce" define
// de onde o véu se retrai, revelando o conteúdo naquela direção.
const CLIP_FROM: Record<VeilDirection, string> = {
  right: "inset(0% 0% 0% 0%)",
  left: "inset(0% 0% 0% 0%)",
  up: "inset(0% 0% 0% 0%)",
  down: "inset(0% 0% 0% 0%)",
};

const CLIP_TO: Record<VeilDirection, string> = {
  right: "inset(0% 0% 0% 100%)",
  left: "inset(0% 100% 0% 0%)",
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
};

/**
 * O elemento de assinatura visual do site: um "véu" que se retrai suavemente
 * para revelar a imagem ou bloco abaixo — uma metáfora direta da proposta da
 * Dra. Ana (realçar, revelar a beleza que já existe, nunca transformar).
 *
 * Usado no hero, nas fotos "Sobre" e nos momentos-chave de cada página.
 * Um único movimento orquestrado, nunca repetido em excesso na mesma tela.
 */
export function VeilReveal({
  children,
  direction = "right",
  delay = 0,
  eager = false,
  className,
  veilClassName,
}: VeilRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const shouldPlay = eager || isInView;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ scale: 1.12, opacity: 0.6 }}
        animate={shouldPlay ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ clipPath: CLIP_FROM[direction] }}
        animate={shouldPlay ? { clipPath: CLIP_TO[direction] } : {}}
        transition={{ duration: 1.1, delay, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute inset-0 bg-linear-to-br from-blush via-champagne-soft to-nude",
          veilClassName
        )}
      />
    </div>
  );
}
