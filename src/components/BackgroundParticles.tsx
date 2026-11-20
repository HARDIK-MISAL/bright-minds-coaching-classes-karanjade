import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimer: number | null = null;
    const onResize = () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
    };
    window.addEventListener('resize', onResize, { passive: true });

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.8 + 1;
        this.color = Math.random() > 0.4 ? '#E11D48' : '#B51F60';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    // Responsive particle count: lighter on mobile to save CPU & battery
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 16 : 26;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animId: number = 0;
    const maxDistSq = 120 * 120; // 14400 - avoids expensive Math.hypot/sqrt for distant pairs

    function animate() {
      if (document.hidden) {
        animId = 0;
        return;
      }

      ctx!.clearRect(0, 0, width, height);

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          // Fast rejection before calling expensive Math.sqrt
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(181, 31, 96, ${0.14 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.6;
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        }
      }

      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        p.update();
        p.draw(ctx!);
      }

      animId = requestAnimationFrame(animate);
    }

    const startAnimation = () => {
      if (!animId && !document.hidden) {
        animId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    startAnimation();

    return () => {
      stopAnimation();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 will-change-transform"
    />
  );
};
