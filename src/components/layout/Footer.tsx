export function Footer() {
  return (
    <footer
      className="site-footer sect"
      style={{
        borderTop: '1px solid #17191c',
        padding: '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '14px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <span
        style={{
          fontFamily: "'Geist Mono',monospace",
          fontSize: '13.5px',
          color: '#82868a',
        }}
      >
        © 2025 · Даниэл Кубанычбеков
      </span>
      <span
        style={{
          fontFamily: "'Geist Mono',monospace",
          fontSize: '13.5px',
          color: '#82868a',
        }}
      >
        Frontend Developer · React / TypeScript / Next.js
      </span>
    </footer>
  )
}
