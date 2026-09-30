import type { ReactNode } from 'react'

import {
  BookOpenTextIcon,
  CalendarDaysIcon,
  FileSpreadsheetIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  ShieldCheckIcon
} from 'lucide-react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { Navigation } from '@/components/layout/header-navigation'

const navigationData: Navigation[] = [
  {
    title: 'Features',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Faculty & Research',
        items: [
          {
            title: 'Faculty Contribution',
            href: '/#features',
            description: 'See every faculty member’s work across modules.',
            icon: <LayoutDashboardIcon className='size-4' />
          },
          {
            title: 'Research & IPR',
            href: '/#features',
            description: 'Publications, patents, projects and seed grants.',
            icon: <BookOpenTextIcon className='size-4' />
          },
          {
            title: 'Events & Proposals',
            href: '/#features',
            description: 'Plan, propose and record every event with proof.',
            icon: <CalendarDaysIcon className='size-4' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Quality & Reporting',
        items: [
          {
            title: 'Verification Workflow',
            href: '/#benefits',
            description: 'Verify, correct or reject entries with a reason.',
            icon: <ShieldCheckIcon className='size-4' />
          },
          {
            title: 'Reports & Downloads',
            href: '/#benefits',
            description: 'Quarterly Excel, academic booklet and proof packs.',
            icon: <FileSpreadsheetIcon className='size-4' />
          },
          {
            title: 'Roles & Access',
            href: '/#features',
            description: 'Each user sees only what their role allows.',
            icon: <KeyRoundIcon className='size-4' />
          }
        ]
      }
    ]
  },
  {
    title: 'Modules',
    href: '/#modules'
  },
  {
    title: 'Benefits',
    href: '/#benefits'
  },
  {
    title: 'Testimonials',
    href: '/#testimonials'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='flex flex-col bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--border)40%,transparent)0,color-mix(in_oklab,var(--border)40%,transparent)1px,transparent_0,transparent_50%)] bg-size-[12px_12px] bg-fixed'>
      <div className='h-full w-full'>
        <div className='bg-background h-full w-full'>
          {/* Header Section */}
          <Header navigationData={navigationData} />

          {/* Main Content */}
          <main className='flex flex-1 flex-col *:scroll-mt-16'>{children}</main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PagesLayout
