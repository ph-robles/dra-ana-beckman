"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Loading screen inicial, breve e elegante — não é um bloqueador real de
 * carregamento, é um momento de marca (o "véu" se abre e o site aparece).
 * Alto de segurança: some sozinho mesmo se algo falhar.
 */
export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(() => setShow(false), prefersReducedMotion ? 0 : 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl uppercase text-espresso"
          >
            A · B
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
