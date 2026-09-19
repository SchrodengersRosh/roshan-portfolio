import { cn } from '@/lib/utils';

interface SchematicPlateProps {
  className?: string;
}

export function SchematicPlate({ className }: SchematicPlateProps) {
  const boxes = [
    { label: 'Campus\ndocs', x: 16, accent: false },
    { label: 'Chunk', x: 86, accent: false },
    { label: 'Embed', x: 152, accent: false },
    { label: 'PostgreSQL /\nSupabase', x: 218, accent: false },
    { label: 'Retrieve', x: 308, accent: true },
    { label: 'Context', x: 384, accent: false },
    { label: 'Answer', x: 450, accent: false },
  ];

  return (
    <svg
      viewBox="0 0 520 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-full', className)}
      aria-hidden="true"
    >
      {boxes.map((box, i) => {
        const w = box.label.includes('PostgreSQL') ? 80 : 56;
        const h = 40;
        const cy = 100;
        const lines = box.label.split('\n');
        return (
          <g key={i}>
            <rect
              x={box.x}
              y={cy - h / 2}
              width={w}
              height={h}
              stroke={box.accent ? 'var(--color-accent)' : 'var(--color-ink)'}
              strokeWidth="1"
              fill="none"
            />
            {lines.map((line, li) => (
              <text
                key={li}
                x={box.x + w / 2}
                y={cy + (li - (lines.length - 1) / 2) * 11}
                fill="var(--color-ink-2)"
                fontSize="8"
                fontFamily="var(--font-mono)"
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="0.06em"
              >
                {line}
              </text>
            ))}
            {/* Arrow to next box */}
            {i < boxes.length - 1 && (
              <line
                x1={box.x + w}
                y1={cy}
                x2={boxes[i + 1].x}
                y2={cy}
                stroke="var(--color-ink)"
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
            )}
          </g>
        );
      })}

      {/* Follow-up dotted return line */}
      <path
        d="M 478 120 L 478 160 L 336 160 L 336 120"
        stroke="var(--color-ink-2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <text
        x="407"
        y="156"
        fill="var(--color-ink-3)"
        fontSize="7"
        fontFamily="var(--font-mono)"
        textAnchor="middle"
        letterSpacing="0.06em"
      >
        FOLLOW-UP
      </text>

      {/* Arrowhead marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6" fill="var(--color-ink)" />
        </marker>
      </defs>
    </svg>
  );
}
