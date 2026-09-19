'use client';

import { useState, useCallback } from 'react';
import { siteConfig } from '@/content/site';
import { cn } from '@/lib/utils';

interface CopyEmailProps {
  className?: string;
  variant?: 'button' | 'inline';
}

export function CopyEmail({ className, variant = 'button' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = siteConfig.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }, []);

  if (variant === 'inline') {
    return (
      <button
        onClick={handleCopy}
        className={cn(
          'inline-flex items-center gap-2 text-mono text-ink-2 hover:text-ink transition-colors duration-250 cursor-pointer',
          className
        )}
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
              <path d="M10 4V2.5C10 2.22386 9.77614 2 9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5C2 9.77614 2.22386 10 2.5 10H4" stroke="currentColor" strokeWidth="1" />
            </svg>
            Copy email
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-mono tracking-[0.08em] uppercase',
        'border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors duration-250 cursor-pointer',
        className
      )}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M10 4V2.5C10 2.22386 9.77614 2 9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5C2 9.77614 2.22386 10 2.5 10H4" stroke="currentColor" strokeWidth="1" />
          </svg>
          Email me
        </>
      )}
    </button>
  );
}
