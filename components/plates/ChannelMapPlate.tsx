import { cn } from '@/lib/utils';

interface ChannelMapPlateProps {
  className?: string;
}

export function ChannelMapPlate({ className }: ChannelMapPlateProps) {
  const cx = 240;
  const cy = 180;
  const nodes = [
    { label: 'Social', x: 120, y: 80 },
    { label: 'Ads', x: 340, y: 70 },
    { label: 'SEO', x: 400, y: 180 },
    { label: 'Email', x: 340, y: 280 },
    { label: 'Community', x: 120, y: 290 },
    { label: 'UGC', x: 72, y: 180 },
  ];

  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-full', className)}
      aria-hidden="true"
    >
      {/* Connection lines */}
      {nodes.map((node, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-ink)"
          strokeWidth="1"
        />
      ))}

      {/* Central circle */}
      <circle
        cx={cx}
        cy={cy}
        r="32"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x={cx}
        y={cy + 1}
        fill="var(--color-ink)"
        fontSize="9"
        fontFamily="var(--font-mono)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.08em"
      >
        CUSTOMER
      </text>

      {/* Outer nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill="var(--color-ink)"
          />
          <text
            x={node.x}
            y={node.y - 12}
            fill="var(--color-ink-2)"
            fontSize="8"
            fontFamily="var(--font-mono)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
