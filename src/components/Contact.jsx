import { useEffect, useRef, useState } from 'react';

const wrap = {
  width: '100%',
  maxWidth: '1152px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  const inputStyle = (field) => ({
    width: '100%',
    border: `1px solid ${focused === field ? 'rgba(0,212,255,0.6)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '1rem',
    padding: '1rem 1.25rem',
    color: 'white',
    background: focused === field ? 'rgba(0,212,255,0.04)' : 'rgba(255,255,255,0.03)',
    outline: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.3s',
    boxShadow: focused === field ? '0 0 20px rgba(0,212,255,0.08)' : 'none',
  });

  return (
    <section id="contact" ref={sectionRef} className="relative w-full overflow-hidden"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div className="absolute left-1/2 bottom-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', transform: 'translateX(-50%)' }} />

      <div style={wrap}>
        <div className="reveal text-center" style={{ marginBottom: '5rem' }}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '0.75rem' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 leading-relaxed" style={{ marginTop: '1rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 items-start" style={{ gap: '2.5rem' }}>

          {/* Info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass border border-white/5 rounded-3xl" style={{ padding: '2.5rem' }}>
              <h3 className="font-bold text-white" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Contact Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '📧', label: 'Email', value: 'komron@example.com' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/komron' },
                  { icon: '🐙', label: 'GitHub', value: 'github.com/komron' },
                  { icon: '🌍', label: 'Location', value: 'Remote / Worldwide' },
                ].map(item => (
                  <div key={item.label} className="group flex items-center" style={{ gap: '1rem' }}>
                    <div className="glass border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-white/15 transition-all duration-300 shrink-0"
                      style={{ width: '3rem', height: '3rem', fontSize: '1.25rem' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-600 uppercase tracking-wider font-medium" style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border border-white/5 rounded-3xl flex items-center" style={{ padding: '1.5rem', gap: '1rem' }}>
              <div className="rounded-full bg-emerald-400 animate-pulse shrink-0"
                style={{ width: '0.75rem', height: '0.75rem', boxShadow: '0 0 10px #10b981' }} />
              <div>
                <div className="font-semibold text-white text-sm">Available for freelance</div>
                <div className="text-slate-500" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Response within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="glass border border-white/5 rounded-3xl"
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.7rem', color: 'rgb(100,116,139)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    onFocus={() => setFocused(key)} onBlur={() => setFocused('')}
                    style={inputStyle(key)} required />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', color: 'rgb(100,116,139)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  style={{ ...inputStyle('message'), resize: 'none' }} required />
              </div>

              <button type="submit" disabled={sending || sent}
                className="btn-shimmer font-bold text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  padding: '1.125rem',
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                  background: sent ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  boxShadow: sent ? '0 0 30px rgba(16,185,129,0.3)' : '0 0 30px rgba(0,212,255,0.25)',
                }}>
                {sending ? (
                  <span className="flex items-center justify-center" style={{ gap: '0.75rem' }}>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : sent ? (
                  <span className="flex items-center justify-center" style={{ gap: '0.5rem' }}>✅ Message Sent!</span>
                ) : (
                  <span className="flex items-center justify-center" style={{ gap: '0.5rem' }}>Send Message →</span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
