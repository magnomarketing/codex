"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function StatCounter({ end, duration = 2, suffix = "", prefix = "", label }: StatCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [duration, end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-1 text-center"
    >
      <span className="block text-4xl font-bold text-primary md:text-5xl">
        {prefix}
        {Math.round(value).toLocaleString("es-MX")}
        {suffix}
      </span>
      <p className="text-sm font-medium text-muted-foreground md:text-base">{label}</p>
    </motion.div>
  );
}
