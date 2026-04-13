import { lazy, Suspense, memo } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-load below-fold sections
const ParticlesBg = lazy(() => import('./components/ParticlesBg'));
const About      = lazy(() => import('./components/About'));
const Skills     = lazy(() => import('./components/Skills'));
const Projects   = lazy(() => import('./components/Projects'));
const Contact    = lazy(() => import('./components/Contact'));
const Footer     = lazy(() => import('./components/Footer'));

// Static gradient mesh — memoized so it never re-renders
const GradientMesh = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
    <div className="absolute inset-0" style={{
      background: `
        radial-gradient(ellipse 80% 50% at 20% 10%, rgba(0,212,255,0.04) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.05) 0%, transparent 60%),
        radial-gradient(ellipse 40% 30% at 50% 50%, rgba(168,85,247,0.02) 0%, transparent 60%)
      `
    }} />
  </div>
));
GradientMesh.displayName = 'GradientMesh';

export default function App() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: '#020408' }}>
      <Cursor />

      <Suspense fallback={null}>
        <ParticlesBg />
      </Suspense>

      <GradientMesh />

      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
