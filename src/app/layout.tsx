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
    default: 'EduAssura - Integrated Academic Quality Assurance & Institutional Data Management Platform'
  },
  description:
    'EduAssura is a comprehensive cloud-based platform designed to automate institutional data collection, validation, monitoring, reporting, and quality assurance processes for higher education institutions.',
  robots: 'index,follow',
  keywords: [
    'EduAssura',
    'IQAC software',
    'institutional quality assurance',
    'academic data management',
    'faculty profile management',
    'research publication tracking',
    'accreditation data',
    'NAAC accreditation',
    'NBA accreditation',
    'NIRF ranking data',
    'automated report generation',
    'institutional performance monitoring',
    'quality assurance platform'
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
      default: 'EduAssura - Integrated Academic Quality Assurance & Institutional Data Management Platform'
    },
    description:
      'EduAssura is a comprehensive cloud-based platform designed to automate institutional data collection, validation, monitoring, reporting, and quality assurance processes for higher education institutions.',
    type: 'website',
    siteName: 'EduAssura',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'EduAssura - Integrated Academic Quality Assurance & Institutional Data Management Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - EduAssura',
      default: 'EduAssura - Integrated Academic Quality Assurance & Institutional Data Management Platform'
    },
    description:
      'EduAssura is a comprehensive cloud-based platform designed to automate institutional data collection, validation, monitoring, reporting, and quality assurance processes for higher education institutions.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        poppins.variable,
        libreBaskerville.variable,
        ibmPlexMono.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' forcedTheme='light' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
