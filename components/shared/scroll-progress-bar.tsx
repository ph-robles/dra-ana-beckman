"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Barra fina no topo da viewport indicando o progresso de leitura da página.
 * Discreta, na cor champagne — não compete com o conteúdo.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-champagne"
      style={{ scaleX }}
    />
  );
}
