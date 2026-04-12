import { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Creative Coder'];

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
  paddingTop: '8rem',
  paddingBottom: '5rem',
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1)); i++;
        if (i > current.length) { clearInterval(interval); setTimeout(() => setTyping(false), 2000); }
      } else {
        setDisplayed(current.slice(0, i - 1)); i--;
        if (i < 0) { clearInterval(interval); setRoleIndex(p => (p + 1) % roles.length); setTyping(true); }
      }
    }, typing ? 80 : 50);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div style={wrap}>
        <div className="grid md:grid-cols-2 items-center" style={{ gap: '4rem' }}>

          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="animate-fadeInUp opacity-0 delay-100">
              <span className="inline-flex items-center gap-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-medium"
                style={{ padding: '0.5rem 1rem' }}>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for work
              </span>
            </div>

            <h1 className="animate-fadeInUp opacity-0 delay-200 font-black leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Hi, I'm <span className="gradient-text text-glow-blue">Komron</span>
            </h1>

            <div className="animate-fadeInUp opacity-0 delay-300 font-semibold text-slate-300 flex items-center"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)', gap: '0.5rem', height: '2.5rem' }}>
              <span className="text-cyan-400">&lt;</span>
              <span>{displayed}</span>
              <span className="animate-blink text-cyan-400">|</span>
              <span className="text-cyan-400">/&gt;</span>
            </div>

            <p className="animate-fadeInUp opacity-0 delay-400 text-slate-400 leading-relaxed"
              style={{ fontSize: '1.125rem', maxWidth: '32rem' }}>
              I craft pixel-perfect, high-performance web experiences with modern technologies.
              Turning complex ideas into elegant, interactive interfaces.
            </p>

            <div className="animate-fadeInUp opacity-0 delay-500 flex flex-wrap" style={{ gap: '1rem', paddingTop: '0.5rem' }}>
              <button onClick={() => scrollTo('projects')}
                className="btn-shimmer group text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  boxShadow: '0 0 30px rgba(0,212,255,0.3)',
                }}>
                View Projects
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
              </button>
              <button onClick={() => scrollTo('contact')}
                className="btn-shimmer text-slate-300 border border-white/20 rounded-full font-bold hover:text-white hover:border-cyan-500/60 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                Contact Me
              </button>
            </div>

            <div className="animate-fadeInUp opacity-0 delay-600 flex border-t border-white/5"
              style={{ gap: '2.5rem', paddingTop: '1.5rem' }}>
              {[['3+', 'Years Exp.'], ['50+', 'Projects'], ['20+', 'Clients']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-black gradient-text" style={{ fontSize: '1.5rem' }}>{num}</div>
                  <div className="text-slate-500" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-fadeInRight opacity-0 delay-300 flex justify-center" style={{ padding: '2rem 0' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-spin-slow"
                style={{ background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #a855f7, transparent, #00d4ff)', padding: '2px', borderRadius: '50%' }}>
                <div className="w-full h-full rounded-full" style={{ background: '#020408' }} />
              </div>
              <div className="relative rounded-full glass border border-white/10 flex items-center justify-center animate-float"
                style={{ width: '20rem', height: '20rem', boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(124,58,237,0.1)' }}>
                <div style={{ fontSize: '6rem' }} className="select-none">👨‍💻</div>
              </div>
              <div className="absolute glass border border-cyan-500/20 rounded-2xl text-cyan-400 font-semibold animate-float"
                style={{ top: '-1rem', right: '-1rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', animationDelay: '1s' }}>React ⚛️</div>
              <div className="absolute glass border border-white/10 rounded-2xl text-slate-300 font-semibold animate-float"
                style={{ top: '50%', right: '-2.5rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', animationDelay: '0.5s' }}>Tailwind 🎨</div>
              <div className="absolute glass border border-yellow-500/20 rounded-2xl text-yellow-400 font-semibold animate-float"
                style={{ bottom: '-1rem', left: '-1rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', animationDelay: '2s' }}>JavaScript 🟡</div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-cyan-500/50 to-transparent" />
      </div>
    </section>
  );
}
