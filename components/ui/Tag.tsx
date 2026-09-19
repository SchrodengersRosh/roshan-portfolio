import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Tag({ children, className, dark }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-mono',
        dark
          ? 'border border-rule-night text-[rgba(243,240,233,0.6)]'
          : 'border border-rule text-ink-2',
        className
      )}
    >
      {children}
    </span>
  );
}
