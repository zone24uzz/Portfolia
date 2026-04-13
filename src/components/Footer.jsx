const socials = [
  { icon: '🐙', label: 'GitHub', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,212,255,0.02), transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold gradient-text">&lt;Komron.dev /&gt;</div>

          <div className="flex items-center gap-3">
            {socials.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="glass border border-white/5 rounded-2xl flex items-center justify-center hover:border-cyan-500/30 hover:scale-110 transition-all duration-300 w-11 h-11 text-xl"
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                {s.icon}
              </a>
            ))}
          </div>

          <div className="text-xs sm:text-sm text-slate-600 text-center sm:text-right">
            © {new Date().getFullYear()} Komron Xidoyatov. Built with{' '}
            <span className="text-cyan-500">React</span> &{' '}
            <span className="text-purple-500">Tailwind</span>
          </div>
        </div>

        <div className="text-center border-t border-white/5 mt-8 pt-6">
          <p className="text-slate-700 tracking-wide text-xs">
            Designed & Developed with ❤️ — Crafting digital experiences that matter
          </p>
        </div>
      </div>
    </footer>
  );
}
