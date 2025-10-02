import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucky Net Finder - Encuentra Internet en Segundos | Lucky Intelligence",
  description:
    "La primera IA en México que conecta 300+ proveedores de internet. Compara precios, velocidades y tiempos de entrega al instante. Gratis y sin compromiso.",
  keywords: [
    "internet México",
    "proveedores internet",
    "comparador internet",
    "IA conectividad",
  ],
  openGraph: {
    title: "Lucky Net Finder - El Buscador Inteligente de Internet",
    description:
      "Accede a 300+ proveedores de internet en México con nuestra IA. Resultados instantáneos y asesoría experta.",
    url: "https://luckyintelligence.com/net-finder",
    siteName: "Lucky Intelligence",
    images: [
      {
        url: "https://luckyintelligence.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucky Net Finder - Hero Image",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Net Finder - Encuentra Internet en Segundos",
    description:
      "Conecta con 300+ proveedores de internet en México mediante nuestra IA.",
    images: ["https://luckyintelligence.com/og-image.jpg"],
  },
  metadataBase: new URL("https://luckyintelligence.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans text-base",
          outfit.variable
        )}
      >
        <a href="#contenido" id="skip-to-content" className="sr-only focus:not-sr-only">
          Saltar al contenido principal
        </a>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="contenido" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
