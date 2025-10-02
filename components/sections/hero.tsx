import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Timer } from "lucide-react";

import { GradientButton } from "@/components/shared/gradient-button";
import { ChatMockup } from "@/components/shared/chat-mockup";
import { AnimatedSection } from "@/components/shared/animated-section";

const messages = [
  { role: "user" as const, content: "Necesito internet simétrico de 500 Mbps en Polanco" },
  { role: "assistant" as const, content: "Genial, estoy analizando 312 proveedores disponibles en tu zona…" },
  { role: "assistant" as const, content: "Encontré 3 opciones destacadas con instalación en menos de 48 horas. ¿Deseas que te contacte un asesor?" },
];

const trustBadges = [
  { icon: Sparkles, label: "300+ Proveedores" },
  { icon: Timer, label: "Resultados en < 30 segundos" },
  { icon: ShieldCheck, label: "Cobertura en toda la República" },
];

export function HeroSection() {
  return (
    <AnimatedSection className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_60%)]"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container relative grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 shadow-glow">
            Nuevo en México
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Encuentra el Internet Perfecto para tu Negocio en Segundos
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Lucky Net Finder es la primera IA en México que conecta instantáneamente con más de 300 proveedores de internet para mostrarte la mejor opción según tu ubicación, velocidad y presupuesto.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton href="#cta" className="w-full sm:w-auto">
              Verificar cobertura gratis
            </GradientButton>
            <button
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border/60 bg-background/80 px-6 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary sm:w-auto"
              type="button"
            >
              Ver demo
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-card/70 p-4 backdrop-blur transition hover:border-primary/60"
              >
                <badge.icon className="h-6 w-6 text-primary" />
                <p className="text-sm font-semibold text-foreground">{badge.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -right-10 top-6 hidden h-24 w-24 rounded-full bg-secondary/20 blur-3xl lg:block" />
          <div className="absolute -left-8 bottom-10 hidden h-28 w-28 rounded-full bg-accent/20 blur-3xl lg:block" />
          <ChatMockup messages={messages} />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
