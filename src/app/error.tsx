'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
          color: '#cf6679',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        Error
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
        Что-то пошло не так
      </h1>

      <p
        style={{
          margin: '0 0 32px',
          fontSize: '16px',
          color: '#7c8084',
          maxWidth: '400px',
        }}
      >
        Произошла непредвиденная ошибка. Попробуйте обновить страницу.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => reset()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '10px',
            border: '1px solid #4a3535',
            background: 'rgba(207,102,121,.08)',
            color: '#cf9393',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
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
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 21h5v-5" />
          </svg>
          Попробовать снова
        </button>

        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '10px',
            border: '1px solid #2b2f34',
            background: 'transparent',
            color: '#a1a4a5',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all .2s ease',
          }}
        >
          На главную
        </a>
      </div>
    </div>
  )
}
