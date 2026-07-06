'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function About() {
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
      id="about"
      className="sect"
      style={{
        position: 'relative',
        padding: '60px 40px 100px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <div
        ref={revealRef}
        className="about-grid"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all .8s cubic-bezier(.2,.7,.3,1)',
          display: 'grid',
          gridTemplateColumns: '.9fr 1.1fr',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        {/* Portrait */}
        <div className="about-media" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: '-14px 18px 18px -14px',
              border: '1px solid #23262a',
              borderRadius: '22px',
              transform: 'rotate(-3deg)',
            }}
          />
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #33363c',
              boxShadow: '0 40px 80px -30px rgba(0,0,0,.9)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg,transparent 50%,rgba(0,0,0,.4))',
                zIndex: 2,
              }}
            />
            <Image
              src="/portrait.jpg"
              alt="Даниэл Кубанычбеков"
              width={400}
              height={420}
              style={{
                display: 'block',
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                objectPosition: 'center 16%',
                filter: 'contrast(1.03) brightness(1.02)',
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12.5px',
              letterSpacing: '.13em',
              color: '#9281f7',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}
          >
            05 — ОБО МНЕ
          </div>
          <h2
            style={{
              margin: '0 0 24px',
              fontFamily: "'Geist',system-ui,sans-serif",
              fontWeight: 600,
              letterSpacing: '-.03em',
              fontSize: 'clamp(32px,3.8vw,48px)',
              lineHeight: 1.06,
              color: '#ffffff',
            }}
          >
            Даниэл Кубанычбеков
          </h2>
          <p
            style={{
              margin: '0 0 18px',
              fontSize: '16.5px',
              lineHeight: 1.7,
              color: '#a7abac',
              fontWeight: 300,
            }}
          >
            Фронтенд-разработчик из Бишкека. Последние 2,5 года постоянно в разработке:
            участвовал в 30+ проектах разного масштаба. Часть делал самостоятельно, в
            командах отвечал за фронтенд.
          </p>
          <p
            style={{
              margin: '0 0 30px',
              fontSize: '16.5px',
              lineHeight: 1.7,
              color: '#a7abac',
              fontWeight: 300,
            }}
          >
            Люблю аккуратный код и понятные интерфейсы. Сейчас целенаправленно усиливаю
            инженерную гигиену — тесты и переиспользование компонентов.
          </p>

          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 0,
              border: '1px solid #1c1f22',
              borderRadius: '14px',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '22px 20px', borderRight: '1px solid #1c1f22' }}>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '28px',
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                2,5
              </div>
              <div
                style={{
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: '13px',
                  letterSpacing: '.04em',
                  color: '#8a8e90',
                  textTransform: 'uppercase',
                  marginTop: '9px',
                }}
              >
                года в разработке
              </div>
            </div>
            <div style={{ padding: '22px 20px', borderRight: '1px solid #1c1f22' }}>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '28px',
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                30<span style={{ color: '#9281f7' }}>+</span>
              </div>
              <div
                style={{
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: '13px',
                  letterSpacing: '.04em',
                  color: '#8a8e90',
                  textTransform: 'uppercase',
                  marginTop: '9px',
                }}
              >
                проектов
              </div>
            </div>
            <div style={{ padding: '22px 20px' }}>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '28px',
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                10<span style={{ color: '#9281f7' }}>+</span>
              </div>
              <div
                style={{
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: '13px',
                  letterSpacing: '.04em',
                  color: '#8a8e90',
                  textTransform: 'uppercase',
                  marginTop: '9px',
                }}
              >
                в реальном использовании
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
