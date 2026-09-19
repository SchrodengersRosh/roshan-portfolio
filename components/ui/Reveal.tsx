"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Easing } from "motion/react";
import { revealVariants, DUR_BASE, EASE } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionDiv = motion.create("div");

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: DUR_BASE,
        ease: EASE as Easing,
        delay,
      }}
    >
      {children}
    </MotionDiv>
  );
}
