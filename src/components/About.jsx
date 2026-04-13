import { useReveal } from '../hooks/useReveal';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiCss3 } from 'react-icons/si';

const techStack = [
  { name: 'React',       Icon: FaReact,       color: '#61dafb' },
  { name: 'JavaScript',  Icon: SiJavascript,  color: '#f7df1e' },
  { name: 'Tailwind CSS',Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Next.js',     Icon: SiNextdotjs,   color: '#ffffff' },
  { name: 'Node.js',     Icon: FaNodeJs,      color: '#68a063' },
  { name: 'Git',         Icon: FaGitAlt,      color: '#f05032' },
  { name: 'CSS / SCSS',  Icon: SiCss3,        color: '#cc6699' },
  { name: 'Figma',       Icon: FaFigma,       color: '#a259ff' },
];

const badges = [
  { Icon: FaMapMarkerAlt, text: 'Remote / Worldwide' },
  { Icon: FaBriefcase,    text: 'Open to opportunities' },
  { Icon: FaGraduationCap,text: 'CS Graduate' },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" ref={sectionRef} className="relative w-full overflow-hidden py-20 lg:py-28">
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="font-black mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-8 lg:gap-12">

          {/* Bio */}
          <div className="reveal">
            <div className="glass rounded-3xl border border-white/5 relative overflow-hidden p-6 sm:p-10"
              style={{ boxShadow: '0 0 40px rgba(0,212,255,0.05)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, #00d4ff, transparent)' }} />
              <h3 className="font-bold text-white text-lg sm:text-xl mb-4">
                Passionate about building <span className="text-cyan-400">great UX</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-4">
                I'm a Frontend Developer with 3+ years of experience creating modern, responsive web applications.
                I specialize in React ecosystem and love turning complex problems into clean, intuitive interfaces.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-7">
                When I'm not coding, I'm exploring new design trends, contributing to open source,
                or experimenting with creative animations and micro-interactions.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {badges.map(({ Icon, text }) => (
                  <span key={text} className="flex items-center gap-2 glass border border-white/8 text-xs sm:text-sm text-slate-400 rounded-full px-3 py-2">
                    <Icon className="text-cyan-400 shrink-0" /> {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="reveal">
            <h3 className="font-semibold text-slate-300 text-base sm:text-lg mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {techStack.map(({ name, Icon, color }, i) => (
                <div key={name} data-hover
                  className="group glass border border-white/5 rounded-2xl flex items-center gap-3 hover:border-white/15 transition-all duration-300 hover:scale-105 cursor-default px-3 py-3 sm:px-4"
                  style={{ transitionDelay: `${i * 40}ms` }}>
                  <Icon className="text-xl sm:text-2xl shrink-0" style={{ color }} />
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors text-xs sm:text-sm">{name}</span>
                  <div className="ml-auto w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
