import type { Metric } from '@/types/common'

export const metrics: readonly Metric[] = [
  {
    value: '2,5',
    label: 'года в разработке',
  },
  {
    value: '30',
    suffix: '+',
    label: 'проектов разного масштаба',
  },
  {
    value: '10',
    suffix: '+',
    label: 'проектов дошли до запуска',
  },
] as const
