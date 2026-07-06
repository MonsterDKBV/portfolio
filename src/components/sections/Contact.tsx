'use client'

import { useEffect, useRef, useState } from 'react'

const contacts = [
  {
    label: 'Telegram',
    href: 'https://t.me/DanieL_KBV',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.9 4.3l-3.3 15.6c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.15L17.4 6.3c.4-.36-.09-.56-.63-.2L6.5 12.6l-4.6-1.44c-1-.31-1.02-1 .21-1.48L20.6 2.9c.84-.31 1.57.2 1.3 1.4z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=996709460702',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:mr.daniel.kv@gmail.com',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={3} y={5} width={18} height={14} rx={2} />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DanielKBV',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/DanielKBV',
    icon: (
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={3} y={3} width={18} height={18} rx={5} />
        <circle cx={12} cy={12} r={3.6} />
        <circle cx={17.4} cy={6.6} r={1} fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

function ContactButton({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="contact-link"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        color: '#f0f0f0',
        fontSize: '14px',
        fontWeight: 500,
        padding: '12px 20px',
        borderRadius: '11px',
        border: `1px solid ${hovered ? '#4a4560' : '#2b2f34'}`,
        background: hovered ? 'rgba(146,129,247,.12)' : 'rgba(255,255,255,.025)',
        transition: 'all .25s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          color: hovered ? '#baa7ff' : '#a1a4a5',
          display: 'inline-flex',
          transition: 'color .25s',
        }}
      >
        {icon}
      </span>
      {label}
    </a>
  )
}

export function Contact() {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const el = revealRef.current
    if (!el) return

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement)
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      )
      io.observe(el)
      return () => io.unobserve(el)
    } else {
      reveal(el)
    }
  }, [])

  return (
    <section
      id="contact"
      className="sect"
      style={{
        position: 'relative',
        padding: '100px 40px 120px',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(35,38,42,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(35,38,42,.4) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 70% 80% at 50% 50%,#000,transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 80% at 50% 50%,#000,transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(circle,rgba(146,129,247,.16),transparent 62%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={revealRef}
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
          position: 'relative',
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12.5px',
            letterSpacing: '.13em',
            color: '#9281f7',
            textTransform: 'uppercase',
            marginBottom: '22px',
          }}
        >
          06 — CONTACT
        </div>
        <h2
          style={{
            margin: '0 0 22px',
            fontFamily: "'Geist',system-ui,sans-serif",
            fontWeight: 600,
            letterSpacing: '-.03em',
            fontSize: 'clamp(44px,6vw,84px)',
            lineHeight: 1,
            color: '#ffffff',
          }}
        >
          Открыт к работе
          <br />и{' '}
          <span style={{ fontStyle: 'italic', color: '#baa7ff' }}>
            интересным задачам
          </span>
        </h2>
        <p
          style={{
            margin: '0 0 44px',
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#a1a4a5',
            fontWeight: 300,
            maxWidth: '460px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Ищу позицию фронтенд-разработчика. Напишите — отвечаю быстро.
        </p>

        <div
          className="contact-btns"
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {contacts.map((contact) => (
            <ContactButton
              key={contact.label}
              href={contact.href}
              label={contact.label}
              icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
