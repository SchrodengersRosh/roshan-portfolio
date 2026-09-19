import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'link';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    'border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-250',
  ghost:
    'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors duration-250',
  link: 'text-ink underline underline-offset-4 hover:text-accent transition-colors duration-250 px-0 py-0',
};

export function Button({
  variant = 'primary',
  as,
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-mono tracking-[0.08em] uppercase cursor-pointer',
    variantStyles[variant],
    className
  );

  if (as === 'a' || href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
