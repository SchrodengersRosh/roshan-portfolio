import type { Transition, Variants, Easing } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DUR_FAST = 0.25;
export const DUR_BASE = 0.55;
export const DUR_SLOW = 0.9;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR_BASE,
      ease: EASE as Easing,
    } satisfies Transition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};
