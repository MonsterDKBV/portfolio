'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  OrderFlowPreview,
  TaskStateMachinePreview,
  CatalogTreePreview,
  ContentBoardPreview,
  QuizFlowPreview,
} from '@/components/ui/project-previews'

const projects = [
  {
    num: '01',
    type: 'Клиентский сайт + админка',
    title: 'Система заказов для ресторана',
    role: 'Frontend — вёрстка и клиентская логика',
    tasks: 'Меню, корзина, оформление заказа, экран отчётов',
    hard: 'Собрать единый поток заказа: меню → корзина → оформление → статус заказа → админка',
    hardLabel: 'Сложно',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    layout: 'text-left' as const,
    Preview: OrderFlowPreview,
  },
  {
    num: '02',
    type: 'SaaS · дашборд задач',
    title: 'Task Management Dashboard',
    role: 'Frontend — интерфейс дашборда',
    tasks: 'Таблицы, фильтры, модальные формы, статусы',
    hard: 'Сделать статусы задач понятными в интерфейсе и не допустить расхождения между действиями пользователя и фактическим состоянием задачи',
    hardLabel: 'Сложно',
    stack: ['React', 'TypeScript', 'State machine'],
    layout: 'text-right' as const,
    Preview: TaskStateMachinePreview,
  },
  {
    num: '03',
    type: 'B2B · каталог',
    title: 'B2B каталог товаров',
    role: 'Frontend — структура и навигация',
    tasks: 'Категории, карточки товаров, поиск, фильтры, избранное, адаптив и понятная навигация по большому каталогу',
    hard: 'Держать навигацию понятной на большом объёме категорий',
    hardLabel: 'Сложно',
    stack: ['React', 'TypeScript', 'SCSS'],
    layout: 'text-left' as const,
    Preview: CatalogTreePreview,
  },
  {
    num: '04',
    type: 'Внутренняя CMS / dashboard',
    title: 'Платформа управления контентом',
    role: 'Frontend — dashboard, workflow-экраны, UI-состояния',
    tasks: 'Интерфейсы для карточек контента, статусов, календаря публикаций и командного workflow: от черновика до проверки и публикации',
    hard: 'Собрать плотный интерфейс с большим объёмом данных так, чтобы он оставался читаемым в ежедневной работе',
    hardLabel: 'Интересно',
    stack: ['React', 'TypeScript', 'Dashboard UI', 'Kanban', 'Charts', 'Content workflow'],
    layout: 'text-right' as const,
    Preview: ContentBoardPreview,
  },
  {
    num: '05',
    type: 'Публичный сайт / интерактивный тест',
    title: 'Сайт для школы английского',
    role: 'Frontend — landing, адаптив, test flow, CMS',
    tasks: 'Публичные страницы школы, адаптив и интерактивный тест — вопросы, варианты и контент из CMS',
    hard: 'Сделать тест как полноценный сценарий: таймер, круговой индикатор времени, проверка ответов, итоговый процент и форма заявки',
    hardLabel: 'Интересно',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'CMS', 'Quiz flow', 'Timer UI'],
    layout: 'text-left' as const,
    Preview: QuizFlowPreview,
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

function PrivateBadge({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <motion.span
      whileHover={
        !shouldReduceMotion
          ? {
              boxShadow: '0 0 12px rgba(146,129,247,.3)',
              transition: { duration: 0.2 },
            }
          : undefined
      }
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: "'Geist Mono',monospace",
        fontSize: '12px',
        letterSpacing: '.1em',
        color: '#baa7ff',
        textTransform: 'uppercase',
        padding: '5px 10px',
        border: '1px solid #33305a',
        borderRadius: '100px',
        background: 'rgba(146,129,247,.06)',
        whiteSpace: 'nowrap',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#9281f7',
          boxShadow: '0 0 8px #9281f7',
        }}
      />
      Private
    </motion.span>
  )
}

