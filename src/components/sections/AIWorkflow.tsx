'use client'

import { useEffect, useRef } from 'react'

const aiItems = [
  ['Context engineering', 'Собираю правильный контекст для задачи — быстрее и точнее.'],
  ['Декомпозиция', 'Разбиваю сложное на шаги, которые можно проверить.'],
  ['Контроль качества', 'Читаю, тестирую и правлю каждый результат вручную.'],
  ['Ответственность', 'Финальные решения и логику держу за собой.'],
]

export function AIWorkflow() {
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
      id="ai"
      className="sect"
      style={{
        position: 'relative',
        padding: '60px 40px 100px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          ref={revealRef}
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
            border: '1px solid #23262a',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(180deg,#0b0a12,#050506)',
          }}
        >
          {/* Line accents */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(90deg,rgba(146,129,247,.08) 1px,transparent 1px)',
              backgroundSize: '80px 100%',
              pointerEvents: 'none',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              right: '-5%',
              width: '520px',
              height: '520px',
              background: 'radial-gradient(circle,rgba(146,129,247,.14),transparent 62%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="ai-grid"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
            }}
          >
            <div className="ai-col" style={{ padding: '52px 46px' }}>
              <div
                style={{
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: '12.5px',
                  letterSpacing: '.13em',
                  color: '#9281f7',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                03 — AI-ASSISTED ENGINEERING
              </div>
              <h2
                style={{
                  margin: '0 0 22px',
                  fontFamily: "'Geist',system-ui,sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(30px,3.6vw,44px)',
                  lineHeight: 1.1,
                  letterSpacing: '-.03em',
                  color: '#ffffff',
                }}
              >
                Claude Code
                <br />
                в рабочем
                <br />
                <span style={{ color: '#baa7ff' }}>процессе</span>
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: '16px',
                  lineHeight: 1.68,
                  color: '#a7abac',
                  fontWeight: 300,
                  maxWidth: '440px',
                }}
              >
                Использую Claude Code как рабочий инструмент: для анализа кода,
                декомпозиции задач, подготовки контекста и проверки решений. Это не
                простые промпты, а работа с контекстом, техническими ограничениями и
                пошаговой проверкой результата. Финальные решения, качество и
                ответственность остаются за мной.
              </p>
            </div>

            <div
              className="ai-col"
              style={{
                padding: '52px 46px',
                borderLeft: '1px solid #1c1f22',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                justifyContent: 'center',
              }}
            >
              {aiItems.map(([title, desc], i) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist Mono',monospace",
                      fontSize: '11px',
                      color: '#9281f7',
                      paddingTop: '3px',
                      minWidth: '26px',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: '15px',
                        color: '#f0f0f0',
                        fontWeight: 500,
                        marginBottom: '4px',
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: '15px',
                        color: '#a1a4a5',
                        fontWeight: 300,
                        lineHeight: 1.55,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
