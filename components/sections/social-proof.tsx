import { AnimatedSection } from "@/components/shared/animated-section";
import { StatCounter } from "@/components/shared/stat-counter";
import { TestimonialCard } from "@/components/shared/testimonial-card";

const testimonials = [
  {
    name: "Carlos Méndez",
    company: "CTO, RetailMax",
    rating: 5,
    testimonial:
      "Encontramos redundancia de fibra y microondas en menos de una hora. La instalación se coordinó en 48 horas. Increíble servicio.",
  },
  {
    name: "María González",
    company: "Directora de TI, Grupo Norte",
    rating: 5,
    testimonial:
      "Lucky nos ayudó a comparar planes empresariales en tres ciudades distintas con reportes descargables y asesoría personalizada.",
  },
  {
    name: "Luis Herrera",
    company: "Emprendedor",
    rating: 4,
    testimonial:
      "Como negocio en crecimiento, necesitábamos internet confiable sin romper el presupuesto. Lucky nos guió en cada paso.",
  },
];

export function SocialProofSection() {
  return (
    <AnimatedSection id="testimonios" className="container space-y-16 py-24">
      <div className="grid gap-8 md:grid-cols-4">
        <StatCounter end={300} suffix="+" label="Proveedores conectados" />
        <StatCounter end={25} suffix="+" label="Años de experiencia" />
        <StatCounter end={10000} suffix="+" label="Búsquedas exitosas" />
        <StatCounter end={98} suffix="%" label="Satisfacción de clientes" />
      </div>
      <div className="space-y-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">Confianza</span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          Empresas y personas confían en Lucky Intelligence
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Casos reales respaldan nuestra plataforma y la calidad de los proveedores integrados.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </AnimatedSection>
  );
}
