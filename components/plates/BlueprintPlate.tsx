import { cn } from '@/lib/utils';

interface BlueprintPlateProps {
  className?: string;
}

export function BlueprintPlate({ className }: BlueprintPlateProps) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-full', className)}
      aria-hidden="true"
    >
      {/* Grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 24}
          y1="0"
          x2={i * 24}
          y2="360"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 24}
          x2="480"
          y2={i * 24}
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
      ))}

      {/* Floor plan rectangles */}
      <rect x="48" y="48" width="120" height="96" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="72" y="100" fill="var(--color-ink-2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em">RESIDENTIAL</text>

      <rect x="192" y="48" width="120" height="96" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="210" y="100" fill="var(--color-ink-2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em">RENOVATION</text>

      <rect x="48" y="192" width="120" height="96" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="72" y="244" fill="var(--color-ink-2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em">INTERIORS</text>

      <rect x="192" y="192" width="120" height="96" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="210" y="244" fill="var(--color-ink-2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em">COMMERCIAL</text>

      {/* Visitor marker */}
      <circle cx="384" cy="72" r="6" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="372" y="56" fill="var(--color-ink-2)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.08em">VISITOR</text>

      {/* Contact box */}
      <rect x="360" y="228" width="84" height="48" stroke="var(--color-ink)" strokeWidth="1" fill="none" />
      <text x="376" y="256" fill="var(--color-ink-2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.08em">CONTACT</text>

      {/* Enquiry dashed line */}
      <line x1="384" y1="78" x2="384" y2="156" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="384" y1="156" x2="402" y2="228" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="392" y="152" fill="var(--color-ink-2)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.05em">ENQUIRY →</text>
    </svg>
  );
}
