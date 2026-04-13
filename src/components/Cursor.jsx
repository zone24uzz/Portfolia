import { useEffect, useRef } from 'react';

export default function Cursor() {
  const diamondRef = useRef(null);
  const trailsRef = useRef([]);
  const posRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isHoverRef = useRef(false);

  useEffect(() => {
    const diamond = diamondRef.current;
    const trails = trailsRef.current;

    // Trail positions ring buffer
    const history = Array(8).fill({ x: 0, y: 0 });
    let histIdx = 0;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = () => {
      isHoverRef.current = true;
      diamond.classList.add('cursor-hover');
    };

    const onMouseLeave = () => {
      isHoverRef.current = false;
      diamond.classList.remove('cursor-hover');
    };

    const bindInteractables = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    bindInteractables();

    // Re-bind on DOM changes (dynamic elements)
    const mo = new MutationObserver(bindInteractables);
    mo.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      const ease = 0.14;
      smoothRef.current.x += (posRef.current.x - smoothRef.current.x) * ease;
      smoothRef.current.y += (posRef.current.y - smoothRef.current.y) * ease;

      const sx = smoothRef.current.x;
      const sy = smoothRef.current.y;

      // Main diamond
      diamond.style.left = sx + 'px';
      diamond.style.top = sy + 'px';

      // Record history for trails
      history[histIdx % history.length] = { x: sx, y: sy };
      histIdx++;

      // Position each trail dot with staggered history
      trails.forEach((t, i) => {
        if (!t) return;
        const step = Math.floor((i + 1) * (history.length / trails.length));
        const past = history[(histIdx - step + history.length * 10) % history.length];
        t.style.left = past.x + 'px';
        t.style.top = past.y + 'px';
        const scale = 1 - (i + 1) * 0.12;
        const opacity = 0.55 - i * 0.07;
        t.style.transform = `translate(-50%, -50%) rotate(45deg) scale(${scale})`;
        t.style.opacity = opacity;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          className="cursor-trail"
          style={{ zIndex: 9997 - i }}
        />
      ))}

      {/* Main diamond */}
      <div ref={diamondRef} className="cursor-diamond" />
    </>
  );
}
