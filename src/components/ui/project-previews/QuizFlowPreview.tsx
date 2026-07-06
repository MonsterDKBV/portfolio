'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { answerContainer, answerItem, circleReveal, fadeUp, progressFill } from '@/lib/motion'

export function QuizFlowPreview() {
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
          quiz.flow.tsx
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
          test
        </span>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: 1,
          padding: '26px',
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
            marginBottom: '20px',
          }}
        >
          // сценарий теста
        </motion.span>

        {/* Timer section */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            marginBottom: '22px',
          }}
        >
          {/* Circular timer */}
          <motion.div
            variants={shouldReduceMotion ? undefined : circleReveal}
            style={{ position: 'relative', width: '70px', height: '70px', flexShrink: 0 }}
          >
            <motion.div
              initial={shouldReduceMotion ? undefined : { rotate: -90 }}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: -90,
                    }
              }
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'conic-gradient(#9281f7 0 68%, #23262a 0)',
                WebkitMask: 'radial-gradient(circle at center, transparent 59%, #000 60%)',
                mask: 'radial-gradient(circle at center, transparent 59%, #000 60%)',
              }}
            />
            <motion.div
              variants={
                shouldReduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 0.3, delay: 0.2 },
                      },
                    }
              }
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Geist Mono',monospace",
                fontSize: '13px',
                color: '#eef0f1',
              }}
            >
              0:12
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUp}
            style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <div style={{ fontSize: '13.5px', color: '#e6e8e9' }}>Таймер на вопрос</div>
            <div
              style={{
                fontFamily: "'Geist Mono',monospace",
                fontSize: '13px',
                color: '#6b6f72',
              }}
            >
              круговой индикатор времени
            </div>
          </motion.div>
        </motion.div>

        {/* Answer options */}
        <motion.div
          variants={shouldReduceMotion ? undefined : answerContainer}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          {/* Correct answer */}
          <motion.div
            variants={shouldReduceMotion ? undefined : answerItem}
            whileHover={
              !shouldReduceMotion
                ? {
                    borderColor: '#3d5040',
                    transition: { duration: 0.15 },
                  }
                : undefined
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#7cc79a',
              padding: '9px 12px',
              border: '1px solid #2c3b31',
              borderRadius: '8px',
              background: 'rgba(90,175,120,.07)',
              transition: 'border-color 0.15s ease',
            }}
          >
            <span style={{ fontSize: '12px', flexShrink: 0 }}>✓</span> Верный ответ
          </motion.div>

          {/* Neutral option */}
          <motion.div
            variants={shouldReduceMotion ? undefined : answerItem}
            whileHover={
              !shouldReduceMotion
                ? {
                    borderColor: '#33363c',
                    transition: { duration: 0.15 },
                  }
                : undefined
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#c6c9cb',
              padding: '9px 12px',
              border: '1px solid #23262a',
              borderRadius: '8px',
              background: 'rgba(255,255,255,.02)',
              transition: 'border-color 0.15s ease',
            }}
          >
            <span
              style={{
                width: '12px',
                height: '12px',
                border: '1px solid #3a3f45',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            />
            Вариант ответа
          </motion.div>

          {/* Wrong answer */}
          <motion.div
            variants={shouldReduceMotion ? undefined : answerItem}
            whileHover={
              !shouldReduceMotion
                ? {
                    borderColor: '#4a3535',
                    transition: { duration: 0.15 },
                  }
                : undefined
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#cf9393',
              padding: '9px 12px',
              border: '1px solid #3b2c2c',
              borderRadius: '8px',
              background: 'rgba(175,90,90,.06)',
              transition: 'border-color 0.15s ease',
            }}
          >
            <span style={{ fontSize: '12px', flexShrink: 0 }}>✕</span> Неверный — отмечен
          </motion.div>
        </motion.div>

        {/* Result bar */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.06em',
              color: '#6b6f72',
              textTransform: 'uppercase',
            }}
          >
            результат
          </span>
          <div
            style={{
              flex: 1,
              height: '7px',
              borderRadius: '4px',
              background: '#1f2226',
              overflow: 'hidden',
            }}
          >
            <motion.div
              variants={shouldReduceMotion ? undefined : progressFill}
              style={{
                width: '72%',
                height: '100%',
                background: 'linear-gradient(90deg,#9281f7,#baa7ff)',
                borderRadius: '4px',
                transformOrigin: 'left',
              }}
            />
          </div>
          <motion.span
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.9 },
                    },
                  }
            }
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#eef0f1',
            }}
          >
            72%
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  )
}
