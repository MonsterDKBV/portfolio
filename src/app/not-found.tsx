import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050506',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: "'Geist Mono',monospace",
          fontSize: '13px',
          letterSpacing: '.12em',
          color: '#9281f7',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        404 — Page Not Found
      </span>

      <h1
        style={{
          margin: '0 0 16px',
          fontFamily: "'Geist',system-ui,sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(32px, 5vw, 48px)',
          letterSpacing: '-.03em',
          color: '#ffffff',
        }}
      >
        Страница не найдена
      </h1>

      <p
        style={{
          margin: '0 0 32px',
          fontSize: '16px',
          color: '#7c8084',
          maxWidth: '360px',
        }}
      >
        Такой страницы не существует или она была перемещена.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 24px',
          borderRadius: '10px',
          border: '1px solid #2b2f34',
          background: 'rgba(146,129,247,.08)',
          color: '#baa7ff',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'all .2s ease',
        }}
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        На главную
      </Link>
    </div>
  )
}
