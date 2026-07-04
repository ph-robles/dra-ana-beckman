"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, Instagram } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] flex flex-col bg-ivory lg:hidden"
        >
          <div className="flex h-20 items-center justify-end px-6">
            <button
              aria-label="Fechar menu"
              onClick={onClose}
              className="rounded-full p-2 text-espresso"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl text-espresso"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-between border-t border-nude px-8 py-6"
          >
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-espresso-soft"
            >
              <Instagram className="h-4 w-4" />
              {SITE.instagramHandle}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-espresso px-5 py-2 text-sm text-ivory"
            >
              Agendar
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
