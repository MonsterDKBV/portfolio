import type { ReactNode } from 'react'

export type NavItem = {
  label: string
  href: string
}

export type Contact = {
  label: string
  href: string
  icon: ReactNode
}

export type Metric = {
  value: string
  suffix?: string
  label: string
}

export type Skill = {
  name: string
  category: 'core' | 'state' | 'styling' | 'tools' | 'workflow'
}

export type AITag = {
  label: string
  highlighted?: boolean
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export type ExpertiseCard = {
  title: string
  description: string
  icon?: string
  highlighted?: boolean
}
