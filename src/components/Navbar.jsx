import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/5' : ''}`}
      style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
    >
      <div style={wrap} className="flex items-center justify-between">
        <div className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scrollTo('home')}>
          &lt;Komron.dev /&gt;
        </div>

        <ul className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}
                className="nav-link text-sm text-slate-400 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                style={{ padding: '0.25rem 0' }}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo('Contact')}
          className="hidden md:block btn-shimmer border border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 rounded-full font-bold text-sm"
          style={{ padding: '0.625rem 2rem' }}>
          Hire Me
        </button>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden glass border-t border-white/5 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul style={{ ...wrap, paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium w-full text-left"
                style={{ padding: '0.25rem 0' }}>
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
