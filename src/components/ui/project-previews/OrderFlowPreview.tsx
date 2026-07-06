'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, fadeUp, dotPulse, lineRevealY } from '@/lib/motion'

const flowItems = [
  { title: 'Меню', desc: 'каталог блюд', isActive: false, isLast: false },
  { title: 'Корзина', desc: 'состояние на клиенте', isActive: false, isLast: false },
  { title: 'Оформление', desc: 'форма + валидация', isActive: false, isLast: false },
  { title: 'Кухня', desc: 'экран в админке', isActive: false, isLast: false },
  { title: 'Готово', desc: 'статус заказа', isActive: true, isLast: true },
]

export function OrderFlowPreview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      style={{
        width: '100%',
        alignSelf: 'stretch',
        border: '1px solid #1c1f22',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg,#0a0b0c,#060708)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Window header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '13px 16px',
          borderBottom: '1px solid #17191c',
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#2b2f34' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#2b2f34' }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#2b2f34' }} />
        <span
          style={{
            marginLeft: '6px',
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12px',
            color: '#6b6f72',
          }}
        >
          order-flow.ts
        </span>
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12px',
            letterSpacing: '.08em',
            color: '#3f4348',
            textTransform: 'uppercase',
          }}
        >
          schema
        </span>
      </div>

      {/* Content */}
      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: 1,
          padding: '26px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.span
          variants={shouldReduceMotion ? undefined : fadeUp}
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12px',
            letterSpacing: '.08em',
            color: '#6b6f72',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}
        >
          // поток заказа
        </motion.span>

        {/* Flow items */}
        {flowItems.map((item, index) => (
          <FlowItem
            key={item.title}
            {...item}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </motion.div>
    </div>
  )
}

function FlowItem({
  title,
  desc,
  isActive,
  isLast,
  index,
  shouldReduceMotion,
}: {
  title: string
  desc: string
  isActive: boolean
  isLast: boolean
  index: number
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeUp}
      style={{ display: 'flex', gap: '14px' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.span
          variants={shouldReduceMotion ? undefined : dotPulse}
          style={{
            width: '11px',
            height: '11px',
            borderRadius: '50%',
            border: isActive ? 'none' : '1px solid #3a3f45',
            background: isActive ? '#9281f7' : '#0a0b0c',
            boxShadow: isActive ? '0 0 10px rgba(146,129,247,.7)' : 'none',
            flexShrink: 0,
          }}
          {...(isActive && !shouldReduceMotion
            ? {
                animate: {
                  boxShadow: [
                    '0 0 10px rgba(146,129,247,.5)',
                    '0 0 16px rgba(146,129,247,.8)',
                    '0 0 10px rgba(146,129,247,.5)',
                  ],
                },
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
            : {})}
        />
        {!isLast && (
          <motion.span
            variants={shouldReduceMotion ? undefined : lineRevealY}
            style={{
              width: '1px',
              flex: 1,
              minHeight: '16px',
              background: '#23262a',
              transformOrigin: 'top',
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : '12px' }}>
        <div
          style={{
            fontSize: '14px',
            color: isActive ? '#ffffff' : '#e6e8e9',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '13px',
            color: isActive ? '#baa7ff' : '#6b6f72',
            marginTop: '3px',
          }}
        >
          {desc}
        </div>
      </div>
    </motion.div>
  )
}
