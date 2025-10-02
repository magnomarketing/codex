import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type BaseProps = {
  gradient?: string;
  shimmer?: boolean;
  href?: string;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type GradientButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

const baseGradient =
  "bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0%,_hsl(var(--secondary))_45%,_hsl(var(--accent))_100%)]";

export function GradientButton({
  gradient = baseGradient,
  shimmer = true,
  href,
  className,
  children,
  loading,
  ...props
}: GradientButtonProps) {
  const content = (
    <span
      className={cn(
        "relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-all",
        gradient,
        shimmer && "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        "hover:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="relative flex items-center gap-2">
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className="inline-flex">
      {content}
    </button>
  );
}
