import { useEffect, useRef } from 'react';

// Don't render custom cursor on touch devices
const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

export default function Cursor() {
  const diamondRef = useRef(null);
  const trailsRef = useRef([]);
  const posRef = useRef({ x: -100, y: -100 });
  const smoothRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (isTouch()) return; // skip on mobile/tablet touch screens

    const diamond = diamondRef.current;
    const trails = trailsRef.current;

    // Ring buffer for trail history
    const HIST = 8;
    const history = new Array(HIST).fill(null).map(() => ({ x: -100, y: -100 }));
    let histIdx = 0;

    const onMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        diamond.style.opacity = '1';
      }
    };

    // Use event delegation instead of binding to every element
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        diamond.classList.add('cursor-hover');
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        diamond.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    const animate = () => {
      const ease = 0.13;
      smoothRef.current.x += (posRef.current.x - smoothRef.current.x) * ease;
      smoothRef.current.y += (posRef.current.y - smoothRef.current.y) * ease;

      const sx = smoothRef.current.x;
      const sy = smoothRef.current.y;

      diamond.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%) rotate(45deg)`;

      history[histIdx % HIST] = { x: sx, y: sy };
      histIdx++;

      for (let i = 0; i < trails.length; i++) {
        const t = trails[i];
        if (!t) continue;
        const step = Math.floor((i + 1) * (HIST / trails.length));
        const past = history[(histIdx - step + HIST * 10) % HIST];
        const scale = 1 - (i + 1) * 0.12;
        const opacity = 0.5 - i * 0.07;
        t.style.transform = `translate(${past.x}px, ${past.y}px) translate(-50%, -50%) rotate(45deg) scale(${scale})`;
        t.style.opacity = opacity;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch()) return null;

  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          ref={el => { trailsRef.current[i] = el; }}
          className="cursor-trail"
          style={{ zIndex: 9997 - i, opacity: 0 }}
        />
      ))}
      <div ref={diamondRef} className="cursor-diamond" style={{ opacity: 0 }} />
    </>
  );
}
