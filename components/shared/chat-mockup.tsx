"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChatMockupProps {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
  autoPlay?: boolean;
}

export function ChatMockup({ messages, autoPlay = true }: ChatMockupProps) {
  const [visibleCount, setVisibleCount] = useState(autoPlay ? 1 : messages.length);
  const displayedMessages = useMemo(() => messages.slice(0, visibleCount), [messages, visibleCount]);

  useEffect(() => {
    if (!autoPlay) return;
    if (visibleCount >= messages.length) return;

    const timeout = setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 1, messages.length));
    }, 1200);

    return () => clearTimeout(timeout);
  }, [autoPlay, messages.length, visibleCount]);

  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-border/70 bg-background/80 p-6 shadow-xl shadow-primary/20 backdrop-blur">
      <div className="absolute -right-6 top-6 h-12 w-12 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -left-4 bottom-8 h-16 w-16 rounded-full bg-secondary/10 blur-2xl" />
      <div className="relative space-y-3">
        <AnimatePresence initial={false}>
          {displayedMessages.map((message, index) => (
            <motion.div
              key={`${message.role}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg",
                message.role === "assistant"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-card/95 text-foreground"
              )}
            >
              {message.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/80">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden />
          Lucky está analizando disponibilidad en tu zona…
        </div>
      </div>
    </div>
  );
}
