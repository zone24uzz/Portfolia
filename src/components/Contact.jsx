import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const sectionRef = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

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
    padding: '0.875rem 1.125rem',
    color: 'white',
    background: focused === field ? 'rgba(0,212,255,0.04)' : 'rgba(255,255,255,0.03)',
    outline: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.3s',
    boxShadow: focused === field ? '0 0 20px rgba(0,212,255,0.08)' : 'none',
  });

  return (
    <section id="contact" ref={sectionRef} className="relative w-full overflow-hidden py-20 lg:py-28">
      <div className="absolute left-1/2 bottom-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-black mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 leading-relaxed mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-6 sm:gap-10">

          {/* Info */}
          <div className="reveal flex flex-col gap-4">
            <div className="glass border border-white/5 rounded-3xl p-6 sm:p-10">
              <h3 className="font-bold text-white text-lg sm:text-xl mb-6">Contact Info</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: '📧', label: 'Email', value: 'komron@example.com' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/komron' },
                  { icon: '🐙', label: 'GitHub', value: 'github.com/komron' },
                  { icon: '🌍', label: 'Location', value: 'Remote / Worldwide' },
                ].map(item => (
                  <div key={item.label} className="group flex items-center gap-4">
                    <div className="glass border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-white/15 transition-all duration-300 shrink-0 w-11 h-11 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-600 uppercase tracking-wider font-medium mb-0.5" style={{ fontSize: '0.7rem' }}>{item.label}</div>
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border border-white/5 rounded-3xl flex items-center gap-4 p-5">
              <div className="rounded-full bg-emerald-400 animate-pulse shrink-0 w-3 h-3"
                style={{ boxShadow: '0 0 10px #10b981' }} />
              <div>
                <div className="font-semibold text-white text-sm">Available for freelance</div>
                <div className="text-slate-500 text-xs mt-0.5">Response within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="glass border border-white/5 rounded-3xl p-6 sm:p-10 flex flex-col gap-5">
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-slate-500 uppercase tracking-wider font-semibold" style={{ fontSize: '0.7rem' }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    onFocus={() => setFocused(key)} onBlur={() => setFocused('')}
                    style={inputStyle(key)} required />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-500 uppercase tracking-wider font-semibold" style={{ fontSize: '0.7rem' }}>Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  style={{ ...inputStyle('message'), resize: 'none' }} required />
              </div>

              <button type="submit" disabled={sending || sent}
                className="btn-shimmer font-bold text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed py-4 text-sm sm:text-base mt-1"
                style={{
                  background: sent ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                  boxShadow: sent ? '0 0 30px rgba(16,185,129,0.3)' : '0 0 30px rgba(0,212,255,0.25)',
                }}>
                {sending ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : sent ? (
                  <span className="flex items-center justify-center gap-2">✅ Message Sent!</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">Send Message →</span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
