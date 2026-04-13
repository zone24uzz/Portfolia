import { useEffect, useRef } from 'react';

// Reduce particle count on low-end / mobile devices
const isMobile = () => window.innerWidth < 768;
const isLowEnd = () => navigator.hardwareConcurrency <= 4;

export default function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const mobile = isMobile();
    const lowEnd = isLowEnd();
    const COUNT = mobile ? 30 : lowEnd ? 50 : 70;
    const LINE_DIST = mobile ? 80 : 110;
    // Skip connection lines on mobile entirely
    const drawConnections = !mobile;

    const particles = [];

    // Pre-build particle pool — avoid class overhead in hot loop
    function makeParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 1.2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.45 + 0.1,
        color: Math.random() > 0.5 ? '0,212,255' : '168,85,247',
      };
    }

    for (let i = 0; i < COUNT; i++) particles.push(makeParticle());

    // Cache fillStyle strings to avoid string concat in hot loop
    const fillCache = new Map();
    function getFill(color, opacity) {
      const key = color + opacity.toFixed(2);
      if (!fillCache.has(key)) fillCache.set(key, `rgba(${color},${opacity.toFixed(2)})`);
      return fillCache.get(key);
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);

      // Draw connections first (no shadow)
      if (drawConnections) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < LINE_DIST * LINE_DIST) {
              const alpha = 0.06 * (1 - Math.sqrt(dist2) / LINE_DIST);
              ctx.strokeStyle = `rgba(0,212,255,${alpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw particles — shadowBlur only on desktop
      if (!mobile) {
        ctx.shadowBlur = 5;
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, makeParticle());
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }
        if (!mobile) ctx.shadowColor = `rgba(${p.color},0.7)`;
        ctx.fillStyle = getFill(p.color, p.opacity);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!mobile) ctx.shadowBlur = 0;

      animId = requestAnimationFrame(loop);
    }

    loop();

    // Debounced resize
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
      }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  );
}
