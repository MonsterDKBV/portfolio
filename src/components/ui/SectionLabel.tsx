import { cn } from '@/lib/cn'

type SectionLabelProps = {
  number: string
  label: string
  className?: string
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'font-mono text-xs tracking-[0.13em] uppercase',
        'text-violet-400',
        'mb-5',
        className
      )}
    >
      {number} — {label}
    </div>
  )
}
