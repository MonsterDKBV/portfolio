'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#work', label: 'Работы' },
  { href: '#expertise', label: 'Стек' },
  { href: '#ai', label: 'AI-workflow' },
  { href: '#about', label: 'Обо мне' },
  { href: '/resume', label: 'Резюме' },
]

export function Header() {
  const navRef = useRef<HTMLElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLSpanElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      if (window.scrollY > 30) {
        nav.style.background = 'rgba(0,0,0,.72)'
        nav.style.backdropFilter = 'blur(16px)'
        nav.style.borderBottom = '1px solid rgba(35,38,42,1)'
        nav.style.padding = '13px 40px'
      } else {
        nav.style.background = 'rgba(0,0,0,0)'
        nav.style.backdropFilter = 'blur(0px)'
        nav.style.borderBottom = '1px solid rgba(35,38,42,0)'
        nav.style.padding = '18px 40px'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const drawer = drawerRef.current
    const burger = burgerRef.current

    if (drawer) {
      drawer.style.transform = menuOpen ? 'translateY(0)' : 'translateY(-100%)'
      drawer.style.opacity = menuOpen ? '1' : '0'
      drawer.style.pointerEvents = menuOpen ? 'auto' : 'none'
    }

    if (burger) {
      const bars = burger.children as HTMLCollectionOf<HTMLElement>
      if (bars.length === 3) {
        bars[0].style.top = menuOpen ? '5px' : '0px'
        bars[0].style.transform = menuOpen ? 'rotate(45deg)' : 'none'
        bars[1].style.opacity = menuOpen ? '0' : '1'
        bars[2].style.top = menuOpen ? '5px' : '10px'
        bars[2].style.transform = menuOpen ? 'rotate(-45deg)' : 'none'
      }
    }

    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <nav
        ref={navRef}
        className="site-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 40px',
          borderBottom: '1px solid rgba(35,38,42,0)',
          background: 'rgba(0,0,0,0)',
          backdropFilter: 'blur(0px)',
          transition: 'all .4s cubic-bezier(.2,.7,.3,1)',
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={26}
            height={26}
            style={{
              borderRadius: '6px',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              letterSpacing: '-.01em',
              color: '#f0f0f0',
              fontWeight: 500,
            }}
          >
            Даниэл Кубанычбеков
          </span>
        </a>

        <div
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
        >
          <div
            style={{
              display: 'flex',
              gap: '28px',
              fontSize: '14.5px',
              color: '#a1a4a5',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a4a5')}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            style={{
              fontSize: '13px',
              color: '#f0f0f0',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid #2b2f34',
              borderRadius: '8px',
              background:
                'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,0))',
              transition: 'all .25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4a4560'
              e.currentTarget.style.background = 'rgba(146,129,247,.10)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2b2f34'
              e.currentTarget.style.background =
                'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,0))'
            }}
          >
            Связаться
          </a>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label="Открыть меню"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            border: '1px solid #2b2f34',
            borderRadius: '11px',
            background: 'rgba(255,255,255,.03)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            ref={burgerRef}
            style={{
              position: 'relative',
              width: '18px',
              height: '12px',
              display: 'block',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '18px',
                height: '1.6px',
                background: '#f0f0f0',
                borderRadius: '2px',
                transition: 'transform .3s, top .3s, opacity .2s',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: '5px',
                width: '18px',
                height: '1.6px',
                background: '#f0f0f0',
                borderRadius: '2px',
                transition: 'opacity .2s',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: '10px',
                width: '18px',
                height: '1.6px',
                background: '#f0f0f0',
                borderRadius: '2px',
                transition: 'transform .3s, top .3s, opacity .2s',
              }}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        ref={drawerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(3,3,4,.94)',
          backdropFilter: 'blur(22px)',
          transform: 'translateY(-100%)',
          opacity: 0,
          pointerEvents: 'none',
          transition:
            'transform .45s cubic-bezier(.2,.7,.3,1), opacity .3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '6px',
          padding: '40px 30px calc(env(safe-area-inset-bottom,0px) + 40px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(35,38,42,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(35,38,42,.35) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%,#000,transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%,#000,transparent 80%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            fontFamily: "'Geist Mono',monospace",
            fontSize: '13px',
            letterSpacing: '.14em',
            color: '#9281f7',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          МЕНЮ
        </div>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            style={{
              position: 'relative',
              fontFamily: "'Geist',system-ui,sans-serif",
              fontWeight: 600,
              letterSpacing: '-.02em',
              fontSize: '33px',
              color: '#f0f0f0',
              textDecoration: 'none',
              padding: '8px 0',
              lineHeight: 1.15,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          style={{
            position: 'relative',
            marginTop: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            fontSize: '16px',
            color: '#0a0a0a',
            fontWeight: 500,
            textDecoration: 'none',
            padding: '16px 22px',
            borderRadius: '12px',
            background: '#f0f0f0',
          }}
        >
          Связаться <span style={{ fontFamily: "'Geist Mono',monospace" }}>→</span>
        </a>
      </div>
    </>
  )
}
