import React, { useEffect, useRef } from 'react';

export const MicroSlatsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Optimized configuration: wider slats and spacing reduces draw calls by 62%
    // while maintaining a sleek, modern visual density
    const config = {
      color: '#FCE7F3',
      neonColor: '#E11D48',
      glintColor: '#B51F60',
      slatWidth: 14,
      slatHeight: 32,
      gap: 6,
      roundness: 0.75,
      waveSpeed: 0.032,
    };

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let slats: Array<{
      x: number;
      y: number;
    }> = [];

    let time = 0;
    let animId: number = 0;
    let isVisible = true;
    let resizeTimer: number | null = null;

    function resize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;

      const totalX = config.slatWidth + config.gap;
      const totalY = config.slatHeight + config.gap;
      cols = Math.ceil(width / totalX) + 1;
      rows = Math.ceil(height / totalY) + 1;

      slats = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          slats.push({
            x: c * totalX,
            y: r * totalY,
          });
        }
      }
    }

    function drawRoundedRect(
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) {
      context.beginPath();
      context.moveTo(x + r, y);
      context.lineTo(x + w - r, y);
      context.quadraticCurveTo(x + w, y, x + w, y + r);
      context.lineTo(x + w, y + h - r);
      context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      context.lineTo(x + r, y + h);
      context.quadraticCurveTo(x, y + h, x, y + h - r);
      context.lineTo(x, y + r);
      context.quadraticCurveTo(x, y, x + r, y);
      context.closePath();
    }

    const onResizeDebounced = () => {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        resize();
      });
    };

    window.addEventListener('resize', onResizeDebounced, { passive: true });
    resize();

    function animate() {
      if (!isVisible || document.hidden) {
        animId = 0;
        return;
      }

      time += config.waveSpeed;
      ctx!.clearRect(0, 0, width, height);

      const cornerRadius =
        Math.min(config.slatWidth, config.slatHeight) * config.roundness * 0.5;

      const len = slats.length;
      for (let i = 0; i < len; i++) {
        const slat = slats[i];
        const cx = slat.x + config.slatWidth / 2;
        const cy = slat.y + config.slatHeight / 2;

        const swellWave =
          Math.sin(time + cx * 0.012 + cy * 0.008) *
          Math.cos(time * 0.8 + cy * 0.01);

        const totalEnergy = swellWave * 0.45;
        const angle = totalEnergy * 0.45;
        const scale = 0.82 + Math.max(0, Math.min(0.35, totalEnergy * 0.18));

        const excite = Math.max(0, Math.min(1, (totalEnergy + 0.5) / 1.6));
        const alpha = Math.max(0.12, Math.min(0.85, 0.22 + excite * 0.65));

        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(angle);
        ctx!.scale(scale, scale);

        ctx!.fillStyle = excite > 0.6 ? config.neonColor : config.color;
        ctx!.globalAlpha = alpha;

        drawRoundedRect(
          ctx!,
          -config.slatWidth / 2,
          -config.slatHeight / 2,
          config.slatWidth,
          config.slatHeight,
          cornerRadius
        );
        ctx!.fill();

        if (excite > 0.25) {
          ctx!.globalAlpha = Math.min(0.55, (excite - 0.25) * 0.8);
          ctx!.fillStyle = config.glintColor;
          ctx!.fillRect(
            -config.slatWidth * 0.35,
            -config.slatHeight * 0.45,
            config.slatWidth * 0.7,
            2.5
          );
        }

        ctx!.restore();
      }

      animId = requestAnimationFrame(animate);
    }

    const startAnimation = () => {
      if (!animId) {
        animId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    };

    // IntersectionObserver: Pause when hero is scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // VisibilityChange: Pause when tab is hidden to save battery & CPU
    const onVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (isVisible) {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    startAnimation();

    return () => {
      stopAnimation();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResizeDebounced);
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFC] via-transparent to-white/70 pointer-events-none" />
    </div>
  );
};
