'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import type { Easing } from 'motion/react';
import { cn } from '@/lib/utils';
import { PlateFrame } from '@/components/plates/PlateFrame';
import { BlueprintPlate } from '@/components/plates/BlueprintPlate';
import { SchematicPlate } from '@/components/plates/SchematicPlate';
import { ChannelMapPlate } from '@/components/plates/ChannelMapPlate';
import type { CaseStudy } from '@/content/work';
import { EASE } from '@/lib/motion';

interface WorkRowProps {
  study: CaseStudy;
}

const plates: Record<string, React.FC<{ className?: string }>> = {
  blueprint: BlueprintPlate,
  schematic: SchematicPlate,
  'channel-map': ChannelMapPlate,
};

export function WorkRow({ study }: WorkRowProps) {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const Plate = plates[study.plate];
  const indexStr = String(study.index).padStart(2, '0');

  return (
    <Link
      href={`/work/${study.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4 py-8 lg:py-10 transition-colors duration-250',
          hovered && 'bg-paper-2'
        )}
      >
        {/* Mobile: Plate first */}
        <div className="lg:hidden">
          <PlateFrame
            caption={`Fig. ${indexStr}`}
            className="aspect-[4/3]"
          >
            {Plate && <Plate />}
          </PlateFrame>
        </div>

        {/* Index */}
        <div className="lg:col-span-1">
          <span
            className={cn(
              'text-mono transition-colors duration-250',
              hovered ? 'text-accent' : 'text-ink-2'
            )}
          >
            {indexStr}
          </span>
        </div>

        {/* Title and thesis */}
        <div className="lg:col-span-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-h3 font-serif text-ink">
                {study.title}
              </h3>
              {study.subtitle && (
                <p className="text-small text-ink-2 mt-1">{study.subtitle}</p>
              )}
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className={cn(
                'flex-shrink-0 mt-2 transition-transform duration-250',
                hovered && 'translate-x-1'
              )}
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-body text-ink-2 mt-2">{study.thesis}</p>
        </div>

        {/* Meta */}
        <div className="lg:col-span-3">
          <dl className="space-y-2">
            <div>
              <dt className="text-mono text-ink-3">Role</dt>
              <dd className="text-small text-ink-2">{study.role}</dd>
            </div>
            <div>
              <dt className="text-mono text-ink-3">Type</dt>
              <dd className="text-small text-ink-2">{study.type}</dd>
            </div>
            <div>
              <dt className="text-mono text-ink-3">Stack / Skills</dt>
              <dd className="text-small text-ink-2">
                {study.skills.slice(0, 3).join(', ')}
              </dd>
            </div>
          </dl>
        </div>

        {/* Desktop plate */}
        <motion.div
          className="hidden lg:block lg:col-span-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : hovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 8 }
          }
          transition={{
            duration: 0.35,
            ease: EASE as Easing,
          }}
        >
          <PlateFrame
            caption={`Fig. ${indexStr}`}
            className="aspect-[4/3]"
          >
            {Plate && <Plate />}
          </PlateFrame>
        </motion.div>
      </div>
    </Link>
  );
}
