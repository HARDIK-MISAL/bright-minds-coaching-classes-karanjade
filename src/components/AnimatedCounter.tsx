import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  isRange?: boolean;
  rangeMin?: number;
  rangeMax?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  isRange = false,
  rangeMin = 8,
  rangeMax = 15,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (isRange) {
      return `${prefix}${rangeMin}–${rangeMax}${suffix}`;
    }
    return `${prefix}${start.toFixed(decimals)}${suffix}`;
  });

  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (isRange) {
        setDisplayValue(`${prefix}${rangeMin}–${rangeMax}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${end.toFixed(decimals)}${suffix}`);
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, start, duration, decimals, prefix, suffix, isRange, rangeMin, rangeMax]);

  const startAnimation = () => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);

      if (isRange) {
        const currentMin = Math.round(start + (rangeMin - start) * easeOut);
        const currentMax = Math.round(start + (rangeMax - start) * easeOut);
        setDisplayValue(`${prefix}${currentMin}–${currentMax}${suffix}`);
      } else {
        const currentVal = start + (end - start) * easeOut;
        setDisplayValue(`${prefix}${currentVal.toFixed(decimals)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (isRange) {
          setDisplayValue(`${prefix}${rangeMin}–${rangeMax}${suffix}`);
        } else {
          setDisplayValue(`${prefix}${end.toFixed(decimals)}${suffix}`);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
