'use client'

const techItems = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'SCSS',
  'Redux Toolkit',
  'RTK Query',
  'Zustand',
  'Framer Motion',
  'Vite',
  'Axios',
  'Git',
  'GitHub',
  'Figma',
  'Responsive UI',
  'Forms',
  'API integration',
]

function TechLine() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '44px',
        paddingRight: '44px',
        fontFamily: "'Geist Mono',monospace",
        fontSize: '13px',
        color: '#6b6f72',
        letterSpacing: '.02em',
        alignItems: 'center',
      }}
    >
      {techItems.map((item, i) => (
        <span key={i} style={{ display: 'flex', gap: '44px', alignItems: 'center' }}>
          <span>{item}</span>
          <span style={{ color: '#9281f7' }}>/</span>
        </span>
      ))}
    </div>
  )
}

export function TechTicker() {
  return (
    <div
      style={{
        position: 'relative',
        borderTop: '1px solid #17191c',
        borderBottom: '1px solid #17191c',
        padding: '20px 0',
        overflow: 'hidden',
        background: 'linear-gradient(180deg,#050506,#000)',
      }}
    >
      <div
        className="marquee-track animate-marquee"
        style={{
          display: 'flex',
          gap: 0,
          width: 'max-content',
        }}
      >
        <TechLine />
        <div aria-hidden="true">
          <TechLine />
        </div>
      </div>
    </div>
  )
}
