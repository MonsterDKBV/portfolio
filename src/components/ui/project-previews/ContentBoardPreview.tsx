'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { boardContainer, columnReveal, fadeUp, lineRevealX } from '@/lib/motion'

const columns = [
  {
    title: 'Черновик',
    dotColor: '#3a3f45',
    titleColor: '#7c8084',
    isActive: false,
    cards: [
      { widths: [82, 55] as [number, number] },
      { widths: [70, 48] as [number, number] },
    ],
  },
  {
    title: 'На ревью',
    dotColor: '#9281f7',
    dotGlow: true,
    titleColor: '#baa7ff',
    isActive: true,
    cards: [
      { widths: [82, 60] as [number, number], isActive: true },
      { widths: [74, 52] as [number, number] },
    ],
  },
  {
    title: 'Опубл.',
    dotColor: '#5b8f6f',
    titleColor: '#7c8084',
    isActive: false,
    cards: [
      { widths: [78, 50] as [number, number] },
      { widths: [66, 44] as [number, number] },
    ],
  },
]

export function ContentBoardPreview() {
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
          content-board.tsx
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
          board
        </span>
      </div>

      {/* Content */}
      <motion.div
        variants={shouldReduceMotion ? undefined : boardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: 1,
          padding: '22px',
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
            marginBottom: '16px',
          }}
        >
          // доска контента
        </motion.span>

        {/* Board columns */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          {columns.map((col, colIndex) => (
            <BoardColumn
              key={col.title}
              {...col}
              colIndex={colIndex}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function BoardColumn({
  title,
  dotColor,
  dotGlow,
  titleColor,
  isActive,
  cards,
  colIndex,
  shouldReduceMotion,
}: {
  title: string
  dotColor: string
  dotGlow?: boolean
  titleColor: string
  isActive: boolean
  cards: Array<{ widths: [number, number]; isActive?: boolean }>
  colIndex: number
  shouldReduceMotion: boolean | null
}) {
  const cardStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : columnReveal}
      style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}
    >
      {/* Column header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '2px',
        }}
      >
        <motion.span
          {...(isActive && !shouldReduceMotion
            ? {
                animate: {
                  boxShadow: [
                    '0 0 7px rgba(146,129,247,.5)',
                    '0 0 10px rgba(146,129,247,.8)',
                    '0 0 7px rgba(146,129,247,.5)',
                  ],
                },
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
            : {})}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: dotColor,
            boxShadow: dotGlow ? '0 0 7px rgba(146,129,247,.7)' : 'none',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12px',
            letterSpacing: '.04em',
            color: titleColor,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>

      {/* Cards */}
      <motion.div
        variants={shouldReduceMotion ? undefined : cardStagger}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        {cards.map((card, cardIndex) => (
          <BoardCard
            key={cardIndex}
            isActive={card.isActive}
            widths={card.widths}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

function BoardCard({
  isActive = false,
  widths,
  shouldReduceMotion,
}: {
  isActive?: boolean
  widths: [number, number]
  shouldReduceMotion: boolean | null
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
        delay: 0.15,
      },
    },
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : cardVariants}
      whileHover={
        !shouldReduceMotion && isActive
          ? {
              borderColor: '#5a54a0',
              transition: { duration: 0.15 },
            }
          : undefined
      }
      style={{
        border: `1px solid ${isActive ? '#4a4570' : '#23262a'}`,
        borderRadius: '7px',
        padding: '9px',
        background: isActive ? 'rgba(146,129,247,.08)' : 'rgba(255,255,255,.015)',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        transition: 'border-color 0.15s ease',
      }}
    >
      <motion.div
        variants={shouldReduceMotion ? undefined : barVariants}
        style={{
          height: '5px',
          width: `${widths[0]}%`,
          background: isActive ? '#6a5fb0' : '#2b2f34',
          borderRadius: '2px',
          transformOrigin: 'left',
        }}
      />
      <motion.div
        variants={shouldReduceMotion ? undefined : barVariants}
        style={{
          height: '5px',
          width: `${widths[1]}%`,
          background: isActive ? '#3a3560' : '#23262a',
          borderRadius: '2px',
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  )
}
