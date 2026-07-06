'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { treeContainer, treeItem, fadeUp } from '@/lib/motion'

const treeLines = [
  { content: 'catalog/', isAccent: true },
  { content: '├─ Категории/', prefix: true },
  { content: '│  ├─ Электроника', prefix: true, indent: true },
  { content: '│  ├─ Инструменты', prefix: true, indent: true },
  { content: '│  └─ Расходники', prefix: true, indent: true },
  { content: '├─ Бренды/', prefix: true },
  { content: '│  └─ по производителям', prefix: true, indent: true },
  { content: '└─ Поиск и фильтры', prefix: true },
]

export function CatalogTreePreview() {
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
          catalog.tree
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
          nav
        </span>
      </div>

      {/* Content */}
      <motion.div
        variants={shouldReduceMotion ? undefined : treeContainer}
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
            marginBottom: '16px',
          }}
        >
          // структура каталога
        </motion.span>

        {/* Tree structure */}
        <div
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '12.5px',
            lineHeight: 2,
            color: '#c6c9cb',
          }}
        >
          {treeLines.map((line, index) => (
            <TreeLine
              key={index}
              {...line}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function TreeLine({
  content,
  isAccent,
  prefix,
  indent,
  shouldReduceMotion,
}: {
  content: string
  isAccent?: boolean
  prefix?: boolean
  indent?: boolean
  shouldReduceMotion: boolean | null
}) {
  // Parse content for tree symbols
  let displayContent = content
  let treeSymbol = ''

  if (prefix) {
    // Extract tree symbols (├─, │, └─, etc.)
    const match = content.match(/^([│├└─\s]+)(.*)$/)
    if (match) {
      treeSymbol = match[1]
      displayContent = match[2]
    }
  }

  // Check if displayContent ends with /
  const hasSlash = displayContent.endsWith('/')
  if (hasSlash) {
    displayContent = displayContent.slice(0, -1)
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : treeItem}
      whileHover={
        !shouldReduceMotion
          ? {
              x: 2,
              transition: { duration: 0.15 },
            }
          : undefined
      }
      style={{ cursor: 'default' }}
    >
      {treeSymbol && <span style={{ color: '#3f4348' }}>{treeSymbol}</span>}
      <span style={{ color: isAccent ? '#baa7ff' : '#c6c9cb' }}>{displayContent}</span>
      {hasSlash && <span style={{ color: '#3f4348' }}>/</span>}
    </motion.div>
  )
}
