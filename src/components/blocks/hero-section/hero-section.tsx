'use client'

import { useState, useEffect } from 'react'

import { ArrowUpRightIcon, CircleCheckIcon, LoaderIcon } from 'lucide-react'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { MotionPreset } from '@/components/ui/motion-preset'
import { PrimaryFlowButton } from '@/components/ui/flow-button'

import TextFlip from '@/components/blocks/hero-section/text-flip'

import { cn } from '@/lib/utils'

import FlowLogo from '@/assets/svg/flow-logo'

const HeroSection = () => {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % 4)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id='home' className='relative px-4 py-8 max-sm:pb-42 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <BackgroundRippleEffect />
      <div className='pointer-events-none absolute inset-x-0 top-0 z-5 h-128 bg-[radial-gradient(transparent_20%,var(--background)_90%)]' />
      <div className='space-y-12 sm:space-y-16 lg:space-y-24'>
        <div className='flex flex-col items-center gap-4'>
          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            inView={false}
            className='z-10'
          >
            <Badge variant='outline' className='bg-background h-auto text-sm font-normal'>
              An Integrated Academic Quality Assurance Platform
            </Badge>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            inView={false}
            delay={0.2}
            component='h1'
            className='z-10 text-center text-3xl font-semibold md:text-4xl lg:text-5xl lg:leading-[1.29167]'
          >
            Every Faculty <TextFlip /> On the Record
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            inView={false}
            delay={0.4}
            component='p'
            className='text-muted-foreground z-10 max-w-156 text-center text-xl'
          >
            EduAssura automates institutional data collection, validation, monitoring, reporting, and quality assurance.
            Faculty, departments, administrators, and IQAC teams manage academic and accreditation data from one platform.
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down' }}
            transition={{ duration: 0.5 }}
            inView={false}
            delay={0.6}
            className='z-10'
          >
            <PrimaryFlowButton asChild>
              <Link href='/#cta'>
                Book a demo
                <ArrowUpRightIcon />
              </Link>
            </PrimaryFlowButton>
          </MotionPreset>
        </div>

        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          transition={{ duration: 0.5 }}
          inView={false}
          delay={0.8}
          className='relative z-10 mb-0 flex min-h-full flex-col items-center justify-start'
        >
          <div className='w-full max-w-5xl overflow-hidden rounded-xl border shadow-2xl relative bg-background'>
            <img src='/images/dashboard.webp' alt='EduAssura Dashboard' className='w-full h-auto dark:hidden' />
            <img
              src='/images/dashboard-dark.webp'
              alt='EduAssura Dashboard Dark'
              className='hidden w-full h-auto dark:inline-block'
            />
          </div>
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'up' }}
          transition={{ duration: 0.5 }}
          inView={false}
          delay={1}
          className='z-15 flex justify-center transition-all duration-500 ease-in-out mt-8'
        >
          <div className='bg-primary text-primary-foreground flex items-center gap-6 rounded-full px-5 py-2.5 shadow-xl ring-4 ring-primary/20 backdrop-blur-md'>
            <div className='flex items-center gap-3 font-medium'>
              <FlowLogo className='size-6 rounded-full shadow-sm' />
              <div className='relative h-6 w-56 overflow-hidden'>
                <div
                  className='absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out'
                  style={{ transform: `translateY(-${messageIndex * 24}px)` }}
                >
                  <span className='flex h-6 items-center'>Welcome to EduAssura</span>
                  <span className='flex h-6 items-center'>Institutional KPI overview</span>
                  <span className='flex h-6 items-center'>Accreditation readiness</span>
                  <span className='flex h-6 items-center'>Verification & reporting</span>
                </div>
              </div>
            </div>
            {messageIndex === 3 ? (
              <CircleCheckIcon className='size-5 text-green-400' />
            ) : (
              <LoaderIcon className='size-5 animate-spin opacity-70' />
            )}
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
