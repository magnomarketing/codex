import { AnimatedSection } from "@/components/shared/animated-section";
import { CoverageForm } from "@/components/forms/coverage-form";
import { ShieldCheck, TimerReset, Zap } from "lucide-react";

const assurances = [
  { icon: Zap, label: "Resultados instantáneos" },
  { icon: ShieldCheck, label: "Sin compromiso" },
  { icon: TimerReset, label: "Respuesta < 24h" },
];

export function CTASection() {
  return (
    <AnimatedSection id="cta" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/15" />
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            Agenda tu diagnóstico
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Descubre tu mejor opción de internet hoy
          </h2>
          <p className="text-lg text-muted-foreground">
            Gratuito, sin compromiso y con acompañamiento experto. Dinos qué necesitas y Lucky se encarga del resto.
          </p>
          <div className="flex flex-wrap gap-3">
            {assurances.map((assurance) => (
              <span
                key={assurance.label}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm text-muted-foreground"
              >
                <assurance.icon className="h-4 w-4 text-primary" />
                {assurance.label}
              </span>
            ))}
          </div>
        </div>
        <CoverageForm />
      </div>
    </AnimatedSection>
  );
}
