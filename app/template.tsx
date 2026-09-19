"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Easing } from "motion/react";
import { DUR_FAST, EASE } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: DUR_FAST,
        ease: EASE as Easing,
      }}
    >
      {children}
    </motion.div>
  );
}
