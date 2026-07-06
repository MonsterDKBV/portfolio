export default function Loading() {
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
      }}
    >
      {/* Animated loader */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          marginBottom: '24px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#9281f7',
              animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>

      <span
        style={{
          fontFamily: "'Geist Mono',monospace",
          fontSize: '13px',
          letterSpacing: '.08em',
          color: '#6b6f72',
          textTransform: 'uppercase',
        }}
      >
        Загрузка...
      </span>

      <style>
        {`
          @keyframes pulse {
            0%, 80%, 100% {
              opacity: 0.3;
              transform: scale(0.8);
            }
            40% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  )
}
