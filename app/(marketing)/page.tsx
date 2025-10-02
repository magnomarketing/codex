import { HeroSection } from "@/components/sections/hero";
import { ProblemStatementSection } from "@/components/sections/problem-statement";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { DifferentiatorsSection } from "@/components/sections/differentiators";
import { SocialProofSection } from "@/components/sections/social-proof";
import { TechnologySection } from "@/components/sections/technology";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lucky Intelligence",
  url: "https://luckyintelligence.com",
  logo: "https://luckyintelligence.com/logo.svg",
  sameAs: [
    "https://www.linkedin.com/company/luckyintelligence",
    "https://www.facebook.com/luckyintelligence",
    "https://www.instagram.com/luckyintelligence",
  ],
  department: {
    "@type": "Organization",
    name: "Lucky Net Finder",
    url: "https://luckyintelligence.com/net-finder",
    serviceType: "Comparador de proveedores de internet",
  },
};

const productData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lucky Net Finder",
  description:
    "La primera IA en México que conecta 300+ proveedores de internet. Compara precios, velocidades y tiempos de entrega al instante.",
  brand: {
    "@type": "Organization",
    name: "Lucky Intelligence",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "MXN",
    availability: "https://schema.org/InStock",
    url: "https://luckyintelligence.com/net-finder",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta usar Lucky Net Finder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El uso de la plataforma y la evaluación inicial son gratuitos. Sólo pagas el servicio contratado con el proveedor elegido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué información necesito proporcionar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con ubicación, velocidad deseada, presupuesto y tipo de uso obtenemos recomendaciones personalizadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda la búsqueda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En menos de 30 segundos recibes opciones preliminares y un especialista confirma disponibilidad en las siguientes horas.",
      },
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="schema-product" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(productData)}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqData)}
      </Script>
      <HeroSection />
      <ProblemStatementSection />
      <SolutionSection />
      <HowItWorksSection />
      <DifferentiatorsSection />
      <SocialProofSection />
      <TechnologySection />
      <CTASection />
      <FAQSection />
    </>
  );
}
