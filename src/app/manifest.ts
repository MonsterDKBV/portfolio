import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Daniel — Frontend Developer',
    short_name: 'Daniel',
    description: 'Frontend Developer — React, TypeScript, Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#050506',
    theme_color: '#050506',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
