"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { GradientButton } from "@/components/shared/gradient-button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const links = [
  { href: "#solucion", label: "Solución" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#diferenciales", label: "Diferenciales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-glow">
            LI
          </span>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-sm uppercase tracking-[0.2em] text-primary/80">Lucky Intelligence</span>
            <span className="text-base font-semibold text-foreground">Lucky Net Finder</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition hover:text-primary">
              <span className="inline-flex items-center gap-2">
                {link.label}
              </span>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <GradientButton href="#cta" className="hidden lg:inline-flex">
            Verificar cobertura
          </GradientButton>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-foreground lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border/60 bg-background/95 lg:hidden"
          >
            <div className="container flex flex-col gap-3 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <GradientButton href="#cta" className="w-full justify-center" onClick={() => setOpen(false)}>
                Verificar cobertura
              </GradientButton>
              <ThemeToggle className="self-start" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
