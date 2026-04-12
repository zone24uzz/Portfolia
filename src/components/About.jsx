import { useEffect, useRef } from 'react';

const techStack = [
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'JavaScript', icon: '🟡', color: '#f7df1e' },
  { name: 'Tailwind CSS', icon: '🎨', color: '#38bdf8' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'Node.js', icon: '🟢', color: '#68a063' },
  { name: 'Git', icon: '🔀', color: '#f05032' },
  { name: 'CSS / SCSS', icon: '💅', color: '#cc6699' },
  { name: 'Figma', icon: '🎭', color: '#a259ff' },
];

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
};

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full overflow-hidden"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', transform: 'translateY(-50%)' }} />

      <div style={wrap}>
        <div className="reveal text-center" style={{ marginBottom: '5rem' }}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-start" style={{ gap: '3rem' }}>

          {/* Bio */}
          <div className="reveal">
            <div className="glass rounded-3xl border border-white/5 relative overflow-hidden"
              style={{ padding: '2.5rem', boxShadow: '0 0 40px rgba(0,212,255,0.05)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, #00d4ff, transparent)' }} />
              <h3 className="font-bold text-white" style={{ fontSize: '1.375rem', marginBottom: '1.25rem' }}>
                Passionate about building <span className="text-cyan-400">great UX</span>
              </h3>
              <p className="text-slate-400 leading-relaxed" style={{ marginBottom: '1.25rem' }}>
                I'm a Frontend Developer with 3+ years of experience creating modern, responsive web applications.
                I specialize in React ecosystem and love turning complex problems into clean, intuitive interfaces.
              </p>
              <p className="text-slate-400 leading-relaxed" style={{ marginBottom: '2rem' }}>
                When I'm not coding, I'm exploring new design trends, contributing to open source,
                or experimenting with creative animations and micro-interactions.
              </p>
              <div className="flex flex-wrap" style={{ gap: '0.75rem' }}>
                {[['📍', 'Remote / Worldwide'], ['💼', 'Open to opportunities'], ['🎓', 'CS Graduate']].map(([icon, text]) => (
                  <span key={text} className="flex items-center glass border border-white/8 text-sm text-slate-400 rounded-full"
                    style={{ gap: '0.5rem', padding: '0.5rem 1rem' }}>
                    <span>{icon}</span> {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="reveal">
            <h3 className="font-semibold text-slate-300" style={{ fontSize: '1.125rem', marginBottom: '1.25rem' }}>Tech Stack</h3>
            <div className="grid grid-cols-2" style={{ gap: '0.75rem' }}>
              {techStack.map((tech, i) => (
                <div key={tech.name} data-hover
                  className="group glass border border-white/5 rounded-2xl flex items-center hover:border-white/15 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ padding: '0.875rem 1rem', gap: '0.75rem', transitionDelay: `${i * 40}ms` }}>
                  <span style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors text-sm">{tech.name}</span>
                  <div className="ml-auto w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                    style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
