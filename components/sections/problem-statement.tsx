import { Flame, FolderClock, History, TriangleAlert } from "lucide-react";

import { AnimatedSection } from "@/components/shared/animated-section";

const pains = [
  {
    title: "Semanas cotizando con múltiples proveedores",
    description: "Coordinar agendas, reuniones y cotizaciones consume el tiempo de tu equipo.",
    icon: FolderClock,
  },
  {
    title: "Información desactualizada y poco confiable",
    description: "Los precios y disponibilidades cambian constantemente, generando incertidumbre.",
    icon: History,
  },
  {
    title: "Sin visibilidad de todas las opciones",
    description: "Sólo conoces a los proveedores más grandes y puedes perder oportunidades locales.",
    icon: TriangleAlert,
  },
  {
    title: "Procesos lentos y complicados",
    description: "Seguimiento manual, llamadas y correos que retrasan la instalación.",
    icon: Flame,
  },
];

export function ProblemStatementSection() {
  return (
    <AnimatedSection className="container space-y-12 py-24">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
          El reto
        </span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          ¿Cansado de buscar el proveedor de internet ideal?
        </h2>
        <p className="text-lg text-muted-foreground">
          El mercado de conectividad en México es complejo y cambia todos los días. Encontrar la mejor opción implica coordinar múltiples proveedores, revisar contratos y comparar datos desactualizados.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {pains.map((pain) => (
          <div
            key={pain.title}
            className="group relative rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-black/5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
              <pain.icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{pain.title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{pain.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
