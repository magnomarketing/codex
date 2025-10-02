import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-glow">
              LI
            </span>
            <div>
              <p className="text-lg font-semibold text-foreground">Lucky Intelligence</p>
              <p className="text-sm text-muted-foreground">Impulsando la conectividad en México</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Lucky Net Finder es la plataforma inteligente que conecta a empresas y personas con más de 300 proveedores de internet en todo México.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://www.linkedin.com/company/luckyintelligence" className="hover:text-primary">
              LinkedIn
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-primary">
              Facebook
            </Link>
            <Link href="https://www.instagram.com" className="hover:text-primary">
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Navegación</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="#solucion" className="hover:text-primary">
                Solución
              </Link>
            </li>
            <li>
              <Link href="#como-funciona" className="hover:text-primary">
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link href="#diferenciales" className="hover:text-primary">
                Diferenciales
              </Link>
            </li>
            <li>
              <Link href="#cta" className="hover:text-primary">
                Verificar cobertura
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Contacto</h3>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+525512345678" className="hover:text-primary">
              +52 55 1234 5678
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:hola@luckyintelligence.com" className="hover:text-primary">
              hola@luckyintelligence.com
            </a>
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-1 h-4 w-4 text-primary" />
            <span>CDMX, México</span>
          </p>
          <div className="pt-4 text-xs text-muted-foreground/70">
            <Link href="/privacidad" className="hover:text-primary">
              Aviso de privacidad
            </Link>
            <span className="mx-3">•</span>
            <Link href="/terminos" className="hover:text-primary">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lucky Intelligence. Todos los derechos reservados.
      </div>
    </footer>
  );
}
