const socials = [
  { icon: '🐙', label: 'GitHub', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
];

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,212,255,0.02), transparent)' }} />

      <div style={wrap} className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: '2rem' }}>
          <div className="text-xl font-bold gradient-text">&lt;Komron.dev /&gt;</div>

          <div className="flex items-center" style={{ gap: '1rem' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="glass border border-white/5 rounded-2xl flex items-center justify-center hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                style={{ width: '3rem', height: '3rem', fontSize: '1.25rem', boxShadow: 'none' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                {s.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Komron Xidoyatov. Built with{' '}
            <span className="text-cyan-500">React</span> &{' '}
            <span className="text-purple-500">Tailwind</span>
          </div>
        </div>

        <div className="text-center border-t border-white/5" style={{ marginTop: '2.5rem', paddingTop: '2rem' }}>
          <p className="text-slate-700 tracking-wide" style={{ fontSize: '0.75rem' }}>
            Designed & Developed with ❤️ — Crafting digital experiences that matter
          </p>
        </div>
      </div>
    </footer>
  );
}
