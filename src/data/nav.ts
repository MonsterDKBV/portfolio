import type { NavItem } from '@/types/common'

export const navItems: readonly NavItem[] = [
  { label: 'Работы', href: '#work' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Процесс', href: '#process' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#contact' },
] as const
