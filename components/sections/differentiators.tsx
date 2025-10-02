import { AnimatedSection } from "@/components/shared/animated-section";

const comparison = [
  {
    label: "Tiempo de respuesta",
    traditional: "Semanas de cotizaciones",
    lucky: "Resultados en 30 segundos",
  },
  {
    label: "Contacto",
    traditional: "Llamadas a múltiples proveedores",
    lucky: "Una conversación con Lucky",
  },
  {
    label: "Información disponible",
    traditional: "Datos incompletos y desactualizados",
    lucky: "Base de datos en tiempo real de 300+ proveedores",
  },
  {
    label: "Experiencia",
    traditional: "Proceso manual y complicado",
    lucky: "Experiencia guiada y automatizada",
  },
];

const highlights = [
  {
    title: "98% satisfacción",
    description: "Clientes felices gracias a la rapidez y claridad del proceso.",
  },
  {
    title: "10,000+ búsquedas",
    description: "Casos reales en toda la República Mexicana.",
  },
  {
    title: "25 años de expertise",
    description: "Equipo con décadas de experiencia en telecomunicaciones.",
  },
];

export function DifferentiatorsSection() {
  return (
    <AnimatedSection id="diferenciales" className="bg-gradient-to-b from-secondary/10 via-background to-background py-24">
      <div className="container space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
            ¿Por qué Lucky?
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            La forma más rápida y confiable de elegir internet en México
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra IA centraliza información, recomendaciones y acompañamiento humano para tomar decisiones sin riesgo.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-xl shadow-black/5">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-primary/10 text-xs uppercase tracking-widest text-primary">
              <tr>
                <th className="px-6 py-4 font-semibold">Aspecto</th>
                <th className="px-6 py-4 font-semibold">Método tradicional</th>
                <th className="px-6 py-4 font-semibold text-primary">Lucky Net Finder</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={row.label} className={index % 2 === 0 ? "bg-background/40" : "bg-background/70"}>
                  <td className="px-6 py-5 text-base font-semibold text-foreground">{row.label}</td>
                  <td className="px-6 py-5 text-sm text-muted-foreground">{row.traditional}</td>
                  <td className="px-6 py-5 text-sm font-semibold text-primary">{row.lucky}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-border/60 bg-card/80 p-6 text-center shadow-lg shadow-primary/10 backdrop-blur"
            >
              <p className="text-2xl font-semibold text-primary">{highlight.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
