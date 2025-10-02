import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
      className={cn(
        "group relative h-full rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-br before:from-primary/10 before:via-secondary/5 before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner shadow-primary/20">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-foreground/95">{title}</h3>
        <p className="mt-2 text-base text-muted-foreground">{description}</p>
      </div>
    </motion.article>
  );
}
