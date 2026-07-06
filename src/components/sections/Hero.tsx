'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const revealRefs = useRef<HTMLDivElement[]>([])

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

      requestAnimationFrame(() => {
        els.forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight) reveal(el)
        })
      })

      setTimeout(() => els.forEach(reveal), 1400)

      return () => {
        els.forEach((el) => io.unobserve(el))
      }
    } else {
      els.forEach(reveal)
    }
  }, [])

  const addRef = (el: HTMLDivElement | null, index: number) => {
    if (el) revealRefs.current[index] = el
  }

  return (
    <section
      id="top"
      className="hero-sec sect"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '150px 40px 90px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(35,38,42,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(35,38,42,.5) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 30%,#000 30%,transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 30%,#000 30%,transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Violet glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '8%',
          width: '640px',
          height: '640px',
          background: 'radial-gradient(circle,rgba(146,129,247,.20),transparent 62%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-6%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle,rgba(146,129,247,.08),transparent 65%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-grid"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.15fr .85fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div
          ref={(el) => addRef(el, 0)}
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'all .9s cubic-bezier(.2,.7,.3,1)',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Geist Mono',monospace",
              fontSize: '13px',
              letterSpacing: '.12em',
              color: '#a1a4a5',
              textTransform: 'uppercase',
              border: '1px solid #23262a',
              borderRadius: '100px',
              padding: '6px 14px',
              marginBottom: '30px',
              background: 'rgba(255,255,255,.02)',
            }}
          >
            <span
              className="animate-pulse-dot"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#9281f7',
                boxShadow: '0 0 10px #9281f7',
              }}
            />
            FRONTEND DEVELOPER · БИШКЕК
          </div>

          {/* H1 */}
          <h1
            style={{
              margin: 0,
              fontFamily: "'Geist',system-ui,sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(44px,5.6vw,64px)',
              lineHeight: 1.06,
              letterSpacing: '-.03em',
              color: '#ffffff',
            }}
          >
            Frontend-разработчик
            <br />
            на <span style={{ color: '#baa7ff' }}>React, TypeScript</span>
            <br />и Next.js
          </h1>

          {/* Description */}
          <p
            style={{
              margin: '32px 0 0',
              maxWidth: '520px',
              fontSize: '17px',
              lineHeight: 1.62,
              color: '#a7abac',
              fontWeight: 300,
            }}
          >
            Работаю с <span style={{ color: '#f0f0f0' }}>React, TypeScript и Next.js</span>.
            Делал сайты, админ-панели, каталоги и внутренние интерфейсы: страницы, формы,
            состояния, адаптив и подключение к API.
          </p>

          {/* Actions */}
          <div
            className="hero-actions"
            style={{
              display: 'flex',
              gap: '14px',
              marginTop: '38px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                fontSize: '14px',
                color: '#0a0a0a',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '12px 22px',
                borderRadius: '10px',
                background: '#f0f0f0',
                transition: 'all .25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f0f0f0'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Смотреть работы
              <span style={{ fontFamily: "'Geist Mono',monospace" }}>→</span>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                fontSize: '14px',
                color: '#f0f0f0',
                textDecoration: 'none',
                padding: '12px 22px',
                borderRadius: '10px',
                border: '1px solid #2b2f34',
                background: 'rgba(255,255,255,.02)',
                transition: 'all .25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4a4560'
                e.currentTarget.style.background = 'rgba(146,129,247,.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2b2f34'
                e.currentTarget.style.background = 'rgba(255,255,255,.02)'
              }}
            >
              Связаться
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: 'flex',
              gap: '34px',
              marginTop: '52px',
              paddingTop: '26px',
              borderTop: '1px solid #17191c',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '32px',
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                2,5
                <span
                  style={{ fontSize: '16px', color: '#6b6f72', fontWeight: 400 }}
                >
                  {' '}
                  года
                </span>
              </div>
              <div
                style={{
                  fontFamily: "'Geist Mono',monospace",
                  fontSize: '13px',
                  letterSpacing: '.05em',
                  color: '#8a8e90',
                  textTransform: 'uppercase',
                  marginTop: '9px',
                }}
              >
                в разработке
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '32px',
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
                  letterSpacing: '.05em',
                  color: '#8a8e90',
                  textTransform: 'uppercase',
                  marginTop: '9px',
                }}
              >
                проектов
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Geist',sans-serif",
                  fontWeight: 500,
                  fontSize: '32px',
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
                  letterSpacing: '.05em',
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

        {/* RIGHT — Portrait */}
        <div
          ref={(el) => addRef(el, 1)}
          className="hero-portrait"
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'all .9s cubic-bezier(.2,.7,.3,1) .15s',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className="portrait-float animate-float"
            style={{ position: 'relative', width: '340px' }}
          >
            {/* Decorative plates */}
            <div
              className="deco-plate"
              style={{
                position: 'absolute',
                inset: '-16px -16px 24px 22px',
                border: '1px solid #23262a',
                borderRadius: '24px',
                transform: 'rotate(4deg)',
                background:
                  'linear-gradient(160deg,rgba(146,129,247,.05),transparent)',
              }}
            />
            <div
              className="deco-plate"
              style={{
                position: 'absolute',
                inset: '-8px -8px 12px 12px',
                border: '1px solid #2b2f34',
                borderRadius: '22px',
                transform: 'rotate(2deg)',
              }}
            />

            {/* Glass frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #33363c',
                boxShadow:
                  '0 40px 80px -30px rgba(0,0,0,.9), inset 0 1px 0 rgba(255,255,255,.06)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg,rgba(146,129,247,.10),transparent 45%,rgba(0,0,0,.30))',
                  zIndex: 2,
                  mixBlendMode: 'soft-light',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 3,
                  boxShadow: 'inset 0 -60px 60px -30px rgba(0,0,0,.8)',
                }}
              />
              <Image
                src="/portrait.jpg"
                alt="Даниэл"
                width={340}
                height={454}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '454px',
                  objectFit: 'cover',
                  objectPosition: 'center 8%',
                  filter: 'contrast(1.03) brightness(1.02)',
                }}
                priority
              />
            </div>

            {/* Floating chips */}
            <div
              className="deco-chip"
              style={{
                position: 'absolute',
                top: '22px',
                left: '-58px',
                fontFamily: "'Geist Mono',monospace",
                fontSize: '13px',
                color: '#eef0f1',
                padding: '8px 12px',
                border: '1px solid #43484e',
                borderRadius: '9px',
                background: 'rgba(10,11,13,.92)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 34px -10px #000',
              }}
            >
              React · TS
            </div>
            <div
              className="deco-chip"
              style={{
                position: 'absolute',
                bottom: '56px',
                right: '-52px',
                fontFamily: "'Geist Mono',monospace",
                fontSize: '13px',
                color: '#c9bcff',
                padding: '8px 12px',
                border: '1px solid #4a4570',
                borderRadius: '9px',
                background: 'rgba(22,19,42,.92)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 34px -10px #000',
              }}
            >
              Next.js
            </div>
            <div
              className="deco-chip"
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '28px',
                zIndex: 6,
                fontFamily: "'Geist Mono',monospace",
                fontSize: '13px',
                color: '#eef0f1',
                padding: '8px 12px',
                border: '1px solid #43484e',
                borderRadius: '9px',
                background: 'rgba(10,11,13,.92)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 12px 34px -10px #000',
              }}
            >
              production UI
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
