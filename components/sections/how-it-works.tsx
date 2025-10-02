import { AnimatedSection } from "@/components/shared/animated-section";
import { MessageCircle, Radar, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Paso 1: Conversa con Lucky",
    description: "Cuéntale tu ubicación, velocidad deseada y presupuesto. Lucky entiende lenguaje natural.",
    icon: MessageCircle,
  },
  {
    title: "Paso 2: Obtén resultados instantáneos",
    description: "La IA analiza más de 300 proveedores y muestra las mejores opciones con SLA, precios y tiempos.",
    icon: Radar,
  },
  {
    title: "Paso 3: Conecta con el proveedor ideal",
    description: "Recibe acompañamiento de un asesor para contratar e instalar sin complicaciones.",
    icon: Sparkles,
  },
];

export function HowItWorksSection() {
  return (
    <AnimatedSection id="como-funciona" className="container space-y-12 py-24">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
          Tan simple como 1, 2, 3
        </span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Así funciona Lucky Net Finder</h2>
        <p className="text-lg text-muted-foreground">
          En minutos tienes claridad sobre qué proveedor ofrece la mejor conectividad para tu negocio o hogar.
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-x-4 top-10 hidden h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-border/60 bg-card/80 p-6 text-left shadow-xl shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-lg font-semibold text-primary">
                  {index + 1}
                </span>
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
