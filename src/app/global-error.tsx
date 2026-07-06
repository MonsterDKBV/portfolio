'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050506',
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span
          style={{
            fontSize: '13px',
            letterSpacing: '.12em',
            color: '#cf6679',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Critical Error
        </span>

        <h1
          style={{
            margin: '0 0 16px',
            fontWeight: 600,
            fontSize: '32px',
            letterSpacing: '-.02em',
            color: '#ffffff',
          }}
        >
          Критическая ошибка
        </h1>

        <p
          style={{
            margin: '0 0 32px',
            fontSize: '16px',
            color: '#7c8084',
            maxWidth: '400px',
          }}
        >
          Приложение не может продолжить работу. Попробуйте обновить страницу.
        </p>

        <button
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            borderRadius: '10px',
            border: '1px solid #4a3535',
            background: 'rgba(207,102,121,.08)',
            color: '#cf9393',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Обновить страницу
        </button>
      </body>
    </html>
  )
}
