import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  distance?: number;
  id?: string;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  distance = 32,
  id,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Graceful fallback for prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setHasEntered(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      id={id}
      ref={containerRef}
      style={{
        transitionDelay: `${delay}ms`,
        transform: hasEntered ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
      }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        hasEntered
          ? 'opacity-100'
          : 'opacity-0 motion-reduce:opacity-100 motion-reduce:transform-none'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
