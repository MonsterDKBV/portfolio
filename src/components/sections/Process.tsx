'use client'

import { useEffect, useRef } from 'react'

const processSteps = [
  ['Разбираюсь', 'Вхожу в код и контекст, читаю документацию, понимаю ограничения.'],
  ['Проектирую', 'Структура компонентов, состояние, данные и доступ до первой строки.'],
  ['Собираю', 'Чистая типизированная реализация, адаптив и внимание к деталям UI.'],
  ['Проверяю', 'Ручная проверка сценариев, ревью и доводка до продакшена.'],
]

export function Process() {
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
      className="sect"
      style={{
        position: 'relative',
        padding: '40px 40px 100px',
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
          marginBottom: '48px',
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
          04 — ПОДХОД
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
          }}
        >
          Как я работаю
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={(el) => {
          if (el) revealRefs.current[1] = el
        }}
        className="process-grid"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '18px',
        }}
      >
        {processSteps.map(([title, desc], i) => (
          <div
            key={title}
            style={{
              border: '1px solid #1c1f22',
              borderRadius: '16px',
              padding: '28px 24px',
              background: '#08090a',
              minHeight: '190px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontFamily: "'Geist',system-ui,sans-serif",
                fontWeight: 600,
                fontSize: '28px',
                letterSpacing: '-.02em',
                color: '#9281f7',
                lineHeight: 1,
                marginBottom: '20px',
              }}
            >
              0{i + 1}
            </span>
            <h3
              style={{
                margin: '0 0 10px',
                fontSize: '17px',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '-.01em',
              }}
            >
              {title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#a1a4a5',
                fontWeight: 300,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
