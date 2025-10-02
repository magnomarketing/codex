"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { MapPin, Phone, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/shared/gradient-button";

const coverageSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  location: z.string().min(4, "Especifica la ciudad o municipio"),
  contact: z
    .string()
    .min(8, "Ingresa un teléfono o correo válido")
    .regex(/^(\+?52)?[\d\s\-@.]+$/, "Formato de contacto no válido"),
});

type CoverageFormData = z.infer<typeof coverageSchema>;

const zodResolver: Resolver<CoverageFormData> = async (values) => {
  const parsed = coverageSchema.safeParse(values);
  if (parsed.success) {
    return { values: parsed.data, errors: {} };
  }

  const errors = parsed.error.issues.reduce<Record<string, any>>((acc, issue) => {
    const field = issue.path[0];
    if (!acc[field]) {
      acc[field] = { type: issue.code, message: issue.message };
    }
    return acc;
  }, {});

  return {
    values: {},
    errors,
  };
};

export function CoverageForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CoverageFormData>({ resolver: zodResolver, defaultValues: { name: "", location: "", contact: "" } });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: CoverageFormData) => {
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.info("Solicitud enviada", data);
    setSubmitted(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative flex flex-col gap-4 rounded-3xl border border-border/70 bg-background/90 p-6 shadow-xl shadow-primary/10 backdrop-blur",
        className
      )}
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
            Nombre completo
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/70" />
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register("name")}
              className="h-12 w-full rounded-full border border-border/60 bg-background/80 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
              placeholder="Ej. María López"
            />
          </div>
          {errors.name && <p className="text-xs text-primary">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium text-muted-foreground">
            Ubicación
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/70" />
            <input
              id="location"
              type="text"
              autoComplete="address-level2"
              {...register("location")}
              className="h-12 w-full rounded-full border border-border/60 bg-background/80 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
              placeholder="Ciudad, estado"
            />
          </div>
          {errors.location && <p className="text-xs text-primary">{errors.location.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact" className="text-sm font-medium text-muted-foreground">
            Teléfono o correo
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary/70" />
            <input
              id="contact"
              type="text"
              autoComplete="tel"
              {...register("contact")}
              className="h-12 w-full rounded-full border border-border/60 bg-background/80 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
              placeholder="+52 55 1234 5678"
            />
          </div>
          {errors.contact && <p className="text-xs text-primary">{errors.contact.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          Evaluación gratuita y sin compromiso. Nuestro equipo responde en menos de 24 horas.
        </p>
        <GradientButton type="submit" loading={isSubmitting} className="w-full md:w-auto">
          Verificar mi cobertura ahora
        </GradientButton>
      </div>
      {submitted && (
        <div className="flex items-center gap-2 rounded-2xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          ¡Gracias! Un especialista se comunicará contigo muy pronto.
        </div>
      )}
    </form>
  );
}
