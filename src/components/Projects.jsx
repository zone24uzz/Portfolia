import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    title: 'Nexcent',
    desc: 'Корпоративный сайт для частной компании. Современный дизайн, чистая вёрстка и плавные анимации.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#00d4ff', emoji: '🏢',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(21,93,252,0.15))',
    demo: 'https://nexcent-ten-pi.vercel.app/',
    note: 'Нет респонсива для телефонов',
  },
  {
    title: 'View-Tube',
    desc: 'Клон YouTube с поиском видео, карточками каналов и адаптивным интерфейсом в стиле оригинала.',
    tags: ['React', 'YouTube API', 'CSS'],
    color: '#f43f5e', emoji: '▶️',
    gradient: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(220,38,38,0.15))',
    demo: 'https://you-tube-lime.vercel.app/',
    note: 'Нет респонсива для телефонов',
  },
  {
    title: 'Foodi',
    desc: 'Лендинг для ресторана с меню, акциями и формой бронирования. Аппетитный дизайн и анимации.',
    tags: ['React', 'Tailwind', 'JavaScript'],
    color: '#f59e0b', emoji: '🍔',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))',
    demo: 'https://foodi-lemon-one.vercel.app/',
    note: 'Нет респонсива для телефонов',
  },
  {
    title: 'Mars Market',
    desc: 'Полноценный E-Commerce магазин с каталогом товаров, корзиной и оформлением заказа.',
    tags: ['React', 'Redux', 'Tailwind'],
    color: '#10b981', emoji: '🛒',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))',
    demo: 'https://mars-market-ashen.vercel.app/',
    note: 'Нет респонсива для телефонов',
  },
];

export default function Projects() {
  const sectionRef = useReveal();

  return (
    <section id="projects" ref={sectionRef} className="relative w-full overflow-hidden py-20 lg:py-28">
      <div className="absolute left-1/2 top-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="font-black mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 leading-relaxed mt-4 max-w-lg mx-auto text-sm sm:text-base">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, i) => (
            <div key={project.title}
              className="reveal group relative glass border border-white/5 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:scale-[1.02] cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}>

              {/* Visual */}
              <div className="relative flex items-center justify-center overflow-hidden"
                style={{ height: 'clamp(10rem, 25vw, 14rem)', background: project.gradient }}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${project.color}20 1px, transparent 1px), linear-gradient(90deg, ${project.color}20 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                  }} />
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-500 select-none"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>{project.emoji}</span>

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="btn-shimmer flex items-center gap-2 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 px-6 py-3 text-sm"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`, boxShadow: `0 0 20px ${project.color}40` }}>
                    🚀 Live Demo
                  </a>
                  <span className="text-white/40 tracking-wide" style={{ fontSize: '0.7rem' }}>
                    ⚠️ {project.note}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <h3 className="font-bold text-white text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="glass rounded-full font-semibold text-xs px-3 py-1.5"
                      style={{ color: project.color, borderColor: `${project.color}30`, border: '1px solid' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 px-5 py-2.5 text-sm"
                  style={{ color: project.color, border: `1px solid ${project.color}50`, background: `${project.color}10`, boxShadow: `0 0 12px ${project.color}20` }}>
                  🚀 Live Demo
                </a>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
