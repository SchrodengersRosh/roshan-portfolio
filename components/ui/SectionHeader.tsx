import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  index: string;
  name: string;
  annotation?: string;
  annotationElement?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  index,
  name,
  annotation,
  annotationElement,
  className,
  dark,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-baseline justify-between mb-8 lg:mb-12',
        className
      )}
    >
      <div className="flex items-baseline gap-3">
        <span
          className={cn(
            'text-mono',
            dark ? 'text-[rgba(243,240,233,0.6)]' : 'text-ink-2'
          )}
        >
          {index}
        </span>
        <span
          className={cn(
            'text-mono',
            dark ? 'text-[rgba(243,240,233,0.6)]' : 'text-ink-2'
          )}
        >
          {name}
        </span>
      </div>
      {(annotation || annotationElement) && (
        <div
          className={cn(
            'text-mono hidden md:block',
            dark ? 'text-[rgba(243,240,233,0.6)]' : 'text-ink-2'
          )}
        >
          {annotationElement || annotation}
        </div>
      )}
    </div>
  );
}
