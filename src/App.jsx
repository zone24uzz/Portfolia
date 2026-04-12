import Cursor from './components/Cursor';
import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: '#020408' }}>
      {/* Custom cursor */}
      <Cursor />

      {/* Animated particles background */}
      <ParticlesBg />

      {/* Global gradient mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 10%, rgba(0,212,255,0.04) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 50% 50%, rgba(168,85,247,0.02) 0%, transparent 60%)
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
