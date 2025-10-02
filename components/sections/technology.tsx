import { AnimatedSection } from "@/components/shared/animated-section";
import { Cpu, Database, Shield, Workflow } from "lucide-react";

const capabilities = [
  {
    title: "Machine Learning continuo",
    description: "Modelos que aprenden de cada búsqueda para mejorar recomendaciones y tiempos de instalación.",
    icon: Workflow,
  },
  {
    title: "Datos actualizados en tiempo real",
    description: "Monitoreo constante de disponibilidad, precios y SLA directamente con proveedores.",
    icon: Database,
  },
  {
    title: "Algoritmos de matching inteligente",
    description: "Identifican la mejor combinación de proveedor, tecnología y redundancia para cada caso.",
    icon: Cpu,
  },
  {
    title: "Seguridad y cumplimiento",
    description: "Infraestructura con cifrado y protocolos de privacidad alineados a normativas mexicanas e internacionales.",
    icon: Shield,
  },
];

export function TechnologySection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-[#0b1220] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
      </div>
      <div className="container relative space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            Tecnología de IA
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Tecnología de IA de vanguardia</h2>
          <p className="text-lg text-slate-300">
            Lucky Net Finder combina inteligencia artificial, analítica avanzada y expertos en conectividad para crear la experiencia de búsqueda más completa en México.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.75)] backdrop-blur"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-300">
                <capability.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 text-base text-slate-300">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
