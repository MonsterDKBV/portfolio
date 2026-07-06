import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#050506',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-one-sooty-82.vercel.app'),
  title: 'Daniel',
  description:
    'Frontend Developer — React, TypeScript, Next.js. Сайты, админ-панели, дашборды, каталоги и интеграции с API.',
  keywords: ['frontend', 'react', 'typescript', 'next.js', 'developer', 'разработчик'],
  authors: [{ name: 'Daniel Kubanychbekov' }],
  creator: 'Daniel Kubanychbekov',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Daniel',
    title: 'Daniel — Frontend Developer',
    description:
      'Frontend Developer — React, TypeScript, Next.js. Сайты, админ-панели, дашборды, каталоги и интеграции с API.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel — Frontend Developer',
    description:
      'Frontend Developer — React, TypeScript, Next.js.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
