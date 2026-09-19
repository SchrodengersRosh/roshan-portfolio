'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';

const columns = [
  {
    word: 'Build.',
    label: 'Software & systems',
    description:
      'Backend architecture, retrieval systems, APIs. Things that have to keep working after the demo.',
  },
  {
    word: 'Grow.',
    label: 'Business & marketing',
    description:
      'Positioning, websites, ads, SEO, email. Getting a business in front of the people who need it.',
  },
  {
    word: 'Speak.',
    label: 'Stage & communication',
    description:
      'Hosting, PR, presenting. Saying the right thing clearly, to a room, on the first take.',
  },
];

export function RangeStrip() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="border-t border-b border-rule">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal
              key={col.word}
              delay={i * 0.06}
              className={cn(
                'py-10 lg:py-14 transition-colors duration-250',
                i < columns.length - 1 && 'md:border-r border-b md:border-b-0 border-rule',
                i > 0 && 'md:pl-8'
              )}
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-default"
              >
                <p
                  className={cn(
                    'text-h2 font-serif transition-colors duration-250',
                    hovered !== null && hovered !== i
                      ? 'text-ink-3'
                      : hovered === i
                        ? 'text-accent'
                        : 'text-ink'
                  )}
                >
                  {col.word}
                </p>
                <p className="text-mono text-ink-2 mt-3">{col.label}</p>
                <p className="text-small text-ink-2 mt-2 max-w-[40ch]">
                  {col.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
