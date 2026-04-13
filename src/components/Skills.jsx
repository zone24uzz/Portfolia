import { useReveal } from '../hooks/useReveal';

const skills = [
  { name: 'React / Next.js', level: 92, color: '#61dafb', icon: '⚛️' },
  { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e', icon: '🟡' },
  { name: 'Tailwind CSS', level: 90, color: '#38bdf8', icon: '🎨' },
  { name: 'CSS / Animations', level: 88, color: '#a855f7', icon: '✨' },
  { name: 'Node.js / REST API', level: 75, color: '#68a063', icon: '🟢' },
  { name: 'Figma / UI Design', level: 80, color: '#a259ff', icon: '🎭' },
];

const cards = [
  { title: 'Frontend', icon: '🖥️', desc: 'React, Next.js, Vue, JavaScript', color: '#00d4ff' },
  { title: 'Styling', icon: '🎨', desc: 'Tailwind, SCSS, Framer Motion', color: '#a855f7' },
  { title: 'Tools', icon: '🛠️', desc: 'Git, Vite, Webpack, Figma', color: '#7c3aed' },
  { title: 'Backend', icon: '⚙️', desc: 'Node.js, Express, REST, GraphQL', color: '#10b981' },
];

export default function Skills() {
  const sectionRef = useReveal();

  return (
    <section id="skills" ref={sectionRef} className="relative w-full overflow-hidden py-20 lg:py-28">
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">What I Do</span>
          <h2 className="font-black mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Category cards */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-8">
          {cards.map((card) => (
            <div key={card.title} data-hover
              className="group glass border border-white/5 rounded-3xl text-center hover:border-white/15 transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden p-5 sm:p-7">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{ background: `radial-gradient(circle at center, ${card.color}10, transparent)` }} />
              <div className="text-3xl sm:text-4xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">{card.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed text-xs">{card.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="reveal glass border border-white/5 rounded-3xl p-6 sm:p-10">
          <h3 className="font-bold text-white text-lg sm:text-xl mb-8">Proficiency</h3>
          <div className="flex flex-col gap-6 sm:gap-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl">{skill.icon}</span>
                    <span className="font-medium text-slate-300 text-xs sm:text-sm">{skill.name}</span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: '6px', background: 'rgba(255,255,255,0.05)' }}>
                  <div className="skill-bar" data-level={skill.level}
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
