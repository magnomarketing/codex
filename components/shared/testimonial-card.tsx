import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  company: string;
  avatar?: string;
  rating: number;
  testimonial: string;
}

export function TestimonialCard({ name, company, avatar, rating, testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="relative h-full rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-primary/10 backdrop-blur"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border/60 bg-muted">
          {avatar ? (
            <Image src={avatar} alt={`Foto de ${name}`} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-primary">
              {name
                .split(" ")
                .map((segment) => segment[0])
                .join("")}
            </div>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-4 w-4",
              index < rating ? "fill-primary text-primary" : "text-muted-foreground"
            )}
          />
        ))}
      </div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">“{testimonial}”</p>
    </motion.article>
  );
}
