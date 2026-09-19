import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export function Grid({ children, className }: GridProps) {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-12 gap-x-5 lg:gap-x-6', className)}>
      {children}
    </div>
  );
}
