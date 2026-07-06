import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  variant?: 'default' | 'violet' | 'private'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'border-zinc-800 text-zinc-400',
    violet: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    private: 'border-zinc-700 text-zinc-500',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-3 py-1.5 rounded-lg',
        'text-xs font-mono uppercase tracking-wider',
        'border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
