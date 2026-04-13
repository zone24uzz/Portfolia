import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const socials = [
  { Icon: FaGithub,    label: 'GitHub',    href: '#', color: '#ffffff' },
  { Icon: FaLinkedin,  label: 'LinkedIn',  href: '#', color: '#0a66c2' },
  { Icon: FaTwitter,   label: 'Twitter',   href: '#', color: '#1da1f2' },
  { Icon: FaInstagram, label: 'Instagram', href: '#', color: '#e1306c' },
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
            {socials.map(({ Icon, label, href, color }) => (
              <a key={label} href={href} aria-label={label}
                className="glass border border-white/5 rounded-2xl flex items-center justify-center hover:border-cyan-500/30 hover:scale-110 transition-all duration-300 w-11 h-11"
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 15px ${color}40`; e.currentTarget.style.borderColor = `${color}50`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = ''; }}>
                <Icon className="text-lg" style={{ color }} />
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
          <p className="text-slate-700 tracking-wide text-xs inline-flex items-center gap-1.5">
            Designed & Developed with <FaHeart className="text-rose-500" /> — Crafting digital experiences that matter
          </p>
        </div>
      </div>
    </footer>
  );
}
