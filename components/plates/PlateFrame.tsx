import { cn } from '@/lib/utils';

interface PlateFrameProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
  aspect?: string;
}

export function PlateFrame({ children, caption, className, aspect }: PlateFrameProps) {
  return (
    <div
      className={cn(
        'relative border border-rule bg-paper-2 overflow-hidden',
        aspect,
        className
      )}
    >
      {children}
      {caption && (
        <span className="absolute bottom-3 left-3 text-mono text-ink-3 z-10">
          {caption}
        </span>
      )}
    </div>
  );
}
