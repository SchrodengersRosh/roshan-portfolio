'use client';

import { useState, useEffect } from 'react';
import { formatTime } from '@/lib/utils';

interface LocalTimeProps {
  className?: string;
}

export function LocalTime({ className }: LocalTimeProps) {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () => {
      setTime(formatTime(new Date(), 'Asia/Kolkata'));
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      Bengaluru&nbsp;&middot;&nbsp;{time} IST
    </span>
  );
}
