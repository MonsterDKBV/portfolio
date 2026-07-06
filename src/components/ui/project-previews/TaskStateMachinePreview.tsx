'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, fadeUp, dotPulse, lineRevealY, fadeIn } from '@/lib/motion'

const states = [
  { state: 'NEED_TO_DO', isActive: false, isHighlighted: false, isLast: false },
  { state: 'IN_PROGRESS', isActive: true, isHighlighted: false, isLast: false, label: '← текущий' },
  { state: 'ON_REVIEW', isActive: false, isHighlighted: false, isLast: false },
  { state: 'ON_REVISION', isActive: false, isHighlighted: false, isLast: false },
  { state: 'APPROVED', isActive: false, isHighlighted: true, isLast: true },
]

export function TaskStateMachinePreview() {
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
          task.machine.ts
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
          state
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
          // жизненный цикл задачи
        </motion.span>

        {/* State items */}
        {states.map((item, index) => (
          <StateItem
            key={item.state}
            {...item}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </motion.div>
    </div>
  )
}

function StateItem({
  state,
  isActive,
  isHighlighted,
  isLast,
  label,
  index,
  shouldReduceMotion,
}: {
  state: string
  isActive: boolean
  isHighlighted: boolean
  isLast: boolean
  label?: string
  index: number
  shouldReduceMotion: boolean | null
}) {
  const dotActive = isActive || isHighlighted

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeUp}
      style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
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
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            border: dotActive ? 'none' : '1px solid #3a3f45',
            background: dotActive ? '#9281f7' : '#0a0b0c',
            boxShadow: dotActive ? '0 0 9px rgba(146,129,247,.7)' : 'none',
            marginTop: '9px',
            flexShrink: 0,
          }}
          {...(isActive && !shouldReduceMotion
            ? {
                animate: {
                  boxShadow: [
                    '0 0 9px rgba(146,129,247,.5)',
                    '0 0 14px rgba(146,129,247,.8)',
                    '0 0 9px rgba(146,129,247,.5)',
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
              minHeight: '12px',
              background: '#23262a',
              transformOrigin: 'top',
            }}
          />
        )}
      </div>
      <div
        style={{
          paddingBottom: isLast ? 0 : '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <motion.span
          whileHover={
            !shouldReduceMotion
              ? {
                  borderColor: isActive ? '#5a54a0' : '#33363c',
                  transition: { duration: 0.15 },
                }
              : undefined
          }
          style={{
            display: 'inline-flex',
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12px',
            color: isActive ? '#c9bcff' : isHighlighted ? '#e6e8e9' : '#c6c9cb',
            padding: '6px 12px',
            border: `1px solid ${isActive ? '#4a4570' : isHighlighted ? '#33305a' : '#23262a'}`,
            borderRadius: '8px',
            background: isActive ? 'rgba(146,129,247,.10)' : 'rgba(255,255,255,.02)',
            transition: 'border-color 0.15s ease',
          }}
        >
          {state}
        </motion.span>
        {label && (
          <motion.span
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, x: -4 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, delay: 0.2 },
                    },
                  }
            }
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#6b6f72',
            }}
          >
            {label}
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}
