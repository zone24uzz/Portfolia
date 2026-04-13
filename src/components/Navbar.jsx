import { useState, useEffect, useCallback } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/5' : ''}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="text-lg sm:text-xl font-bold gradient-text" onClick={() => scrollTo('home')}>
          &lt;Komron.dev /&gt;
        </div>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}
                className="nav-link text-sm text-slate-400 hover:text-white transition-colors duration-300 font-medium tracking-wide py-1">
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo('Contact')}
          className="hidden md:block btn-shimmer border border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 rounded-full font-bold text-sm px-6 py-2.5">
          Hire Me
        </button>

        {/* Burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden glass border-t border-white/5 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4">
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium w-full text-left py-1">
                {link}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => scrollTo('Contact')}
              className="btn-shimmer border border-cyan-500/40 text-cyan-400 rounded-full font-bold text-sm px-6 py-2.5 mt-1">
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
