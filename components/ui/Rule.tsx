import { cn } from '@/lib/utils';

interface RuleProps {
  className?: string;
  dark?: boolean;
}

export function Rule({ className, dark }: RuleProps) {
  return (
    <hr
      className={cn(
        'border-0 border-t',
        dark ? 'border-rule-night' : 'border-rule',
        className
      )}
    />
  );
}
