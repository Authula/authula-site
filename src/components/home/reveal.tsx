"use client";

import { useEffect, useRef } from "react";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Signal to the root layout failsafe that client-side reveals initialized, so
  // it leaves scroll-triggered animations alone instead of force-revealing.
  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      document.documentElement.dataset.revealReady = "true";
    }
  }, []);

  // Keep the SSR and hydration markup identical. Reduced-motion visibility is
  // handled by the motion-reduce utilities, so the initial style must not
  // depend on a client-only media query.
  return (
    <motion.div
      ref={ref}
      data-reveal="out"
      className={cn("motion-reduce:transform-none! motion-reduce:opacity-100!", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onViewportEnter={() => {
        if (ref.current) {
          ref.current.dataset.reveal = "in";
        }
      }}
    >
      {children}
    </motion.div>
  );
}
