import { useEffect, useRef } from 'react';

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

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
};

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.skill-bar').forEach(bar => {
              setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative w-full overflow-hidden"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', transform: 'translateY(-50%)' }} />

      <div style={wrap}>
        <div className="reveal text-center" style={{ marginBottom: '5rem' }}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">What I Do</span>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem' }}>
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Category cards */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4" style={{ gap: '1.25rem', marginBottom: '3rem' }}>
          {cards.map((card) => (
            <div key={card.title} data-hover
              className="group glass border border-white/5 rounded-3xl text-center hover:border-white/15 transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden"
              style={{ padding: '1.75rem 1.25rem' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                style={{ background: `radial-gradient(circle at center, ${card.color}10, transparent)` }} />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 className="font-bold text-white" style={{ marginBottom: '0.5rem' }}>{card.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed" style={{ fontSize: '0.75rem' }}>{card.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="reveal glass border border-white/5 rounded-3xl" style={{ padding: '2.5rem 3rem' }}>
          <h3 className="font-bold text-white" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Proficiency</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center" style={{ marginBottom: '0.75rem' }}>
                  <div className="flex items-center" style={{ gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                    <span className="font-medium text-slate-300 text-sm">{skill.name}</span>
                  </div>
                  <span className="font-bold text-sm" style={{ color: skill.color }}>{skill.level}%</span>
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
