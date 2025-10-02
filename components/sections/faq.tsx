import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { AnimatedSection } from "@/components/shared/animated-section";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto cuesta usar Lucky Net Finder?",
    answer:
      "El uso de la plataforma y la evaluación inicial son totalmente gratuitos. Sólo pagas el servicio contratado con el proveedor elegido.",
  },
  {
    question: "¿Qué información necesito proporcionar?",
    answer:
      "Con tu ubicación, necesidades de velocidad, presupuesto estimado y tipo de uso (hogar o empresa) podemos personalizar las recomendaciones.",
  },
  {
    question: "¿Cuánto tiempo tarda la búsqueda?",
    answer:
      "En menos de 30 segundos recibes recomendaciones preliminares. Un especialista confirma disponibilidad en las siguientes horas.",
  },
  {
    question: "¿Lucky Net Finder funciona en toda la República?",
    answer:
      "Sí, contamos con cobertura nacional y proveedores especializados por región, incluyendo zonas remotas.",
  },
  {
    question: "¿Qué pasa después de obtener resultados?",
    answer:
      "Te conectamos con un asesor que coordina la contratación e instalación según tus tiempos.",
  },
  {
    question: "¿Puedo cambiar de proveedor si ya tengo uno?",
    answer:
      "Claro, Lucky analiza alternativas y te guía en la migración o en contratos de respaldo para asegurar continuidad.",
  },
];

export function FAQSection() {
  return (
    <AnimatedSection id="faq" className="container space-y-12 py-24">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
          Preguntas frecuentes
        </span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          Todo lo que necesitas saber antes de comenzar
        </h2>
        <p className="text-lg text-muted-foreground">
          Si tienes dudas adicionales, nuestro equipo está listo para ayudarte en cualquier momento.
        </p>
      </div>
      <Accordion.Root type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <Accordion.Item key={faq.question} value={faq.question} className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-lg shadow-black/5">
            <Accordion.Header>
              <Accordion.Trigger
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition",
                  "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-6 text-sm text-muted-foreground data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </AnimatedSection>
  );
}