function ProjectText({
  project,
  shouldReduceMotion,
}: {
  project: (typeof projects)[0]
  shouldReduceMotion: boolean | null
}) {
  const isLeft = project.layout === 'text-left'

  return (
    <div
      className="proj-text"
      style={{
        padding: '38px 34px',
        display: 'flex',
        flexDirection: 'column',
        borderRight: isLeft ? '1px solid #17191c' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontFamily: "'Geist Mono',monospace",
            fontSize: '13px',
            letterSpacing: '.1em',
            color: '#7c8084',
            textTransform: 'uppercase',
          }}
        >
          {project.num} · {project.type}
        </span>
        <PrivateBadge shouldReduceMotion={shouldReduceMotion} />
      </div>

      <h3
        style={{
          margin: '0 0 22px',
          fontSize: '26px',
          fontWeight: 500,
          letterSpacing: '-.02em',
          color: '#ffffff',
          lineHeight: 1.12,
        }}
      >
        {project.title}
      </h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          borderTop: '1px solid #17191c',
          paddingTop: '20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '92px 1fr',
            gap: '14px',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.09em',
              color: '#6b6f72',
              textTransform: 'uppercase',
            }}
          >
            Роль
          </span>
          <span
            style={{
              fontSize: '14.5px',
              lineHeight: 1.5,
              color: '#c6c9cb',
              fontWeight: 300,
            }}
          >
            {project.role}
          </span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '92px 1fr',
            gap: '14px',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.09em',
              color: '#6b6f72',
              textTransform: 'uppercase',
            }}
          >
            Задачи
          </span>
          <span
            style={{
              fontSize: '14.5px',
              lineHeight: 1.5,
              color: '#c6c9cb',
              fontWeight: 300,
            }}
          >
            {project.tasks}
          </span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '92px 1fr',
            gap: '14px',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              letterSpacing: '.09em',
              color: '#9281f7',
              textTransform: 'uppercase',
            }}
          >
            {project.hardLabel}
          </span>
          <span
            style={{
              fontSize: '14.5px',
              lineHeight: 1.5,
              color: '#c6c9cb',
              fontWeight: 300,
            }}
          >
            {project.hard}
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginTop: 'auto',
          paddingTop: '26px',
        }}
      >
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            whileHover={
              !shouldReduceMotion
                ? {
                    borderColor: '#3a3f45',
                    transition: { duration: 0.15 },
                  }
                : undefined
            }
            style={{
              fontFamily: "'Geist Mono',monospace",
              fontSize: '12px',
              color: '#b0b3b5',
              padding: '5px 11px',
              border: '1px solid #26292d',
              borderRadius: '7px',
              transition: 'border-color 0.15s ease',
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

function ProjectMedia({ project }: { project: (typeof projects)[0] }) {
  const isLeft = project.layout === 'text-right'
  const Preview = project.Preview

  return (
    <div
      className="proj-media"
      style={{
        position: 'relative',
        padding: '30px',
        display: 'flex',
        borderRight: isLeft ? '1px solid #17191c' : 'none',
        background: isLeft
          ? 'radial-gradient(ellipse at 30% 0%,rgba(146,129,247,.05),transparent 60%)'
          : 'radial-gradient(ellipse at 70% 0%,rgba(146,129,247,.05),transparent 60%)',
      }}
    >
      <Preview />
    </div>
  )
}

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="work"
      className="work-sec sect"
      style={{
        position: 'relative',
        padding: '110px 40px 60px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <motion.div
        variants={shouldReduceMotion ? undefined : headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
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
            01 — SELECTED WORK
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
            Избранные проекты
          </h2>
        </div>
        <p
          style={{
            margin: 0,
            maxWidth: '360px',
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#a1a4a5',
            fontWeight: 300,
          }}
        >
          Проекты приватные, поэтому показываю только безопасное описание: роль,
          стек, интерфейсные задачи и технические решения.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.num}
            variants={shouldReduceMotion ? undefined : cardVariants}
            whileHover={
              !shouldReduceMotion
                ? {
                    borderColor: '#2f3339',
                    y: -2,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }
                : undefined
            }
            style={{
              border: '1px solid #1c1f22',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg,#0a0b0c,#050506)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
              willChange: 'transform',
            }}
          >
            <div
              className="proj-grid"
              style={{
                display: 'grid',
                gridTemplateColumns:
                  project.layout === 'text-left' ? '.92fr 1.08fr' : '1.08fr .92fr',
                gap: 0,
                alignItems: 'stretch',
              }}
            >
              {project.layout === 'text-left' ? (
                <>
                  <ProjectText project={project} shouldReduceMotion={shouldReduceMotion} />
                  <ProjectMedia project={project} />
                </>
              ) : (
                <>
                  <ProjectMedia project={project} />
                  <ProjectText project={project} shouldReduceMotion={shouldReduceMotion} />
                </>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
