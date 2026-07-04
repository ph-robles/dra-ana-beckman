"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Cursor autoral para desktop: um brilho suave (não um ponto genérico)
 * que segue o ponteiro com leve atraso elástico. Aumenta discretamente
 * sobre links, botões e qualquer elemento com [data-cursor-hover].
 *
 * Desativado em telas touch e para quem prefere menos movimento —
 * nesses casos o cursor nativo do sistema permanece intacto.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 300, mass: 0.5 });
  const springY = useSpring(y, { damping: 28, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      setVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    const handleLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      animate={{
        width: hovering ? 56 : 18,
        height: hovering ? 56 : 18,
        backgroundColor: hovering ? "rgba(176,141,91,0.22)" : "rgba(55,36,32,0.55)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
