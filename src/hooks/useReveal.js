import { useEffect, useRef } from 'react';

/**
 * Observes .reveal elements inside the ref'd section and adds .visible when in view.
 * Also triggers skill-bar width animations if present.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar').forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 200);
          });
          // Unobserve after triggering — no need to keep watching
          observer.unobserve(e.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    section.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
