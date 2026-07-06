'use client'

import { cn } from '@/lib/cn'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2',
    'text-sm font-medium',
    'px-5 py-3 rounded-xl',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-black'
  )

  const variants: Record<ButtonVariant, string> = {
    primary: cn(
      'bg-white text-black',
      'hover:bg-white/90',
      'shadow-[0_0_20px_rgba(255,255,255,0.1)]'
    ),
    secondary: cn(
      'border border-zinc-700',
      'text-white',
      'hover:border-zinc-500 hover:bg-zinc-900/50'
    ),
    ghost: cn(
      'text-zinc-400',
      'hover:text-white hover:bg-zinc-900/50'
    ),
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
