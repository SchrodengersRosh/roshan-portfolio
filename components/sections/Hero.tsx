"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Easing, Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { StatusDot } from "@/components/ui/StatusDot";
import { LocalTime } from "@/components/ui/LocalTime";
import { DUR_SLOW, EASE } from "@/lib/motion";

const LINE_VARIANTS: Variants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: DUR_SLOW,
      ease: EASE as Easing,
      delay: i * 0.08,
    },
  }),
};

const FADE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE as Easing,
      delay: 0.16 + i * 0.06,
    },
  }),
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[calc(100svh-64px)] lg:min-h-[calc(100svh-64px)] pt-32 pb-16 lg:pb-24 flex items-end"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 items-end">
          {/* Headline block */}
          <div className="lg:col-span-9">
            {/* Eyebrow */}
            <motion.p
              className="text-mono text-ink-2 mb-6"
              variants={shouldReduceMotion ? undefined : FADE_VARIANTS}
              initial={shouldReduceMotion ? undefined : "hidden"}
              animate="visible"
              custom={0}
            >
              Roshan&nbsp;&nbsp;&middot;&nbsp;&nbsp;Engineering student, DSCE
              Bengaluru&nbsp;&nbsp;&middot;&nbsp;&nbsp;Builder &amp; digital
              strategist
            </motion.p>

            {/* H1 */}
            <h1 className="text-display text-ink">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={shouldReduceMotion ? undefined : LINE_VARIANTS}
                  initial={shouldReduceMotion ? undefined : "hidden"}
                  animate="visible"
                  custom={0}
                >
                  Still in college.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={shouldReduceMotion ? undefined : LINE_VARIANTS}
                  initial={shouldReduceMotion ? undefined : "hidden"}
                  animate="visible"
                  custom={1}
                >
                  Already building for{" "}
                  <em className="font-serif italic">real</em> businesses.
                </motion.span>
              </span>
            </h1>

            {/* Lead */}
            <motion.p
              className="text-lead max-w-[34ch] mt-8"
              variants={shouldReduceMotion ? undefined : FADE_VARIANTS}
              initial={shouldReduceMotion ? undefined : "hidden"}
              animate="visible"
              custom={3}
            >
              I&rsquo;m Roshan. I build backend and AI systems, run digital
              growth for businesses, and host the show when someone hands me a
              microphone. I&rsquo;m early in my career, and I&rsquo;m already
              doing the work.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              variants={shouldReduceMotion ? undefined : FADE_VARIANTS}
              initial={shouldReduceMotion ? undefined : "hidden"}
              animate="visible"
              custom={5}
            >
              <MagneticButton href="#work" variant="primary">
                See selected work
              </MagneticButton>
              <Button as="a" href="#contact" variant="ghost">
                Get in touch
              </Button>
            </motion.div>
          </div>

          {/* Now panel */}
          <motion.div
            className="lg:col-span-3 mt-12 lg:mt-0"
            variants={shouldReduceMotion ? undefined : FADE_VARIANTS}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate="visible"
            custom={7}
          >
            <div className="border border-rule bg-paper-2 p-5">
              <dl className="text-mono space-y-3">
                <div className="flex items-center gap-2">
                  <StatusDot />
                  <dt className="sr-only">Status</dt>
                  <dd className="text-ink">Now</dd>
                </div>
                <div>
                  <dt className="sr-only">Current work</dt>
                  <dd className="text-ink-2">
                    Preparing CORE for publication
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Current work</dt>
                  <dd className="text-ink-2">Building REVENANT</dd>
                </div>
                <div>
                  <dt className="sr-only">Availability</dt>
                  <dd className="text-ink-2">
                    Open to selected business &amp; product work
                  </dd>
                </div>
                <div className="pt-2 border-t border-rule">
                  <dt className="sr-only">Location and time</dt>
                  <dd className="text-ink-3">
                    <LocalTime />
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - desktop only */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-2 absolute bottom-8 left-20"
          variants={shouldReduceMotion ? undefined : FADE_VARIANTS}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate="visible"
          custom={9}
        >
          <span className="text-mono text-ink-3">Scroll</span>
          <motion.div
            className="w-px h-8 bg-ink-3"
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        </motion.div>
      </Container>
    </section>
  );
}
