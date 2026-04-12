// Универсальный wrapper — гарантирует центрирование на любом экране
export default function Section({ id, children, className = '', ref }) {
  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ width: '100%' }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1152px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        {children}
      </div>
    </section>
  );
}
