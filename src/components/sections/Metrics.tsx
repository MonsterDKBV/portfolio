'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { metrics } from '@/data/metrics'

export function Metrics() {
  return (
    <section className="py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            'grid grid-cols-1 sm:grid-cols-3',
            'border border-zinc-800 rounded-2xl',
            'overflow-hidden',
            'bg-zinc-900/30'
          )}
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn(
                'px-8 py-8',
                'border-b sm:border-b-0',
                index < metrics.length - 1 && 'sm:border-r',
                'border-zinc-800'
              )}
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={cn(
                    'text-3xl lg:text-4xl font-semibold',
                    'text-white',
                    'tracking-tight'
                  )}
                >
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-2xl lg:text-3xl font-semibold text-violet-400">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
