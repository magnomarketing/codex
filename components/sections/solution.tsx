import { BrainCircuit, Compass, Headset, Network } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/shared/animated-section";
import { FeatureCard } from "@/components/shared/feature-card";
import { ChatMockup } from "@/components/shared/chat-mockup";

const features = [
  {
    title: "Búsqueda instantánea",
    description: "Analiza más de 300 proveedores en segundos según tus criterios de velocidad y presupuesto.",
    icon: BrainCircuit,
  },
  {
    title: "Comparación inteligente",
    description: "Precios, velocidades y tiempos de entrega en una sola vista para tomar decisiones informadas.",
    icon: Compass,
  },
  {
    title: "Cobertura nacional",
    description: "Disponibilidad en toda la República Mexicana, con énfasis en zonas empresariales y residenciales clave.",
    icon: Network,
  },
  {
    title: "Asesoría experta",
    description: "Especialistas te acompañan desde la selección hasta la instalación y soporte continuo.",
    icon: Headset,
  },
];

const messages = [
  { role: "assistant" as const, content: "Hola, soy Lucky 🤖 ¿Para qué tipo de negocio necesitas internet?" },
  { role: "user" as const, content: "Tenemos oficinas en Monterrey y requerimos redundancia de fibra." },
  { role: "assistant" as const, content: "Encontré 4 proveedores con SLA empresarial y backup inalámbrico disponible." },
];

export function SolutionSection() {
  return (
    <AnimatedSection id="solucion" className="bg-gradient-to-b from-background via-background/70 to-secondary/10 py-24">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">La solución</span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Conoce a Lucky 🤖 — tu asistente inteligente de conectividad
          </h2>
          <p className="text-lg text-muted-foreground">
            La primera y única IA en México que revoluciona la búsqueda de internet. Lucky analiza disponibilidad, compara planes y te conecta con el mejor proveedor en minutos.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -right-12 top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-10 bottom-6 h-24 w-24 rounded-full bg-secondary/20 blur-3xl" />
          <ChatMockup messages={messages} />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
