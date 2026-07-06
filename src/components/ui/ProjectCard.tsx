'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { Badge } from './Badge'
import type { Project } from '@/types/project'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'group',
        'border border-zinc-800 rounded-2xl overflow-hidden',
        'bg-gradient-to-b from-zinc-900/50 to-zinc-950',
        'hover:border-zinc-700 transition-colors duration-300'
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Text content */}
        <div className="p-8 lg:p-10 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-zinc-600 tracking-wider">
              0{index + 1}
            </span>
            {project.private && (
              <Badge variant="private">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                Private
              </Badge>
            )}
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-500 font-mono mb-6">{project.type}</p>

          <div className="space-y-4 border-t border-zinc-800 pt-6">
            <ProjectRow label="Роль" value={project.role} />
            <ProjectRow label="Задачи" value={project.tasks} />
            <ProjectRow label="Интересно" value={project.interesting} highlight />
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'font-mono text-xs',
                  'px-3 py-1.5 rounded-lg',
                  'border border-zinc-800 text-zinc-400',
                  'group-hover:border-zinc-700 transition-colors'
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual placeholder - abstract UI pattern */}
        <div className="hidden lg:flex relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-8 items-center justify-center border-l border-zinc-800">
          <ProjectVisual type={project.id} />
        </div>
      </div>
    </motion.article>
  )
}

function ProjectRow({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-4 items-baseline">
      <span
        className={cn(
          'font-mono text-xs uppercase tracking-wider',
          highlight ? 'text-violet-400' : 'text-zinc-600'
        )}
      >
        {label}
      </span>
      <span className="text-sm text-zinc-300 leading-relaxed">{value}</span>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  // Abstract UI patterns for each project type
  const patterns: Record<string, React.ReactNode> = {
    'restaurant-orders': (
      <div className="w-full max-w-[280px] space-y-3">
        <div className="h-8 bg-zinc-800/50 rounded-lg w-3/4" />
        <div className="flex gap-2">
          <div className="h-20 flex-1 bg-zinc-800/30 rounded-lg border border-zinc-800" />
          <div className="h-20 flex-1 bg-zinc-800/30 rounded-lg border border-zinc-800" />
        </div>
        <div className="h-10 bg-violet-500/20 rounded-lg border border-violet-500/30" />
        <div className="flex items-center gap-2 justify-center text-xs text-zinc-600">
          <span>меню</span>
          <span className="text-violet-500">→</span>
          <span>корзина</span>
          <span className="text-violet-500">→</span>
          <span>заказ</span>
        </div>
      </div>
    ),
    'task-dashboard': (
      <div className="w-full max-w-[280px] space-y-3">
        <div className="flex gap-2">
          {['draft', 'progress', 'done'].map((status, i) => (
            <div key={status} className="flex-1 space-y-2">
              <div className={cn(
                'h-2 rounded-full',
                i === 0 && 'bg-zinc-600',
                i === 1 && 'bg-violet-500',
                i === 2 && 'bg-emerald-500/50'
              )} />
              <div className="h-16 bg-zinc-800/30 rounded-lg border border-zinc-800" />
              <div className="h-12 bg-zinc-800/20 rounded-lg border border-zinc-800/50" />
            </div>
          ))}
        </div>
      </div>
    ),
    'b2b-catalog': (
      <div className="w-full max-w-[280px] space-y-3">
        <div className="h-8 bg-zinc-800/50 rounded-lg" />
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-zinc-800/30 rounded-lg border border-zinc-800" />
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={cn(
              'w-2 h-2 rounded-full',
              i === 0 ? 'bg-violet-500' : 'bg-zinc-700'
            )} />
          ))}
        </div>
      </div>
    ),
    'content-platform': (
      <div className="w-full max-w-[280px] space-y-3">
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-20 bg-zinc-800/50 rounded" />
          <div className="h-6 w-16 bg-violet-500/20 rounded border border-violet-500/30" />
        </div>
        <div className="grid grid-cols-7 gap-1">
          {[...Array(21)].map((_, i) => (
            <div key={i} className={cn(
              'aspect-square rounded',
              i % 7 === 3 ? 'bg-violet-500/30' : 'bg-zinc-800/30'
            )} />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <span className="w-2 h-2 rounded-full bg-amber-500/50" />
          <span>draft</span>
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <span>review</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
          <span>published</span>
        </div>
      </div>
    ),
    'english-school': (
      <div className="w-full max-w-[280px] space-y-4">
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-4 border-violet-500/30 border-t-violet-500 flex items-center justify-center">
            <span className="text-lg font-mono text-violet-400">2:30</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-8 bg-zinc-800/30 rounded-lg border border-zinc-800" />
          <div className="h-8 bg-violet-500/20 rounded-lg border border-violet-500/30" />
          <div className="h-8 bg-zinc-800/30 rounded-lg border border-zinc-800" />
        </div>
        <div className="text-center text-xs text-zinc-600">Question 3 of 10</div>
      </div>
    ),
  }

  return patterns[type] || (
    <div className="w-full max-w-[280px] h-40 bg-zinc-800/20 rounded-lg border border-zinc-800" />
  )
}
