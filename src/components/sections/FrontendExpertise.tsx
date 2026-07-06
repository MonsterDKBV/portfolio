'use client'

import { useEffect, useRef } from 'react'

const coreChips = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'SCSS',
  'Redux Toolkit',
  'RTK Query',
  'Zustand',
  'Framer Motion',
  'Vite',
]

const patterns = [
  ['Страницы и лендинги', 'адаптивная вёрстка'],
  ['Формы и валидация', 'состояния загрузки и ошибок'],
  ['Таблицы и карточки', 'фильтры и пагинация'],
  ['Подключение к API', 'полная CRUD-интеграция'],
]

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "'Geist Mono',monospace",
        fontSize: '12.5px',
        color: '#f0f0f0',
        padding: '8px 14px',
        borderRadius: '9px',
        border: '1px solid #3a3560',
        background: 'rgba(146,129,247,.10)',
      }}
    >
      {label}
    </span>
  )
}

export function FrontendExpertise() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const els = revealRefs.current.filter(Boolean)

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
      els.forEach((el) => io.observe(el))
      return () => els.forEach((el) => io.unobserve(el))
    } else {
      els.forEach(reveal)
    }
  }, [])

  return (
    <section
      id="expertise"
      className="sect"
      style={{
        position: 'relative',
        padding: '100px 40px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        ref={(el) => {
          if (el) revealRefs.current[0] = el
        }}
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
          marginBottom: '56px',
        }}
      >
        <div
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12.5px',
            letterSpacing: '.13em',
            color: '#9281f7',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          02 — FRONTEND EXPERTISE
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Geist',system-ui,sans-serif",
            fontWeight: 600,
            letterSpacing: '-.03em',
            fontSize: 'clamp(38px,4.6vw,60px)',
            lineHeight: 1.02,
            color: '#ffffff',
            maxWidth: '720px',
          }}
        >
          Инструменты, с которыми
          <br />
          работаю каждый день.
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={(el) => {
          if (el) revealRefs.current[1] = el
        }}
        className="exp-grid"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(12,1fr)',
          gap: '18px',
        }}
      >
        {/* Core frontend */}
        <div
          style={{
            gridColumn: 'span 7',
            border: '1px solid #1c1f22',
            borderRadius: '18px',
            padding: '34px',
            background:
              'linear-gradient(160deg,rgba(146,129,247,.05),transparent 55%),#08090a',
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.1em',
              color: '#baa7ff',
              textTransform: 'uppercase',
              marginBottom: '22px',
            }}
          >
            CORE · ежедневно
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {coreChips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </div>
          <p
            style={{
              margin: '26px 0 0',
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#a7abac',
              fontWeight: 300,
              maxWidth: '440px',
            }}
          >
            Основной инструмент — React и TypeScript. Пишу типизированные компоненты,
            работаю с состояниями и адаптивной вёрсткой, делаю SSR/ISR на Next.js.
          </p>
        </div>

        {/* What I build in interfaces */}
        <div
          style={{
            gridColumn: 'span 5',
            border: '1px solid #1c1f22',
            borderRadius: '18px',
            padding: '34px',
            background: '#08090a',
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '13px',
              letterSpacing: '.1em',
              color: '#6b6f72',
              textTransform: 'uppercase',
              marginBottom: '22px',
            }}
          >
            В интерфейсах делаю
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {patterns.map(([title, desc], i) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  padding: '13px 0',
                  borderTop: i === 0 ? 'none' : '1px solid #17191c',
                }}
              >
                <span
                  style={{ fontSize: '14px', color: '#f0f0f0', fontWeight: 500 }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontFamily: "'Geist Mono',monospace",
                    fontSize: '11.5px',
                    color: '#6b6f72',
                  }}
                >
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* API Integration */}
        <div
          style={{
            gridColumn: 'span 5',
            border: '1px solid #1c1f22',
            borderRadius: '18px',
            padding: '34px',
            background: '#08090a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '13px',
              letterSpacing: '.1em',
              color: '#6b6f72',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            API Integration
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#a7abac',
              fontWeight: 300,
            }}
          >
            В работе с frontend мне помогает понимание API, структуры данных и логики
            продукта.
          </p>
        </div>

        {/* Adaptability */}
        <div
          style={{
            gridColumn: 'span 7',
            border: '1px solid #1c1f22',
            borderRadius: '18px',
            padding: '34px',
            background:
              'linear-gradient(160deg,rgba(146,129,247,.04),transparent 55%),#08090a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.1em',
              color: '#baa7ff',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            АДАПТИВНОСТЬ
          </div>
          <h3
            style={{
              margin: '0 0 12px',
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '-.01em',
              color: '#ffffff',
            }}
          >
            Быстро вхожу в незнакомый код
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#a7abac',
              fontWeight: 300,
              maxWidth: '520px',
            }}
          >
            Читаю документацию быстро, разбираюсь в чужом коде и работаю аккуратно
            внутри существующих систем, не ломая то, что уже написано. Спокойно
            подстраиваюсь под инструменты и процессы команды.
          </p>
        </div>
      </div>
    </section>
  )
}
