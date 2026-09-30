import type { ReactNode } from 'react'

import { IBM_Plex_Mono, Libre_Baskerville, Poppins } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono'
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

const poppins = Poppins({
  subsets: ['latin', 'latin-ext', 'devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: {
    template: '%s - EduAssura',
    default: 'EduAssura - Every achievement, on the record'
  },
  description:
    'EduAssura is one platform for faculty activity, proof, verification and institutional quality data - built for universities across India and their IQAC.',
  robots: 'index,follow',
  keywords: [
    'IQAC software',
    'institutional quality assurance',
    'faculty activity management',
    'accreditation data',
    'faculty appraisal',
    'SDG tagging'
  ],
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: '%s - EduAssura',
      default: 'EduAssura - Every achievement, on the record'
    },
    description:
      'EduAssura is one platform for faculty activity, proof, verification and institutional quality data - built for universities across India and their IQAC.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'EduAssura',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'EduAssura - Every achievement, on the record'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - EduAssura',
      default: 'EduAssura - Every achievement, on the record'
    },
    description:
      'EduAssura is one platform for faculty activity, proof, verification and institutional quality data - built for universities across India and their IQAC.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en-IN'
      className={cn(
        poppins.variable,
        libreBaskerville.variable,
        ibmPlexMono.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
