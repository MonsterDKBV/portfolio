'use client'

import { cn } from '@/lib/cn'
import { Mail } from 'lucide-react'
import type { ReactNode } from 'react'

type IconButtonProps = {
  href: string
  label: string
  iconPath?: string
  iconType?: 'mail' | 'instagram'
}

export function IconButton({ href, label, iconPath, iconType }: IconButtonProps) {
  const renderIcon = (): ReactNode => {
    if (iconType === 'mail') {
      return <Mail className="w-[18px] h-[18px]" strokeWidth={1.6} />
    }
    if (iconType === 'instagram') {
      return (
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x={3} y={3} width={18} height={18} rx={5} />
          <circle cx={12} cy={12} r={3.6} />
          <circle cx={17.4} cy={6.6} r={1} fill="currentColor" stroke="none" />
        </svg>
      )
    }
    if (iconPath) {
      return (
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={iconPath} />
        </svg>
      )
    }
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2.5',
        'px-5 py-3 rounded-xl',
        'border border-zinc-800',
        'text-sm font-medium text-white',
        'hover:border-zinc-600 hover:bg-zinc-900/50',
        'transition-all duration-200',
        'group'
      )}
    >
      <span className="text-zinc-400 group-hover:text-white transition-colors">
        {renderIcon()}
      </span>
      {label}
    </a>
  )
}
