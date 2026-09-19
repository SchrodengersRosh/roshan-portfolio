'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    'border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-250',
  ghost:
    'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors duration-250',
};

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHoverable, setIsHoverable] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });
  const labelX = useSpring(0, { stiffness: 300, damping: 20 });
  const labelY = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
      setIsHoverable(mq.matches);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !isHoverable || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) / (rect.width / 2);
    const distY = (e.clientY - centerY) / (rect.height / 2);
    x.set(distX * 6);
    y.set(distY * 6);
    labelX.set(distX * 3);
    labelY.set(distY * 3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    labelX.set(0);
    labelY.set(0);
  };

  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-mono tracking-[0.08em] uppercase cursor-pointer',
    variantStyles[variant],
    className
  );

  const content = (
    <motion.span style={{ x: labelX, y: labelY }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      ) : (
        <button className={classes} onClick={onClick}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
